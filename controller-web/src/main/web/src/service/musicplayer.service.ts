import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MusicPlayerState} from "../model/musicplayerstate";
import {MusicPlayerSetting} from "../model/musicplayersetting";

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = '/api/musicplayer'
  }

  updateMusicPlayerSetting(musicPlayerSetting : MusicPlayerSetting): Observable<any>{
    return this.http.put<MusicPlayerSetting>(this.serviceUrl + "/setting", musicPlayerSetting);
  }

  getMusicPlayerState(): Observable<MusicPlayerState>{
    return this.http.get<MusicPlayerState>(this.serviceUrl + "/state");
  }
}
