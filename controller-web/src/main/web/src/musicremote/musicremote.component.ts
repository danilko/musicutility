import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {MusicList} from '../model/musiclist';
import {MusicFile} from '../model/musicfile';
import {MusicMixer} from '../model/musicmixer'

import {MusicListService} from '../service/musiclist.service';
import {MusicMixerService} from '../service/musicmixer.service';

import {
  LoadingDialog,
  MusicFileInfoDialog,
  MusicMixerInfoDialog,
  ErrorDialog
} from "../dialog/dialog-component";
import {MusicPlayerState} from "../model/musicplayerstate";
import {MusicPlayerService} from "../service/musicplayer.service";
import {MusicPlayerSetting} from "../model/musicplayersetting";

@Component({
  selector: 'app-musicremote',
  templateUrl: './musicremote.component.html',
  styleUrls: ['./musicremote.component.css']
})
export class MusicRemoteComponent implements OnInit, OnDestroy {
  currentMusicList: MusicList;
  currentMusicFile: MusicFile;
  currentMusicMixer: MusicMixer;
  currentMusicPlayerState: MusicPlayerState;

  musiclists: MusicList[];
  musicmixers: MusicMixer[];

  currentPlaySetting:boolean;

  intervalHolder: any;

  constructor(private musiclistService: MusicListService,
              private musicmixerService: MusicMixerService,
              private musicplayerService: MusicPlayerService,
              public dialog: MatDialog) {
    this.currentMusicList = new MusicList();
    this.currentMusicFile = new MusicFile();
    this.currentMusicMixer = new MusicMixer();
    this.currentPlaySetting = false;

  }


  openMusicFileInfoDialog(musicFile: MusicFile): void {
    const dialogRef = this.dialog.open(MusicFileInfoDialog, {
      width: "80%",
      data: musicFile
    });
  }


  openMusicMixerInfoDialog(musicMixer: MusicMixer): void {
    const dialogRef = this.dialog.open(MusicMixerInfoDialog, {
      width: "80%",
      data: musicMixer
    });
  }


  changeMusicList() {
    this.currentMusicFile = new MusicFile();
  }

  updateMusicPlayerSetting(musiclist: MusicList, musicfile: MusicFile, musicmixer : MusicMixer, play : boolean, elapsedTargetPercentage : number) {
    let updateMusicPlayerSetting = new MusicPlayerSetting();

    if(musiclist == null) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        width: "80%",
        data: "Music Mixer cannot be modified unless first play a music file in a music list"
      });

      return;
    }
    updateMusicPlayerSetting.currentMusicList = musiclist;



    if(musicfile == null) {
        updateMusicPlayerSetting.currentMusicFile = updateMusicPlayerSetting.currentMusicList[0];
      }
      else
      {
        updateMusicPlayerSetting.currentMusicFile = musicfile;
      }

    if(musicmixer == null) {
      updateMusicPlayerSetting.currentMusicMixer = this.currentMusicPlayerState.musicPlayerSetting.currentMusicMixer;
    }
    else {
      updateMusicPlayerSetting.currentMusicMixer = musicmixer;
    }

    updateMusicPlayerSetting.play = play;

    const loadingDialogRef = this.dialog.open(LoadingDialog, {
      width: "80%",
      data: ""
    });

    this.musicplayerService.updateMusicPlayerSetting(updateMusicPlayerSetting, elapsedTargetPercentage).subscribe( data => {
      this.getMusicPlayerState();
      
      this.delay(5000).then(any=>{
        this.getMusicPlayerState();
        loadingDialogRef.close();
      });
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  getMusicPlayerState(){
    this.musicplayerService.getMusicPlayerState().subscribe(data => {
      this.currentMusicPlayerState = data;
      this.currentMusicList = this.currentMusicPlayerState.musicPlayerSetting.currentMusicList;
      this.currentMusicFile = this.currentMusicPlayerState.musicPlayerSetting.currentMusicFile;
      this.currentMusicMixer = this.currentMusicPlayerState.musicPlayerSetting.currentMusicMixer;
      this.currentPlaySetting = this.currentMusicPlayerState.musicPlayerSetting.play;

      if (this.currentMusicList == null) {
        this.currentMusicList = new MusicList();
      }

      if (this.currentMusicFile == null) {
        this.currentMusicFile = new MusicFile();
      }

      if(this.currentMusicMixer == null) {
        for (let index = 0; index < this.musicmixers.length; index++){
          if (this.musicmixers[index].name == "default [default]"){
            this.currentMusicMixer = this.musicmixers[index]
            break;
          }
        }
        // set default
        if(this.currentMusicMixer == null) {
          this.currentMusicMixer = this.musicmixers[0];
        }

      }


    })
  }

  ngOnInit() {
    this.musiclistService.getMusicLists().subscribe(data => {
      this.musiclists = data;
    });

    this.musicmixerService.getMusicMixers().subscribe(data => {
      this.musicmixers = data;

      this.getMusicPlayerState();
    });

    this.intervalHolder = setInterval(() => {
      this.musicplayerService.getMusicPlayerState().subscribe(data => {
        this.currentMusicPlayerState = data;
        this.currentMusicFile = this.currentMusicPlayerState.musicPlayerSetting.currentMusicFile;
      })
    }, 1000 * 2); // 2 seconds
  }


  ngOnDestroy(): void {
    clearInterval(this.intervalHolder);
  }

}

