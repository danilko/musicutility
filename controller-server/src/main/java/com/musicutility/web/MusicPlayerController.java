package com.musicutility.web;

import com.musicutility.persistence.model.*;
import com.musicutility.persistence.repo.MusicListRepository;
import com.musicutility.persistence.repo.MusicMixerRepository;
import com.musicutility.persistence.repo.MusicPlayerRepository;
import com.musicutility.web.exception.MusicListNotFoundException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/musicplayer")
public class MusicPlayerController {

    @Autowired
    MusicPlayerRepository musicPlayerRepository;

    @Autowired
    MusicListRepository musicListRepository;

    @Autowired
    MusicMixerRepository musicMixerRepository;

    @PutMapping("/setting")
    @ResponseStatus(HttpStatus.OK)
    public MusicPlayerSetting update(@RequestBody MusicPlayerSetting musicPlayerSetting, @RequestParam("elapsedpercentage") String elapsedPercentage) {


        MusicPlayerSetting newMusicPlayerSetting = new MusicPlayerSetting();

        MusicList musicList = musicListRepository.findById(musicPlayerSetting.getCurrentMusicList().getId());

        if (musicList == null) {
            throw new MusicListNotFoundException();
        }

        newMusicPlayerSetting.setCurrentMusicList(musicList);

        MusicFile currentMusicFile = null;

        if (musicList.getMusicFiles().size() > 0)
        {
        for (MusicFile musicFile : musicList.getMusicFiles()){
            if(StringUtils.compareIgnoreCase(musicFile.getId(), musicPlayerSetting.getCurrentMusicFile().getId()) == 0) {
                currentMusicFile = musicFile;
            }
        }

        if(currentMusicFile == null)
        {
            currentMusicFile = musicList.getMusicFiles().get(0);
        }
        }


        List<MusicMixer> musicMixers =  musicMixerRepository.findAll();
        MusicMixer currentMusicMixer = null;
            for (MusicMixer musicMixer : musicMixers){
                if(StringUtils.compareIgnoreCase(musicMixer.getId(), musicPlayerSetting.getCurrentMusicMixer().getId()) == 0) {
                    currentMusicMixer = musicMixer;
                }
            }


        newMusicPlayerSetting.setCurrentMusicFile(currentMusicFile);

        newMusicPlayerSetting.setPlay(musicPlayerSetting.getPlay());

        newMusicPlayerSetting.setCurrentMusicMixer(currentMusicMixer);

        double targetElapsedPercentage = 0;

        if(newMusicPlayerSetting.getPlay() && elapsedPercentage != null)
        {
            try{
                targetElapsedPercentage = Double.parseDouble(elapsedPercentage);

                if(targetElapsedPercentage < 0 || targetElapsedPercentage >= 100)
                {
                    targetElapsedPercentage = 0;
                }
            }
            catch (Exception exception)
            {
                targetElapsedPercentage = 0;
            }
        }

        synchronized (this) {
            // If it is try to play on top of play, then stop the current music first
            // So it will immediately start new music/position
            if (newMusicPlayerSetting.getPlay() && musicPlayerRepository.getMusicPlayerState().getPlaying()) {
                newMusicPlayerSetting.setPlay(false);
                musicPlayerRepository.save(newMusicPlayerSetting, false);

                while(musicPlayerRepository.getMusicPlayerState().getPlaying())
                {
                    // Sleep for 0.5 second if first retry is not working
                    try {
                        Thread.sleep(500);
                    }
                    catch (Exception exception)
                    {
                        // Ignore error as in worst case will just continue loop through
                    }
                }

                // Set back the input state again
                newMusicPlayerSetting.setPlay(true);
            }

            // Set the target percentage at here, as if it is stop in previous, it will set to empty again, so need to set immediately before start
            musicPlayerRepository.setTargetElapsedPercentage(targetElapsedPercentage);
            musicPlayerRepository.save(newMusicPlayerSetting, true);
        }

        return newMusicPlayerSetting;
    }



    @GetMapping("/setting")
    @ResponseStatus(HttpStatus.OK)
    public MusicPlayerSetting getCurrentMusicPlayerSetting() {

        return musicPlayerRepository.getMusicPlayerSetting();
    }

    @GetMapping("/state")
    @ResponseStatus(HttpStatus.OK)
    public MusicPlayerState getCurrentMusicPlayerState() {

        return musicPlayerRepository.getMusicPlayerState();
    }
}
