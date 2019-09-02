import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {MusicList} from '../model/musiclist';
import {MusicFile} from '../model/musicfile';
import {MusicListService} from '../service/musiclist.service';

import {
  MusicFileInfoDialog,
} from "../dialog/dialog-component";

@Component({
  selector: 'app-musicstreaming',
  templateUrl: './musicstreaming.component.html',
  styleUrls: ['./musicstreaming.component.css']
})
export class MusicStreamingComponent implements OnInit {
  currentMusicList: MusicList;
  currentMusicFile: MusicFile;
  currentMusicFileUrl : String;

  musiclists: MusicList[];
  musiclist: MusicList;

  audio:any;

  @ViewChild('audioPlayer', {static: false}) audioPlayer: ElementRef;

  constructor(private musiclistService: MusicListService,
              public dialog: MatDialog) {
    this.currentMusicList = new MusicList();
    this.currentMusicFile = new MusicFile();
    this.currentMusicFileUrl = "";
  }


  openMusicFileInfoDialog(musicFile: MusicFile): void {
    const dialogRef = this.dialog.open(MusicFileInfoDialog, {
      width: "80%",
      data: musicFile
    });
  }

  changeMusicList() {
    this.currentMusicFile = new MusicFile();
  }

  setCurrentMusicFile(musicfile: MusicFile){
    this.currentMusicFile  = musicfile;
    this.currentMusicFileUrl = "api/musicstreaming/musiclists/" + this.currentMusicList.id + "/musicfiles/" + this.currentMusicFile.id

    this.audio= document.getElementById('audioPlayer');
    this.audio.src = this.currentMusicFileUrl;
    this.audio.load();
    this.audio.play();
    this.audio.onEnded = this.setNextMusicFile();
  }

  setNextMusicFile(){

    let nextIndex = -1;

    for(let index = 0; index < this.currentMusicList.musicFiles.length; index++)
    {
      let currentMusicFile = this.currentMusicList.musicFiles[index];

      if(currentMusicFile.id == this.currentMusicFile.id)
      {
        nextIndex = index;
        break;
      }
    }

    nextIndex = nextIndex + 1;

    if (nextIndex >= this.currentMusicList.musicFiles.length){
      nextIndex = 0;
    }

    this.currentMusicFile  = this.currentMusicList.musicFiles[nextIndex];
    this.currentMusicFileUrl = "api/musicstreaming/musiclists/" + this.currentMusicList.id + "/musicfiles/" + this.currentMusicFile.id;

    this.audio= document.getElementById('audioPlayer');
    this.audio.src = this.currentMusicFileUrl;
    this.audio.load();
    this.audio.play();

  }

  ngOnInit() {
    this.musiclistService.getMusicLists().subscribe(data => {
      this.musiclists = data;
    });

  }

}

