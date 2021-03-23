import {MusicMixer} from "./musicmixer";
import {MusicList} from "./musiclist";
import {MusicFile} from "./musicfile";

export class MusicPlayerSetting {
currentMusicFile: MusicFile = new MusicFile();
currentMusicList: MusicList = new MusicList();
currentMusicMixer : MusicMixer = new  MusicMixer();
play: boolean = false;
}
