import {Component, OnInit} from '@angular/core';
import {MusicList} from '../model/musiclist';
import {MusicFile} from '../model/musicfile';
import {MusicListService} from '../service/musiclist.service';
import {MusicFileService} from '../service/musicfile.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusicListComponent implements OnInit {

  musiclistFormGroup: FormGroup;

  musiclists: MusicList[];
  musicfiles: MusicFile[];
  musiclist: MusicList;

  constructor(private musiclistService: MusicListService,
              private musicfileService: MusicFileService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.musiclistService.getMusicLists().subscribe(data => {
      this.musiclists = data;
      this.musiclistFormGroup = this.formBuilder.group({
        musiclistSelectControl: [this.musiclists[0]]
      })
    });
    this.musicfileService.getMusicFiles().subscribe(data => {
      this.musicfiles = data;
    })

    this.musiclistFormGroup = this.formBuilder.group({
      musiclistSelectControl: []
    })
  }

}
