package com.musicutility.persistence.model;

import java.io.Serializable;
import java.util.List;

public class MusicList implements Serializable {
    private static final long serialVersionUID = -1187591576862274581L;

    private String id;
    private String label;

    private List<MusicFile> musicFiles;

    public MusicList()
    {
        super();
    }

    public MusicList(String id, String label, List<MusicFile> musicFileList) {
        super();

        this.id = id;
        this.label=label;
        this.musicFiles = musicFileList;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<MusicFile> getMusicFiles() {
        return musicFiles;
    }

    public void setMusicFiles(List<MusicFile> musicFileList) {
        this.musicFiles = musicFileList;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MusicList musicList1 = (MusicList) o;

        if (id != null ? !id.equals(musicList1.id) : musicList1.id != null) return false;
        if (label != null ? !label.equals(musicList1.label) : musicList1.label != null) return false;
        return musicFiles != null ? musicFiles.equals(musicList1.musicFiles) : musicList1.musicFiles == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (label != null ? label.hashCode() : 0);
        result = 31 * result + (musicFiles != null ? musicFiles.hashCode() : 0);
        return result;
    }
}
