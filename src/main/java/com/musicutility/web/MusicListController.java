package com.musicutility.web;

import com.musicutility.persistence.model.MusicFile;
import com.musicutility.persistence.model.MusicList;
import com.musicutility.persistence.repo.MusicListRepository;
import com.musicutility.web.exception.MusicListIdMismatchException;
import com.musicutility.web.exception.MusicListNotFoundException;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/musiclists")
public class MusicListController {

    @Autowired
    private MusicListRepository musicListRepository;

    @GetMapping()
    public List<MusicList> getAll()    {
        return musicListRepository.findAll();
    }

    @GetMapping("/{id}")
    public MusicList getMusicLists(@PathVariable String id) {
        MusicList musicList = musicListRepository.findById(id);
        if (musicList == null) {
            throw new MusicListNotFoundException();
        }

        return musicList;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MusicList create(@RequestBody MusicList musicList) {

        String generatedId = null;

        while (true) {
            generatedId = RandomStringUtils.randomAlphabetic(32);

            if (musicListRepository.findById(generatedId) == null) {
                break;
            }
        }

        MusicList newMusicList = new MusicList(generatedId, musicList.getLabel(), new ArrayList<MusicFile>());

        MusicList resultMusicList = musicListRepository.save(newMusicList);
        return resultMusicList;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        MusicList musicList = musicListRepository.findById(id);
        if (musicList == null) {
            throw new MusicListNotFoundException();
        }
        musicListRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public MusicList updateMusicList(@RequestBody MusicList musicList, @PathVariable String id) {
        if(StringUtils.equals(musicList.getId(), id) != true) {
            throw new MusicListIdMismatchException();
        }

        MusicList currentMusicList = musicListRepository.findById(id);
        if (currentMusicList == null) {
            throw new MusicListNotFoundException();
        }

        currentMusicList.setLabel(musicList.getLabel());

        List<MusicFile> importedMusicFiles = musicList.getMusicFiles();

        ArrayList <MusicFile> newMusicFiles = new ArrayList<MusicFile>();

        for(MusicFile musicFile : importedMusicFiles)
        {
            MusicFile newMusicFile = new MusicFile(DigestUtils.md5Hex(musicFile.getPath()).toUpperCase(), musicFile.getLabel(), musicFile.getPath());
            newMusicFiles.add(newMusicFile);
        }

        currentMusicList.setMusicFiles(newMusicFiles);

        return musicListRepository.save(currentMusicList);
    }

    @PutMapping("/{id}/musicfiles")
    public MusicList updateMusic(@RequestBody MusicFile musicFile, @PathVariable String id) {


        MusicList currentMusicList = musicListRepository.findById(id);
        if (currentMusicList == null) {
            throw new MusicListNotFoundException();
        }
        List<MusicFile> currentMusicFiles = currentMusicList.getMusicFiles();

        MusicFile newMusicFile = new MusicFile(DigestUtils.md5Hex(musicFile.getPath()).toUpperCase(), musicFile.getLabel(), musicFile.getPath());

        boolean found = false;

        for (MusicFile tempMusicFile : currentMusicFiles) {
            if (StringUtils.equals(newMusicFile.getId(), tempMusicFile.getId())) {
                found = true;
                break;
            }
        }

        if (found == false) {
            currentMusicFiles.add(newMusicFile);
        }

        currentMusicList.setMusicFiles(currentMusicFiles);

        return musicListRepository.save(currentMusicList);
    }


    @DeleteMapping("/{id}/musicfiles/{musicId}")
    public MusicList deleteMusic(@PathVariable("id") String id, @PathVariable("musicId") String musicId) {


        MusicList currentMusicList = musicListRepository.findById(id);
        if (currentMusicList == null) {
            throw new MusicListNotFoundException();
        }

        List<MusicFile> currentMusicFiles = currentMusicList.getMusicFiles();

        int findIndex = -1;


        for(int index = 0; index < currentMusicFiles.size(); index++)
        {
            if(StringUtils.equals(currentMusicFiles.get(index).getId(), musicId))
            {
                findIndex = 0;
                break;
            }
        }

        if(findIndex > -1)
        {
            currentMusicFiles.remove(findIndex);

            currentMusicList.setMusicFiles(currentMusicFiles);

            return musicListRepository.save(currentMusicList);
        }
        else{
            throw new MusicListNotFoundException();
        }

    }

}
