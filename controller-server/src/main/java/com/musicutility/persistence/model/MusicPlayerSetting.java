package com.musicutility.persistence.model;

import java.io.Serializable;

public class MusicPlayerSetting implements Serializable {
    private static final long serialVersionUID = -7944650008923006643L;

    private MusicFile currentMusicFile;
    private MusicList currentMusicList;
    private MusicMixer currentMusicMixer;
    private boolean play;

    public MusicPlayerSetting() {
        super();
        currentMusicFile = null;
        currentMusicList = null;
        currentMusicMixer = null;
        play = false;
    }

    public MusicList getCurrentMusicList() {
        return currentMusicList;
    }

    public void setCurrentMusicList(MusicList currentMusicList) {
        this.currentMusicList = currentMusicList;
    }

    public MusicMixer getCurrentMusicMixer() {
        return currentMusicMixer;
    }

    public void setCurrentMusicMixer(MusicMixer currentMusicMixer) {
        this.currentMusicMixer = currentMusicMixer;
    }

    public MusicFile getCurrentMusicFile() {
        return currentMusicFile;
    }

    public void setCurrentMusicFile(MusicFile currentMusicFile) {
        this.currentMusicFile = currentMusicFile;
    }

    public boolean getPlay() {

        return play;
    }

    public void setPlay(boolean play) {


        this.play = play;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MusicPlayerSetting that = (MusicPlayerSetting) o;

        if (play != that.play) return false;
        if (currentMusicFile != null ? !currentMusicFile.equals(that.currentMusicFile) : that.currentMusicFile != null)
            return false;
        if (currentMusicList != null ? !currentMusicList.equals(that.currentMusicList) : that.currentMusicList != null)
            return false;
        return currentMusicMixer != null ? currentMusicMixer.equals(that.currentMusicMixer) : that.currentMusicMixer == null;
    }

    @Override
    public int hashCode() {
        int result = currentMusicFile != null ? currentMusicFile.hashCode() : 0;
        result = 31 * result + (currentMusicList != null ? currentMusicList.hashCode() : 0);
        result = 31 * result + (currentMusicMixer != null ? currentMusicMixer.hashCode() : 0);
        result = 31 * result + (play ? 1 : 0);
        return result;
    }
}
