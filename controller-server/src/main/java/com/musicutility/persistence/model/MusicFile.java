package com.musicutility.persistence.model;

import java.io.Serializable;

public class MusicFile implements Serializable {

    private static final long serialVersionUID = 1370611330468210859L;
    private String id;

    private String label;
    private String path;

    public MusicFile() {
        super();
    }

    public MusicFile(String id, String label, String path)
    {
        super();
        this.id = id;
        this.label = label;
        this.path = path;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MusicFile musicFile = (MusicFile) o;

        if (id != null ? !id.equals(musicFile.id) : musicFile.id != null) return false;
        if (label != null ? !label.equals(musicFile.label) : musicFile.label != null) return false;
        return path != null ? path.equals(musicFile.path) : musicFile.path == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (label != null ? label.hashCode() : 0);
        result = 31 * result + (path != null ? path.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "MusicFile{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", path='" + path + '\'' +
                '}';
    }

}
