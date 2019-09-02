package com.musicutility.persistence.model;

import java.io.Serializable;

public class MusicPlayerState implements Serializable {
    private static final long serialVersionUID = -1597078423986040625L;


    private MusicPlayerSetting musicPlayerSetting;

    private long frameSize;
    private long totalFrames;
    private double sampleRate;

    private int bufferSize;

    private long framePosition;

    private String elaspsedTime;
    private double elapsedPercentage;

    private String errorMessage;

    private boolean isPlaying;

    public MusicPlayerState() {
        super();
        elaspsedTime = "";

        isPlaying = false;
        musicPlayerSetting = null;
    }

    public MusicPlayerSetting getMusicPlayerSetting() {
        return musicPlayerSetting;
    }

    public void setMusicPlayerSetting(MusicPlayerSetting musicPlayerSetting) {
        this.musicPlayerSetting = musicPlayerSetting;
    }


    public boolean getPlaying() {
        return isPlaying;
    }

    public void setPlaying(boolean playing) {
        isPlaying = playing;
    }

    public String getElaspsedTime() {
        return elaspsedTime;
    }

    public void setElaspsedTime(String elaspsedTime) {
        this.elaspsedTime = elaspsedTime;
    }

    public double getElapsedPercentage() {
        return elapsedPercentage;
    }

    public void setElapsedPercentage(double elapsedPercentage) {
        this.elapsedPercentage = elapsedPercentage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public long getFrameSize() {
        return frameSize;
    }

    public void setFrameSize(long frameSize) {
        this.frameSize = frameSize;
    }

    public long getTotalFrames() {
        return totalFrames;
    }

    public void setTotalFrames(long totalFrames) {
        this.totalFrames = totalFrames;
    }

    public double getSampleRate() {
        return sampleRate;
    }

    public void setSampleRate(double sampleRate) {
        this.sampleRate = sampleRate;
    }

    public int getBufferSize() {
        return bufferSize;
    }

    public void setBufferSize(int bufferSize) {
        this.bufferSize = bufferSize;
    }

    public long getFramePosition() {
        return framePosition;
    }

    public void setFramePosition(long framePosition) {
        this.framePosition = framePosition;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MusicPlayerState that = (MusicPlayerState) o;

        if (frameSize != that.frameSize) return false;
        if (totalFrames != that.totalFrames) return false;
        if (Double.compare(that.sampleRate, sampleRate) != 0) return false;
        if (bufferSize != that.bufferSize) return false;
        if (framePosition != that.framePosition) return false;
        if (Double.compare(that.elapsedPercentage, elapsedPercentage) != 0) return false;
        if (isPlaying != that.isPlaying) return false;
        if (musicPlayerSetting != null ? !musicPlayerSetting.equals(that.musicPlayerSetting) : that.musicPlayerSetting != null)
            return false;
        if (elaspsedTime != null ? !elaspsedTime.equals(that.elaspsedTime) : that.elaspsedTime != null) return false;
        return errorMessage != null ? errorMessage.equals(that.errorMessage) : that.errorMessage == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = musicPlayerSetting != null ? musicPlayerSetting.hashCode() : 0;
        result = 31 * result + (int) (frameSize ^ (frameSize >>> 32));
        result = 31 * result + (int) (totalFrames ^ (totalFrames >>> 32));
        temp = Double.doubleToLongBits(sampleRate);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + bufferSize;
        result = 31 * result + (int) (framePosition ^ (framePosition >>> 32));
        result = 31 * result + (elaspsedTime != null ? elaspsedTime.hashCode() : 0);
        temp = Double.doubleToLongBits(elapsedPercentage);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (errorMessage != null ? errorMessage.hashCode() : 0);
        result = 31 * result + (isPlaying ? 1 : 0);
        return result;
    }
}
