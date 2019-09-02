package com.musicutility.persistence.model;

import java.io.Serializable;

public class MusicMixer implements Serializable {

    private static final long serialVersionUID = 4199693948152953787L;

    String id;
    String name;
    String description;
    String vendor;

    public MusicMixer() {
        super();
    }

    public MusicMixer(String id, String name, String description, String vendor) {
        super();

        this.id = id;
        this.name = name;
        this.description = description;
        this.vendor = vendor;
    }

    @Override
    public String toString() {
        return "MusicMixer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", vendor='" + vendor + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MusicMixer that = (MusicMixer) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        return vendor != null ? vendor.equals(that.vendor) : that.vendor == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (vendor != null ? vendor.hashCode() : 0);
        return result;
    }
}
