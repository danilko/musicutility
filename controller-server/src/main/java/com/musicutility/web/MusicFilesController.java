package com.musicutility.web;

import com.musicutility.persistence.model.MusicFile;
import com.musicutility.persistence.repo.MusicFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/musicfiles")
public class MusicFilesController {

    @Autowired
    private MusicFileRepository musicFileRepository;

    @GetMapping()
    public List<MusicFile> getMusicFiles() {
        return musicFileRepository.getAllMusicFiles();
    }


    @DeleteMapping("/cache")
    public void deleteMusicFilesCache() {
        musicFileRepository.clearCache();
    }
}
