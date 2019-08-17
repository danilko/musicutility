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

            processBuilder.command("bash", "-c", "kill  $(ps aux | grep ${USER} | grep '[p]ulseaudio' | awk '{print $2}')");

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
                // Skip if success
            } else {
                musicPlayerState.setErrorMessage("cannot close previous session");
            }


            File audioFile = new File(musicPlayerRepository.getMusicPlayerSetting().getCurrentMusicFile().getPath());

            audioInputStream = AudioSystem.getAudioInputStream(audioFile);

            AudioFormat audioFormat = audioInputStream.getFormat();

            Mixer.Info[] mixerInfos = AudioSystem.getMixerInfo();

            musicPlayerState.setFrameSize(audioFormat.getFrameSize());
            // from https://stackoverflow.com/questions/35822296/how-to-keep-track-of-audio-playback-position
            musicPlayerState.setBufferSize(audioFormat.getFrameSize() * 1024);
            musicPlayerState.setTotalFrames(audioInputStream.getFrameLength());
            musicPlayerState.setSampleRate(audioFormat.getSampleRate());

            Mixer.Info targetMixerInfo = null;


            for (int index = 0; index < mixerInfos.length; index++) {
                if (mixerInfos[index].getName().equalsIgnoreCase(musicPlayerRepository.getMusicPlayerSetting().getCurrentMusicMixer().getName())) {
                    targetMixerInfo = mixerInfos[index];
                    break;
                }
            }


            DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat);

            if (targetMixerInfo != null)
            {
                sourceDataLine = (SourceDataLine) AudioSystem.getLine(info);

                sourceDataLine = (SourceDataLine) AudioSystem.getMixer(targetMixerInfo).getLine(info);

                sourceDataLine.open(audioFormat);

                sourceDataLine.start();

                byte[] byteBuffer = new byte[musicPlayerState.getBufferSize()];
                int byteRead = -1;

                musicPlayerState.setPlaying(true);
                musicPlayerState.setFramePosition(0);

                boolean nextMusic = true;

                while ((byteRead = audioInputStream.read(byteBuffer)) != -1) {
                    sourceDataLine.write(byteBuffer, 0, byteRead);
                    musicPlayerState.setFramePosition( musicPlayerState.getFramePosition() + (byteRead / musicPlayerState.getFrameSize()));
                    musicPlayerRepository.setMusicPlayerState(musicPlayerState);

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
            }
            if(audioInputStream != null) {
                try {
                    audioInputStream.close();
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
