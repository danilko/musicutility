package com.musicutility.persistence.repo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.musicutility.persistence.model.MusicList;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MusicListRepository {

 private List<MusicList> musicLists;

 private String configurationPath;
 private ObjectMapper objectMapper;
 private ObjectWriter objectWriter;


 public MusicListRepository()
 {
  ObjectMapper mapper = new ObjectMapper();

  String path = System.getenv("MUSIC_UTILITY_LOCATION");

  if(path == null)
  {
   path= System.getProperty("user.dir") + "/";
  }
  else
  {
   path = path + "/";
  }

  configurationPath = path + "music_list.json";

  objectMapper = new ObjectMapper();
  objectWriter = objectMapper.writer(new DefaultPrettyPrinter());

  File file = new File(configurationPath);

  musicLists = new ArrayList<MusicList>();

   if(! file.exists())
   {
    saveConfiguration();
   }
   else {
    try {
     musicLists = objectMapper.readValue(new File(configurationPath), new TypeReference<List<MusicList>>(){});
    }
    catch(Exception exception)
    {
     exception.printStackTrace();
     musicLists = new ArrayList<MusicList>();
    }
   }
 }

 public List <MusicList> findAll() {
  return musicLists;
 }

 public MusicList findById(String id)
 {
  MusicList returnMusicList = null;

  for(int index = 0;  index < musicLists.size(); index++)
  {
   if(StringUtils.equals(musicLists.get(index).getId(), id))
   {
    returnMusicList = musicLists.get(index);
    break;
   }
  }

return returnMusicList;

 }

 public MusicList save(MusicList musicList)
 {
  int foundInex = -1;

  for(int index = 0;  index < musicLists.size(); index++)
  {
   if(StringUtils.equals(musicLists.get(index).getId(), musicList.getId()))
   {
    foundInex = index;
    break;
   }
  }

  if (foundInex > -1) {
   musicLists.remove(foundInex);
  }

   musicLists.add(musicList);
   saveConfiguration();

  return musicList;
 }

 public void  deleteById(String id) {

  int foundInex = -1;

  for (int index = 0; index < musicLists.size(); index++) {
   if(StringUtils.equals(musicLists.get(index).getId(), id)) {
    foundInex = index;
    break;
   }
  }

  if (foundInex > -1) {
   musicLists.remove(foundInex);
  }

  saveConfiguration();
 }

 private void saveConfiguration()
 {
   try {
    objectWriter.writeValue(new File(configurationPath), musicLists);
   } catch (Exception exception) {
    exception.printStackTrace();
   }

 }

 }

