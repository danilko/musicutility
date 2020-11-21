package com.musicutility.component;

import com.fazecast.jSerialComm.*;
import com.musicutility.persistence.model.*;
import com.musicutility.persistence.repo.IRReceiverSettingRepository;
import com.musicutility.web.MusicPlayerController;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class IRReceiverComponent implements Runnable, SerialPortDataListener {

    private static String FAST_BACKWARD = "FAST_BACKWARD";
    private static String FAST_FORWARD = "FAST_FORWARD";
    private static String PLAY = "PLAY";
    private static String STOP = "STOP";
    private static String PAUSE = "PAUSE";
    private static String NEXT = "NEXT";
    private static String LAST = "LAST";
    private static String NETWORK_ON = "NETWORK_ON";
    private static String NETWORK_OFF = "NETWORK_OFF";
    private static String TTYACM = "_TTYACM";

    private boolean previousStop;

    StringBuffer input = null;
    IRReceieverSetting receiverSetting;
    MusicPlayerController musicPlayerController;

    boolean inputTrigger;

    // From https://www.mkyong.com/java/how-to-detect-os-in-java-systemgetpropertyosname/
    private static String OS = System.getProperty("os.name").toLowerCase();

    private static final Logger LOGGER = LoggerFactory.getLogger(IRReceiverComponent.class);

    public IRReceiverComponent(IRReceiverSettingRepository irReceiverSettingRepository, MusicPlayerController musicPlayerController) {
        receiverSetting = irReceiverSettingRepository.getIRReceiverSetting();
        this.musicPlayerController = musicPlayerController;

        previousStop = false;
    }

    @Override
    public void run() {
        while (true) {
            String portName = receiverSetting.getPortName();
            if (StringUtils.isBlank(portName)) {
                // Only scan if portName not given
                for (int index = 0; index < SerialPort.getCommPorts().length; index++) {
                    if (SerialPort.getCommPorts()[index].getSystemPortName().contains(receiverSetting.getPortPrefix())) {
                        portName = SerialPort.getCommPorts()[index].getSystemPortName();
                        break;
                    }
                }
            }

            if (StringUtils.isNotBlank(portName)) {
                SerialPort comPort = SerialPort.getCommPort("/dev/" + portName);
                LOGGER.info("Serial Port for IR Remote detect:" + portName);
                comPort.openPort();
                comPort.setBaudRate(9600);
                comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_BLOCKING, 1, 0);
                comPort.addDataListener(this);

                inputTrigger = false;

                try {
                    while (true) {
                        Thread.sleep(100);

                        // If input did trigger
                        if (inputTrigger) {
                            // Wait for 500 milliseconds to complete all input
                            Thread.sleep(1000);
                            inputTrigger = false;
                            // Clean up the input
                            String cleanupInput = input.toString().split("\n")[0]
                                    .replace("\n", "")
                                    .replace("\r", "");
                            String currentState = scanCodeState(cleanupInput);

                            // Clean the input for next input
                            input = null;

                            if (StringUtils.isNotBlank(currentState)) {

                                LOGGER.debug("Log Command: " + currentState);

                                triggerCommand(currentState);
                            }
                        }

                        if (!comPort.isOpen()) {
                            break;
                        }

                    }
                } catch (Exception exception) {
                    inputTrigger = false;

                    LOGGER.info("remote exception OUTPUT " + exception.toString());
                }

                comPort.removeDataListener();
                comPort.closePort();
            }
            // Sleep for 2 seconds to wait for next re - check
            try {
                Thread.sleep(2000);
            } catch (Exception exception) {
            }
        }

    }

    @Override
    public int getListeningEvents() {
        return SerialPort.LISTENING_EVENT_DATA_RECEIVED;
    }

    @Override
    public void serialEvent(SerialPortEvent serialPortEvent) {
        try {
            if (serialPortEvent.getEventType() == SerialPort.LISTENING_EVENT_DATA_RECEIVED) {
                byte[] newData = serialPortEvent.getReceivedData();

                // Empty out if command prefix is not null
                if (input == null) {
                    // This is a new command due to command prefix
                    // or previous input is already clean to null, so clean the previous input
                    input = new StringBuffer();
                }

                String message = "";

                // If no hex decode, the decode it
                if (! receiverSetting.getIsHexDecode()) {

                    for (byte aByte : newData) {
                        // Hex format
                        message = message + String.format("%02x", aByte);
                    }
                } else {
                    // Otherwise just use the byte to string as is
                    message = new String(newData);
                }

                input.append(message);

                inputTrigger = true;
            }
        } catch (Exception exception) {
            LOGGER.error("Exception during execution of remote " + exception.toString());
        }
    }

    private String scanCodeState(String code) {
        // Default return state is null
        String currentState = "";

        if (receiverSetting.getFastBackwardList().contains(code)) {
            currentState = FAST_BACKWARD;
        } else if (receiverSetting.getFastForwardList().contains(code)) {
            currentState = FAST_FORWARD;
        } else if (receiverSetting.getPlayList().contains(code)) {
            currentState = PLAY;
        } else if (receiverSetting.getStopList().contains(code)) {
            currentState = STOP;
        } else if (receiverSetting.getPauseList().contains(code)) {
            currentState = PAUSE;
        } else if (receiverSetting.getLastList().contains(code)) {
            currentState = LAST;
        } else if (receiverSetting.getNextList().contains(code)) {
            currentState = NEXT;
        } else if (receiverSetting.getNetworkOnList().contains(code)) {
            currentState = NETWORK_ON;
        } else if (receiverSetting.getNetworkOffList().contains(code)) {
            currentState = NETWORK_OFF;
        }

        return currentState;
    }

    private void triggerCommand(String currentState) {
        try {
            MusicPlayerSetting setting = musicPlayerController.getCurrentMusicPlayerSetting();
            MusicPlayerState state = musicPlayerController.getCurrentMusicPlayerState();
            // As no list select, return
            if (setting.getCurrentMusicList() == null) {
                return;
            }

            if (currentState == FAST_FORWARD) {
                setFastForward(setting, state);
            } else if (currentState == FAST_BACKWARD) {
                setFastBackward(setting, state);
            } else if (currentState == PLAY) {
                setPlay(setting, state);
            } else if (currentState == STOP) {
                setStop(setting);
            } else if (currentState == PAUSE) {
                setPause(setting, state);
            } else if (currentState == NEXT) {
                setNextMusicFile(setting);
            } else if (currentState == LAST) {
                setLastMusicFile(setting);
            } else if (currentState == NETWORK_ON) {
                toggletNetwork(true);
            } else if (currentState == NETWORK_OFF) {
                toggletNetwork(false);
            }
        } catch (Exception exception) {
            LOGGER.info("Remote exception occur, will skip this execution");
        }
    }

    private int findMusicFileIndex(MusicPlayerSetting setting) {
        MusicList musicList = setting.getCurrentMusicList();
        return musicList.getMusicFiles().indexOf(setting.getCurrentMusicFile());
    }

    private void setPlay(MusicPlayerSetting setting, MusicPlayerState state) {
        if (!setting.getPlay()) {
            setting.setPlay(true);
            String elapsedTime = "" + state.getElapsedPercentage();
            if (previousStop) {
                elapsedTime = "0";
                previousStop = false;
            }
            // Update and start at 0
            musicPlayerController.update(setting, elapsedTime);

        }
    }

    private void setFastForward(MusicPlayerSetting setting, MusicPlayerState state) {
        if (setting.getPlay()) {
            double elapsedPercentage = state.getElapsedPercentage() + 5;

            if (elapsedPercentage > 100) {
                elapsedPercentage = 100;
            }

            musicPlayerController.update(setting, "" + elapsedPercentage);
        }
    }

    private void setFastBackward(MusicPlayerSetting setting, MusicPlayerState state) {
        if (setting.getPlay()) {
            double elapsedPercentage = state.getElapsedPercentage() - 5;

            if (elapsedPercentage < 0) {
                elapsedPercentage = 0;
            }

            musicPlayerController.update(setting, "" + elapsedPercentage);
        }
    }

    private void setStop(MusicPlayerSetting setting) {
        if (setting.getPlay()) {
            setting.setPlay(false);
            musicPlayerController.update(setting, "0");
            previousStop = true;
        }
    }

    private void setPause(MusicPlayerSetting setting, MusicPlayerState state) {
        if (setting.getPlay()) {
            setting.setPlay(false);
            musicPlayerController.update(setting, "" + state.getElapsedPercentage());
        }
    }

    private void setNextMusicFile(MusicPlayerSetting setting) {

        int index = findMusicFileIndex(setting) + 1;

        // if it is behind possible index, reset to 0 to toward return
        if (index >= setting.getCurrentMusicList().getMusicFiles().size()) {
            index = 0;
        }

        setting.setCurrentMusicFile(setting.getCurrentMusicList().getMusicFiles().get(index));

        // Update and start at 0
        musicPlayerController.update(setting, "0");
    }

    private void setLastMusicFile(MusicPlayerSetting setting) {
        // As no list select, return
        if (setting.getCurrentMusicList() == null) {
            return;
        }


        int index = findMusicFileIndex(setting) - 1;

        // if it is behind 0 index, then it will be jump to last index
        if (index < 0) {
            index = setting.getCurrentMusicList().getMusicFiles().size() - 1;
        }

        setting.setCurrentMusicFile(setting.getCurrentMusicList().getMusicFiles().get(index));

        // Update and start at 0
        musicPlayerController.update(setting, "0");
    }

    private void toggletNetwork(boolean toggle) {
        try {
            ProcessBuilder processBuilder = new ProcessBuilder();

            // Stop network service
            // this is an okay workaround under the scenario this utility is running as a service in a headless Linux account
            if (OS.contains("nix") || OS.contains("nux") || OS.contains("aix")) {
                String command = "/usr/bin/nmcli networking ";
                if (toggle) {
                    command = command + "on";
                } else {
                    command = command + "off";
                }

                processBuilder.command("bash", "-c", command);

                Process process = processBuilder.start();

                StringBuilder output = new StringBuilder();

                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(process.getInputStream()));

                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line + "\n");
                }

                int exitVal = process.waitFor();
                if (exitVal == 0) {
                    // Skip for now as force close may fail if there is no previous session
                } else {
                    // Skip for now as force close may fail if there is no previous session
                }
            }
        } catch (Exception exception) {
            LOGGER.error("Error in disabling network service " + exception.toString());
        }
    }
}
