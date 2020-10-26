package com.musicutility.component;

import com.fazecast.jSerialComm.*;
import com.musicutility.persistence.model.*;
import com.musicutility.persistence.repo.IRReceiverSettingRepository;
import com.musicutility.web.MusicPlayerController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

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

    private boolean previousStop;

    StringBuffer input = null;
    String lastState = "";
    int triggerCount = 0;
    IRReceieverSetting receiverSetting;
    MusicPlayerController musicPlayerController;

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
            String portName = "";
            for (int index = 0; index < SerialPort.getCommPorts().length; index++) {
                if (SerialPort.getCommPorts()[index].getSystemPortName().contains("ttyACM")) {
                    portName = SerialPort.getCommPorts()[index].getSystemPortName();
                    break;
                }
            }

            if (portName != "") {
                SerialPort comPort = SerialPort.getCommPort("/dev/" + portName);
                LOGGER.info("Serial Port for IR Remote detect:" + portName);
                comPort.openPort();
                comPort.setBaudRate(9600);
                comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_BLOCKING, 1, 0);
                comPort.addDataListener(this);

                try {
                    while (true) {
                        Thread.sleep(5000);
                        if (!comPort.isOpen()) {
                            break;
                        }

                    }
                } catch (Exception exception) {
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
        if (serialPortEvent.getEventType() == SerialPort.LISTENING_EVENT_DATA_RECEIVED) {
            byte[] newData = serialPortEvent.getReceivedData();

            if (input == null) {
                input = new StringBuffer();
            }

            boolean completeData = false;
            String message = new String(newData);

            if (message.contains("\n")) {
                input.append(message);
                completeData = true;
            } else {
                input.append(message);
            }


            if (completeData) {
                String command = input.toString().split("\r\n")[0];
                input = null;

                String currentState = "";

                if (receiverSetting.getFastBackwardList().contains(command)) {
                    currentState = FAST_BACKWARD;
                } else if (receiverSetting.getFastForwardList().contains(command)) {
                    currentState = FAST_FORWARD;
                } else if (receiverSetting.getPlayList().contains(command)) {
                    currentState = PLAY;
                } else if (receiverSetting.getStopList().contains(command)) {
                    currentState = STOP;
                } else if (receiverSetting.getPauseList().contains(command)) {
                    currentState = PAUSE;
                } else if (receiverSetting.getLastList().contains(command)) {
                    currentState = LAST;
                } else if (receiverSetting.getNextList().contains(command)) {
                    currentState = NEXT;
                } else if (receiverSetting.getNetworkOnList().contains(command)) {
                    currentState = NETWORK_ON;
                } else if (receiverSetting.getNetworkOffList().contains(command)) {
                    currentState = NETWORK_OFF;
                } else {
                    // As command not found, skip processing it
                    return;
                }

                boolean triggerCommand = false;

                // Ignore the immediate second input
                if ((currentState == lastState) && triggerCount == 0) {
                    triggerCommand = true;
                    triggerCount++;
                } else {
                    triggerCount = 0;
                }

                lastState = currentState;

                if (triggerCommand) {
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

            }
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
            LOGGER.info("Error in disabling network service " + exception.toString());
        }
    }
}
