package com.musicutility.persistence.repo;

import com.musicutility.persistence.model.MusicMixer;
import org.springframework.stereotype.Repository;

import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Mixer;
import java.util.ArrayList;
import java.util.List;


@Repository
public class MusicMixerRepository {

    public List<MusicMixer> findAll()
    {
        Mixer.Info[] mixerInfo = AudioSystem.getMixerInfo();
        List<MusicMixer> musicMixerList = new ArrayList<>();

        for (int index = 0; index < mixerInfo.length; index++)
        {
            MusicMixer musicMixer = new MusicMixer();
            musicMixer.setId("" + index);
            musicMixer.setName(mixerInfo[index].getName());
            musicMixer.setVendor(mixerInfo[index].getVendor());
            musicMixer.setDescription(mixerInfo[index].getDescription());
            musicMixerList.add(musicMixer);
        }

        return musicMixerList;
    }

    public MusicMixer findById(int id)
    {
        Mixer.Info[] mixerInfo = AudioSystem.getMixerInfo();

        if(id >= mixerInfo.length)
            return null;

            MusicMixer musicMixer = new MusicMixer();
            musicMixer.setId("" + id);
            musicMixer.setName(mixerInfo[id].getName());
            musicMixer.setVendor(mixerInfo[id].getVendor());
            musicMixer.setDescription(mixerInfo[id].getDescription());

        return musicMixer;
    }
}
