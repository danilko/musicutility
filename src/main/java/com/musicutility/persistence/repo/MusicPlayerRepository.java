package com.musicutility.persistence.repo;

import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.musicutility.persistence.model.MusicFile;
import com.musicutility.persistence.model.MusicPlayerSetting;
import com.musicutility.persistence.model.MusicPlayerState;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.List;

@Repository
public class MusicPlayerRepository {

    private MusicPlayerSetting musicPlayerSetting;


    private MusicPlayerState musicPlayerState;

    private String configurationPath;
    private ObjectMapper objectMapper;
    private ObjectWriter objectWriter;

    private int currentMusicFileIndex;

    public MusicPlayerRepository()
    {
        ObjectMapper mapper = new ObjectMapper();

        String path = System.getenv("MUSIC_UTILITY_LOCATION");

        if(path == null)
        {
            path= System.getProperty("user.dir") + "/";
        }
        else
        {
            path = path + "/";
        }

        configurationPath = path + "music_player.json";

        objectMapper = new ObjectMapper();
        objectWriter = objectMapper.writer(new DefaultPrettyPrinter());

        File file = new File(configurationPath);

        musicPlayerSetting = new MusicPlayerSetting();

        if(! file.exists())
        {
            saveConfiguration();
        }
        else {
            try {
                musicPlayerSetting = objectMapper.readValue(new File(configurationPath), MusicPlayerSetting.class);
            }
            catch(Exception exception)
            {
                exception.printStackTrace();
                musicPlayerSetting = new MusicPlayerSetting();
            }
        }

        musicPlayerState = new MusicPlayerState();
        currentMusicFileIndex = -1;
    }

    public MusicPlayerSetting getMusicPlayerSetting() {
        return musicPlayerSetting;
    }

    public MusicPlayerSetting save(MusicPlayerSetting musicPlayerSetting)
    {

            this.musicPlayerSetting = musicPlayerSetting;

            saveConfiguration();

        return musicPlayerSetting;
    }


    public void nextMusicFile()
    {
        if(musicPlayerSetting.getCurrentMusicList().getMusicFiles().size() > 0) {
            List<MusicFile> musicFiles = getMusicPlayerSetting().getCurrentMusicList().getMusicFiles();
            MusicFile currentMusicFile = getMusicPlayerSetting().getCurrentMusicFile();

            if (currentMusicFileIndex == -1) {
                currentMusicFileIndex = 0;

                for(int index = 0; index < musicFiles.size(); index++ )
                {
                    if(StringUtils.compareIgnoreCase(musicFiles.get(index).getId(), currentMusicFile.getId()) == 0)
                    {
                        currentMusicFileIndex = index;
                        break;
                    }
                }
            }

                currentMusicFileIndex = currentMusicFileIndex + 1;

                if(currentMusicFileIndex >= musicFiles.size())
                {
                    currentMusicFileIndex = 0;
                }

                musicPlayerSetting.setCurrentMusicFile(musicFiles.get(currentMusicFileIndex));

                saveConfiguration();
        }
    }

    private void saveConfiguration()
    {
        try {
            objectWriter.writeValue(new File(configurationPath), musicPlayerSetting);
        }
        catch(Exception exception)
        {
            exception.printStackTrace();
        }
    }

    public MusicPlayerState getMusicPlayerState() {
            musicPlayerState.setMusicPlayerSetting(musicPlayerSetting);

            double fractionalProgress = (int) Math.round((double) musicPlayerState.getFramePosition() / (double) musicPlayerState.getTotalFrames() * 100);

            musicPlayerState.setElapsedPercentage(fractionalProgress + "%");

            int secondsElapsed = (int) Math.round((double) musicPlayerState.getFramePosition()  / musicPlayerState.getSampleRate());

            int elaspsedMinutes = secondsElapsed / 60;
            int elapsedSeconds = secondsElapsed % 60;

            int secondsTotal =  (int) Math.round((double) musicPlayerState.getTotalFrames() / musicPlayerState.getSampleRate());

            int totalMinutes = secondsTotal / 60;
            int totalSeconds = secondsTotal % 60;


            musicPlayerState.setElaspsedTime(String.format("%02d:%02d/%02d:%02d", elaspsedMinutes, elapsedSeconds, totalMinutes, totalSeconds));

        return musicPlayerState;
    }

    public void setMusicPlayerState(MusicPlayerState musicPlayerState) {
        synchronized(this) {
        this.musicPlayerState.setFramePosition(musicPlayerState.getFramePosition());
        this.musicPlayerState.setBufferSize(musicPlayerState.getBufferSize());
        this.musicPlayerState.setFrameSize(musicPlayerState.getFrameSize());
        this.musicPlayerState.setTotalFrames(musicPlayerState.getTotalFrames());

        this.musicPlayerState.setSampleRate(musicPlayerState.getSampleRate());

        this.musicPlayerState.setPlaying(musicPlayerState.getPlaying());
        this.musicPlayerState.setErrorMessage(musicPlayerState.getErrorMessage());
        }
    }

}
