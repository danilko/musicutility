package com.musicutility.persistence.model;

import java.io.Serializable;
import java.util.List;

public class IRReceieverSetting implements Serializable {

    private static final long serialVersionUID = 1370611330468210859L;

    private String portPrefix;
    private String portName;
    private Boolean isHexDecode;
    private String vendor;

    private List<String> fastForwardList;
    private List<String> fastBackwardList;
    private List<String> playList;
    private List<String> stopList;
    private List<String> pauseList;
    private List<String> nextList;
    private List<String> lastList;
    private List<String> networkOnList;
    private List<String> networkOffList;

    public IRReceieverSetting() {  super();  }

    public String getPortPrefix() { return portPrefix; }

    public void setPortPrefix(String portPrefix) { this.portPrefix = portPrefix; }

    public String getPortName() { return portName;  }

    public void setPortName(String portName) { this.portName = portName; }

    public String getVendor() { return vendor; }

    public void setVendor(String vendor) { this.vendor = vendor; }

    public void setFastForwardList(List<String> fastForwardList) {this.fastForwardList = fastForwardList;}

    public List<String> getFastForwardList() {return fastForwardList;}

    public void setFastBackwardList(List<String> fastBackwardList) {
        this.fastBackwardList = fastBackwardList;
    }

    public List<String> getFastBackwardList() {
        return fastBackwardList;
    }

    public void setPlayList(List<String> playList) {
        this.playList = playList;
    }

    public List<String> getPlayList() {
        return playList;
    }

    public void setStopList(List<String> stopList) {
        this.stopList = stopList;
    }

    public List<String> getStopList() {
        return stopList;
    }

    public void setPauseList(List<String> pauseList) {
        this.pauseList = pauseList;
    }

    public List<String> getPauseList() {
        return pauseList;
    }

    public void setNextList(List<String> nextList) {
        this.nextList = nextList;
    }

    public List<String> getNextList() {
        return nextList;
    }

    public void setLastList(List<String> lastList) {
        this.lastList = lastList;
    }

    public List<String> getLastList() {
        return lastList;
    }

    public void setNetworkOnList(List<String> networkOnList) {
        this.networkOnList = networkOnList;
    }

    public List<String> getNetworkOnList() {
        return networkOnList;
    }

    public void setNetworkOffList(List<String> networkOffList) { this.networkOffList = networkOffList; }

    public List<String> getNetworkOffList() {
        return networkOffList;
    }

    public Boolean getIsHexDecode() { return isHexDecode; }

    public void setIsHexDecode(Boolean isHexDecode) { this.isHexDecode = isHexDecode; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        IRReceieverSetting that = (IRReceieverSetting) o;

        if (portPrefix != null ? !portPrefix.equals(that.portPrefix) : that.portPrefix != null) return false;
        if (portName != null ? !portName.equals(that.portName) : that.portName != null) return false;
        if (isHexDecode != null ? !isHexDecode.equals(that.isHexDecode) : that.isHexDecode != null) return false;
        if (vendor != null ? !vendor.equals(that.vendor) : that.vendor != null) return false;
        if (fastForwardList != null ? !fastForwardList.equals(that.fastForwardList) : that.fastForwardList != null)
            return false;
        if (fastBackwardList != null ? !fastBackwardList.equals(that.fastBackwardList) : that.fastBackwardList != null)
            return false;
        if (playList != null ? !playList.equals(that.playList) : that.playList != null) return false;
        if (stopList != null ? !stopList.equals(that.stopList) : that.stopList != null) return false;
        if (pauseList != null ? !pauseList.equals(that.pauseList) : that.pauseList != null) return false;
        if (nextList != null ? !nextList.equals(that.nextList) : that.nextList != null) return false;
        if (lastList != null ? !lastList.equals(that.lastList) : that.lastList != null) return false;
        if (networkOnList != null ? !networkOnList.equals(that.networkOnList) : that.networkOnList != null)
            return false;
        return networkOffList != null ? networkOffList.equals(that.networkOffList) : that.networkOffList == null;
    }

    @Override
    public int hashCode() {
        int result = portPrefix != null ? portPrefix.hashCode() : 0;
        result = 31 * result + (portName != null ? portName.hashCode() : 0);
        result = 31 * result + (isHexDecode != null ? isHexDecode.hashCode() : 0);
        result = 31 * result + (vendor != null ? vendor.hashCode() : 0);
        result = 31 * result + (fastForwardList != null ? fastForwardList.hashCode() : 0);
        result = 31 * result + (fastBackwardList != null ? fastBackwardList.hashCode() : 0);
        result = 31 * result + (playList != null ? playList.hashCode() : 0);
        result = 31 * result + (stopList != null ? stopList.hashCode() : 0);
        result = 31 * result + (pauseList != null ? pauseList.hashCode() : 0);
        result = 31 * result + (nextList != null ? nextList.hashCode() : 0);
        result = 31 * result + (lastList != null ? lastList.hashCode() : 0);
        result = 31 * result + (networkOnList != null ? networkOnList.hashCode() : 0);
        result = 31 * result + (networkOffList != null ? networkOffList.hashCode() : 0);
        return result;
    }
}
