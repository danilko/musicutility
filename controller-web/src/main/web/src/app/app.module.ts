import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

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
    ReactiveFormsModule
  ],
  providers: [MusicListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
