import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {MatDialog} from '@angular/material/dialog';

import {MusicList} from '../model/musiclist';
import {MusicFile} from '../model/musicfile';
import {MusicListService} from '../service/musiclist.service';
import {MusicFileService} from '../service/musicfile.service';

import {
  NewMusicListDialog,
  DeleteMusicListDialog,
  MusicFileInfoDialog,
  LoadingDialog,
  ErrorDialog,
  MusicMixerInfoDialog
} from "../dialog/dialog-component";

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusicListComponent implements OnInit {

  currentMusicList: MusicList;

  musiclists: MusicList[] | undefined;
  musicfiles: MusicFile[] | undefined;
  musiclist: MusicList | undefined;

  constructor(private musiclistService: MusicListService,
              private musicfileService: MusicFileService,
              public dialog: MatDialog) {
    this.currentMusicList = new MusicList();
  }

  openNewMusicListDialog(): void {
    const dialogRef = this.dialog.open(NewMusicListDialog, {
      width: "80%",
      data: new MusicList()
    });

    dialogRef.afterClosed().subscribe(newMusicList => {
      if (newMusicList != null && newMusicList.label != null && newMusicList.label != "" ) {


        const loadingDialogRef = this.dialog.open(LoadingDialog, {
          width: "80%",
          data: ""
        });

        this.musiclistService.createMusicList(newMusicList).subscribe(musiclist => {
          this.musiclistService.getMusicLists().subscribe(
            musiclists => {
              this.musiclists = musiclists;
              this.currentMusicList = new MusicList();
              loadingDialogRef.close();
            });
        });
      }
      else
      {
        const dialogRef = this.dialog.open(ErrorDialog, {
          width: "80%",
          data: "Invalid music list Label: "
        });

        return;
      }
    });

  }

  openDeleteMusicListDialog(deleteMusicList: MusicList): void {
    const dialogRef = this.dialog.open(DeleteMusicListDialog, {
      width: "80%",
      data: deleteMusicList
    });

    dialogRef.afterClosed().subscribe(deleteMusicList => {
      if (deleteMusicList != null) {

        const loadingDialogRef = this.dialog.open(LoadingDialog, {
          width: "80%",
          data: ""
        });


        this.musiclistService.deleteMusicList(deleteMusicList).subscribe(result => {
          this.musiclistService.getMusicLists().subscribe(
            musiclists => {
              this.musiclists = musiclists;
              this.currentMusicList = new MusicList();
              loadingDialogRef.close();
            });
        });
      }
    });

  }

  openMusicFileInfoDialog(musicFile: MusicFile): void {
    const dialogRef = this.dialog.open(MusicFileInfoDialog, {
      width: "80%",
      data: musicFile
    });
  }

  deleteMusicFile(musicFile: MusicFile): void {
    let removalIndex = -1;

    for(let index = 0; index < this.currentMusicList.musicFiles.length; index++)
    {
      let currentMusicFile = this.currentMusicList.musicFiles[index];

      if(currentMusicFile.id == musicFile.id)
      {
        removalIndex = index;
        break;
      }
    }

    if (removalIndex != -1 )
    {
      this.currentMusicList.musicFiles.splice(removalIndex, 1);

    }
  }

  addMusicFile(musicFile: MusicFile): void {
    let foundIndex = -1;

    for(let index = 0; index < this.currentMusicList.musicFiles.length; index++)
    {
      let currentMusicFile = this.currentMusicList.musicFiles[index];

      if(currentMusicFile.id == musicFile.id)
      {
        foundIndex = index;
        break;
      }
    }

    if (foundIndex == -1 )
    {
      this.currentMusicList.musicFiles.push(musicFile);

    }
  }

  changeMusicList() {
    // Made a different copy of the object (to not impact original object)
    this.currentMusicList = JSON.parse(JSON.stringify(this.currentMusicList));
  }

  updateMusicList(musiclist: MusicList){

    if (musiclist == null || musiclist.label == null || musiclist.label == "" ) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        width: "80%",
        data: "Invalid music list Label: "
      });

      return;
    }

    const loadingDialogRef = this.dialog.open(LoadingDialog, {
      width: "80%",
      data: ""
    });

    this.musiclistService.updateMusicList(musiclist).subscribe(result => {
      this.musiclistService.getMusicLists().subscribe(
        musiclists => {
          this.musiclists = musiclists;
          this.currentMusicList = new MusicList()
          loadingDialogRef.close();
        });
    });
  }

  ngOnInit() {
    this.musiclistService.getMusicLists().subscribe(data => {
      this.musiclists = data;
    });
    this.musicfileService.getMusicFiles().subscribe(data => {
      this.musicfiles = data;
    })

  }

}

