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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { MusicListComponent } from '../musiclist/musiclist.component';
import { MusicListService } from '../service/musiclist.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent
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
    BrowserAnimationsModule

  ],
  providers: [MusicListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
