import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {MusicList} from "../model/musiclist";
import {MusicFile} from "../model/musicfile";
import {MusicMixer} from "../model/musicmixer";

@Component({
  selector: 'new-musiclist-dialog',
  templateUrl: '../dialog/new-musiclist-dialog.html',
})
export class NewMusicListDialog {

  constructor(
    public dialogRef: MatDialogRef<NewMusicListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MusicList) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'delete-musiclist-dialog',
  templateUrl: '../dialog/delete-musiclist-dialog.html',
})
export class DeleteMusicListDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteMusicListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MusicList) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'musicfile-info-dialog',
  templateUrl: '../dialog/musicfile-info-dialog.html',
})
export class MusicFileInfoDialog {

  constructor(
    public dialogRef: MatDialogRef<MusicFileInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MusicFile) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'musicmixer-info-dialog',
  templateUrl: '../dialog/musicmixer-info-dialog.html',
})
export class MusicMixerInfoDialog {

  constructor(
    public dialogRef: MatDialogRef<MusicMixerInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MusicMixer) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'loading-dialog',
  templateUrl: '../dialog/loading-dialog.html',
})
export class LoadingDialog {

  constructor(
    public dialogRef: MatDialogRef<MusicFileInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: String) {
        dialogRef.disableClose = true;
  }

}

@Component({
  selector: 'error-dialog',
  templateUrl: '../dialog/error-dialog.html',
})
export class ErrorDialog {

  constructor(
    public dialogRef: MatDialogRef<ErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: String) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
