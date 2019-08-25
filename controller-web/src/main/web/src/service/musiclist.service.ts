import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicList } from '../model/musiclist';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MusicListService {

  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = '/api/musiclists'
  }

  getMusicLists(): Observable<MusicList[]>{
    return this.http.get<MusicList[]>(this.serviceUrl);
  }

  createMusicList(musiclist : MusicList): Observable<MusicList>{
    return this.http.post<MusicList>(this.serviceUrl, musiclist);
  }
}
