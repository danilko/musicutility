import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Angular Materials
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { MusicListComponent } from '../musiclist/musiclist.component';
import { MusicStreamingComponent } from '../musicstreaming/musicstreaming.component'
import { MusicRemoteComponent } from '../musicremote/musicremote.component'

import {
  NewMusicListDialog,
  DeleteMusicListDialog,
  MusicFileInfoDialog,
  MusicMixerInfoDialog,
  LoadingDialog,
} from "../dialog/dialog-component";


import { MusicListService } from '../service/musiclist.service';
import { MusicFileService } from "../service/musicfile.service";
import { MusicPlayerService } from "../service/musicplayer.service";

@NgModule({
  declarations: [
    AppComponent,
    NewMusicListDialog,
    DeleteMusicListDialog,
    MusicFileInfoDialog,
    MusicMixerInfoDialog,
    LoadingDialog,
    MusicListComponent,
    MusicStreamingComponent,
    MusicRemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    BrowserAnimationsModule

  ],
  providers: [MusicListService, MusicFileService, MusicPlayerService],
  bootstrap: [AppComponent],
  entryComponents: [
    NewMusicListDialog,
    DeleteMusicListDialog,
    MusicFileInfoDialog,
    MusicMixerInfoDialog,
    LoadingDialog
  ]
})
export class AppModule { }
