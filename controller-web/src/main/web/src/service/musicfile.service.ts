import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MusicFile} from "../model/musicfile";

@Injectable({
  providedIn: 'root'
})
export class MusicFileService {


  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = '/api/musicfiles'
  }

  getMusicFiles(): Observable<MusicFile[]>{
    return this.http.get<MusicFile[]>(this.serviceUrl);
  }
}
