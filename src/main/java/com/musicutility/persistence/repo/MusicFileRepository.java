package com.musicutility.persistence.repo;

import com.musicutility.persistence.model.MusicFile;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MusicFileRepository {

    private List<MusicFile> musicFiles;

    public MusicFileRepository() {
    }

    public void clearCache()
    {
        musicFiles = null;
    }

    public List<MusicFile> getAllMusicFiles()
    {
        if (musicFiles != null)
        {
            return musicFiles;
        }

        List<MusicFile> musicFiles = new ArrayList<MusicFile>();

        String path = System.getenv("MUSIC_LOCATION");

        if(path == null)
        {
            path= System.getProperty("user.dir") + "/";
        }
        else
        {
            path = path + "/";
        }


        final File directory = new File(path);
        geMusicFiles(musicFiles, directory);

        return musicFiles;
    }

    public void geMusicFiles(List<MusicFile> musicFiles, File directory)
    {
        File [] files = directory.listFiles();

        for (File currentFile : files)
        {
            if(currentFile.isDirectory())
            {
                geMusicFiles(musicFiles, currentFile);
            }
            else
            {
                MusicFile newMusicFile = new MusicFile();
                newMusicFile.setId(DigestUtils.md5Hex(currentFile.getAbsolutePath().toUpperCase()));
                newMusicFile.setLabel(currentFile.getName());
                newMusicFile.setPath(currentFile.getAbsolutePath());
                musicFiles.add(newMusicFile);
            }
        }
    }

}
