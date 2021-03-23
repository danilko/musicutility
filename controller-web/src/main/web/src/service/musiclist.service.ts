import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicList } from '../model/musiclist';
import { Observable } from 'rxjs';

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

  updateMusicList(musiclist : MusicList): Observable<MusicList>{
    return this.http.put<MusicList>(this.serviceUrl + "/" + musiclist.id, musiclist);
  }

  deleteMusicList(musiclist : MusicList): Observable<any>{
    return this.http.delete(this.serviceUrl + "/" + musiclist.id);
  }
}
