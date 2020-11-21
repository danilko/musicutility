package com.musicutility.persistence.repo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.fasterxml.jackson.databind.ObjectWriter;
import com.musicutility.persistence.model.IRReceieverSetting;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Repository
public class IRReceiverSettingRepository {

    private IRReceieverSetting receieverSetting;
    private String configurationPath;
    private ObjectMapper objectMapper;
    private ObjectWriter objectWriter;

    public IRReceiverSettingRepository() {

        ObjectMapper mapper = new ObjectMapper();

        String path = System.getenv("MUSIC_UTILITY_LOCATION");

        if (path == null) {
            path = System.getProperty("user.dir") + "/";
        } else {
            path = path + "/";
        }

        receieverSetting = new IRReceieverSetting();

        configurationPath = path + "ir_receiver_setting.json";

        objectMapper = new ObjectMapper();
        objectWriter = objectMapper.writer(new DefaultPrettyPrinter());

        File file = new File(configurationPath);

        if (!file.exists()) {
            // Generate default setting
            defaultRemoteSetting();
            saveConfiguration();
        } else {
            try {
                receieverSetting = objectMapper.readValue(new File(configurationPath), new TypeReference<IRReceieverSetting>() {
                });
            } catch (Exception exception) {
                exception.printStackTrace();
                defaultRemoteSetting();
            }
        }
    }

    public IRReceieverSetting getIRReceiverSetting() {
        return receieverSetting;
    }

    public void resetRemoteSetting() {
        receieverSetting = new IRReceieverSetting();
        defaultRemoteSetting();
    }

    public void defaultRemoteSetting() {
        if (receieverSetting.getPortName() == null) {
            receieverSetting.setPortName("");
        }

        if (receieverSetting.getPortPrefix() == null) {
            receieverSetting.setPortPrefix("ttyACM");
        }

        if (receieverSetting.getVendor() == null) {
            receieverSetting.setVendor("PHILIP_RC5_TTYACM");
        }

        if (receieverSetting.getIsHexDecode() == null) {
            receieverSetting.setIsHexDecode(true);
        }

        if (receieverSetting.getFastForwardList() == null) {
            List<String> fastForwardList = new ArrayList<>();
            fastForwardList.add("D34");
            fastForwardList.add("534");
            receieverSetting.setFastForwardList(fastForwardList);
        }

        if (receieverSetting.getFastBackwardList() == null) {
            List<String> fastBackwardList = new ArrayList<>();
            fastBackwardList.add("532");
            fastBackwardList.add("D32");
            receieverSetting.setFastBackwardList(fastBackwardList);
        }

        if (receieverSetting.getPlayList() == null) {
            List<String> playList = new ArrayList<>();
            playList.add("535");
            playList.add("D35");
            receieverSetting.setPlayList(playList);
        }
        if (receieverSetting.getStopList() == null) {
            List<String> stopList = new ArrayList<>();
            stopList.add("536");
            stopList.add("D36");
            receieverSetting.setStopList(stopList);
        }
        if (receieverSetting.getNextList() == null) {
            List<String> nextList = new ArrayList<>();
            nextList.add("520");
            nextList.add("D20");
            receieverSetting.setNextList(nextList);
        }
        if (receieverSetting.getLastList() == null) {
            List<String> lastList = new ArrayList<>();
            lastList.add("521");
            lastList.add("D21");
            receieverSetting.setLastList(lastList);
        }

        if (receieverSetting.getPauseList() == null) {
            List<String> pauseList = new ArrayList<>();
            pauseList.add("530");
            pauseList.add("D30");
            receieverSetting.setPauseList(pauseList);
        }

        if (receieverSetting.getNetworkOnList() == null) {
            List<String> networkOnList = new ArrayList<>();
            networkOnList.add("6BD5ADFF");
            networkOnList.add("5860F6F8");
            receieverSetting.setNetworkOnList(networkOnList);
        }

        if (receieverSetting.getNetworkOffList() == null) {
            List<String> networkOffList = new ArrayList<>();
            networkOffList.add("531");
            networkOffList.add("D31");
            receieverSetting.setNetworkOffList(networkOffList);
        }
    }

    private void saveConfiguration() {
        try {
            objectWriter.writeValue(new File(configurationPath), receieverSetting);
        } catch (Exception exception) {
            exception.printStackTrace();
        }
    }

}
