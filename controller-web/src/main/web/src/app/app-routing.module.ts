import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from '../musiclist/musiclist.component';
import {MusicStreamingComponent} from "../musicstreaming/musicstreaming.component";
import {MusicRemoteComponent} from "../musicremote/musicremote.component";

const routes: Routes = [
  { path: 'musiclists', component: MusicListComponent },
  { path: 'musicstreaming', component: MusicStreamingComponent},
  { path: 'musicremote', component: MusicRemoteComponent},
  { path: '**', component: MusicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
