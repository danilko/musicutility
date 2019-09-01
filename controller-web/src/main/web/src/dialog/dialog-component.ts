import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {MusicList} from "../model/musiclist";
import {MusicFile} from "../model/musicfile";

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
