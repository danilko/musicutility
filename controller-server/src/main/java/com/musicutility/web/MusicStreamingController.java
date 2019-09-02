package com.musicutility.web;

import com.musicutility.persistence.model.MusicFile;
import com.musicutility.persistence.model.MusicList;
import com.musicutility.persistence.repo.MusicListRepository;
import com.musicutility.web.exception.MusicListNotFoundException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/api/musicstreaming/musiclists")
public class MusicStreamingController {
    @Autowired
    private MusicListRepository musicListRepository;


    @RequestMapping(value="{musicListId}/musicfiles/{musicId}", method = RequestMethod.GET)
    public FileSystemResource getContent(@PathVariable("musicListId") String musicListId, @PathVariable("musicId") String musicId) throws FileNotFoundException {



        MusicList currentMusicList = musicListRepository.findById(musicListId);
        if (currentMusicList == null) {
            throw new MusicListNotFoundException();
        }
        List<MusicFile> currentMusicFiles = currentMusicList.getMusicFiles();

        MusicFile muicFile = null;

        for(MusicFile tempMusicFile : currentMusicFiles)
        {
            if(StringUtils.equals(musicId, tempMusicFile.getId()))
            {
                muicFile = tempMusicFile;
                break;
            }
        }

        if(muicFile == null)
        {
            throw new MusicListNotFoundException();
        }

        File file = new File(muicFile.getPath());

        if (! file.exists()) {
            throw new MusicListNotFoundException();
        }

        return new FileSystemResource(file);
    }
}
