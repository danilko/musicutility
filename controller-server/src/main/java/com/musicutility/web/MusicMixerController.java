package com.musicutility.web;

import com.musicutility.persistence.model.MusicMixer;
import com.musicutility.persistence.repo.MusicMixerRepository;
import com.musicutility.web.exception.MusicListNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/musicmixers")

public class MusicMixerController {

        @Autowired
        private MusicMixerRepository musicMixerRepository;

        @GetMapping()
        public List<MusicMixer> getAll()    {
            return musicMixerRepository.findAll();
        }

        @GetMapping("/{id}")
        public MusicMixer getMusicMixer(@PathVariable int id) {
            MusicMixer musicMixer = musicMixerRepository.findById(id);
            if (musicMixer == null) {
                throw new MusicListNotFoundException();
            }

            return musicMixer;
        }

    }
