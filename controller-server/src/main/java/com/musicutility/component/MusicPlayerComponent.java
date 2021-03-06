package com.musicutility.component;

import com.musicutility.persistence.model.MusicPlayerSetting;
import com.musicutility.persistence.model.MusicPlayerState;
import com.musicutility.persistence.repo.MusicPlayerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sound.sampled.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class MusicPlayerComponent  implements Runnable {

    MusicPlayerRepository musicPlayerRepository;

    private MusicPlayerState musicPlayerState;

    private AudioInputStream audioInputStream;
    private SourceDataLine sourceDataLine ;

    private static final Logger LOGGER = LoggerFactory.getLogger(MusicPlayerComponent.class);

    // From https://www.mkyong.com/java/how-to-detect-os-in-java-systemgetpropertyosname/
    private static String OS = System.getProperty("os.name").toLowerCase();

    @Override
    public void run() {
        while(true)
        {
            try {
                if (musicPlayerRepository != null) {
                    MusicPlayerSetting musicPlayerSetting = musicPlayerRepository.getMusicPlayerSetting();
                    if (musicPlayerSetting != null && musicPlayerSetting.getPlay()) {

                    if(musicPlayerSetting.getCurrentMusicFile() != null && musicPlayerSetting.getCurrentMusicList() != null && musicPlayerSetting.getCurrentMusicMixer() != null) {
                        MusicPlayerComponent musicPlayerComponent = new MusicPlayerComponent(musicPlayerRepository);
                        musicPlayerComponent.play();
                    }
                    else
                    {
                        Thread.sleep(5000);
                    }
                    } else {
                        Thread.sleep(5000);
                    }
                }
            }
            catch(Exception exception)
            {
            }


        }
    }

    public MusicPlayerComponent(MusicPlayerRepository musicPlayerRepository)
    {
        audioInputStream = null;
        sourceDataLine = null;

        musicPlayerState = new MusicPlayerState();

        this.musicPlayerRepository = musicPlayerRepository;
    }

    void play() {

        try {

            // Try to clean up previous pulseaudio

            ProcessBuilder processBuilder = new ProcessBuilder();

            // WORKAROUND CODE:
            // this is for linux only command
            // clean up default (as the process maybe unplug and plug back, but pulseaudio may already cut over to other device)
            // also there is delay after the device is plug back in, so kill pulseaudio will force new process to spawn up again and ensure latest one is added
            // also restart pluseaudio
            // this is an okay workaround under the scenario this utility is running as a service in a headless Linux account
            if (OS.contains("nix")  || OS.contains("nux") || OS.contains("aix")) {
                processBuilder.command("bash", "-c", "rm -rf ~/.config/pulse/*-default-sink && kill  $(ps aux | grep ${USER} | grep '[p]ulseaudio' | awk '{print $2}')");


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

            File audioFile = new File(musicPlayerRepository.getMusicPlayerSetting().getCurrentMusicFile().getPath());

            audioInputStream = AudioSystem.getAudioInputStream(audioFile);

            AudioFormat audioFormat = audioInputStream.getFormat();

            Mixer.Info[] mixerInfos = AudioSystem.getMixerInfo();

            long totalFrames = audioInputStream.getFrameLength();

            musicPlayerState.setFrameSize(audioFormat.getFrameSize());
            // from https://stackoverflow.com/questions/35822296/how-to-keep-track-of-audio-playback-position
            musicPlayerState.setBufferSize(audioFormat.getFrameSize() * 1024);
            musicPlayerState.setTotalFrames(totalFrames);
            musicPlayerState.setSampleRate(audioFormat.getSampleRate());

            double targetElapsePerecentage = musicPlayerRepository.getTargetElapsedPercentage();

            Mixer.Info targetMixerInfo = null;


            for (int index = 0; index < mixerInfos.length; index++) {
                if (mixerInfos[index].getName().equalsIgnoreCase(musicPlayerRepository.getMusicPlayerSetting().getCurrentMusicMixer().getName())) {
                    targetMixerInfo = mixerInfos[index];
                    break;
                }
            }


            DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat);

            long newFramePosition = 0;

            if (targetMixerInfo != null)
            {
                sourceDataLine = (SourceDataLine) AudioSystem.getMixer(targetMixerInfo).getLine(info);

                //sourceDataLine.open(audioFormat);
                sourceDataLine.open();
                sourceDataLine.start();

                byte[] byteBuffer = new byte[musicPlayerState.getBufferSize()];
                int byteRead = -1;

                musicPlayerState.setPlaying(true);
                musicPlayerState.setFramePosition(0);

                boolean nextMusic = true;

                while ((byteRead = audioInputStream.read(byteBuffer)) != -1) {
                    newFramePosition = newFramePosition + (byteRead / musicPlayerState.getFrameSize());

                    musicPlayerState.setFramePosition(newFramePosition);

                    musicPlayerRepository.setMusicPlayerState(musicPlayerState);
                    if(targetElapsePerecentage == 0 || ((int) Math.round((double) newFramePosition / (double) totalFrames * 100)) >= targetElapsePerecentage)
                    {
                        sourceDataLine.write(byteBuffer, 0, byteRead);
                    }

                    if ( musicPlayerRepository.getMusicPlayerSetting().getPlay() == false) {

                        // As it is sent by stop command, stop at current music, not move to next one
                        nextMusic = false;
                        break;
                    }
                }

                // Only switch if it is a complete music file play, not due to early stop
                if(nextMusic) {
                    musicPlayerRepository.nextMusicFile();
                }

            } else {
                musicPlayerState.setErrorMessage("cannot find target mixer");
            }

            // Reset music setting to 0
            musicPlayerRepository.setTargetElapsedPercentage(0);

        }
        catch(Exception exception)
        {
            musicPlayerState.setErrorMessage(exception.toString());
        }
        finally {
            musicPlayerState.setPlaying(false);

            if(sourceDataLine != null) {
                sourceDataLine.drain();
                sourceDataLine.close();
                sourceDataLine = null;
            }
            if(audioInputStream != null) {
                try {
                    audioInputStream.close();
                    audioInputStream = null;
                }
                catch(IOException exception)
                {
                    musicPlayerState.setErrorMessage(exception.toString());
                }
            }

            // https://stackoverflow.com/questions/26538718/audioinputstream-close-not-releasing-resources-properly-is-there-a-workaround
            // Force gc clean up to ensure not too many file descriptors are opened
            System.gc();

            musicPlayerRepository.setMusicPlayerState(musicPlayerState);
        }

    }
}
