import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicMixer } from '../model/musicmixer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicMixerService {

  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = '/api/musicmixers'
  }

  getMusicMixers(): Observable<MusicMixer[]>{
    return this.http.get<MusicMixer[]>(this.serviceUrl);
  }
}
