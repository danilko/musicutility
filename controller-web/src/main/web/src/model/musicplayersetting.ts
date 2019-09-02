import {MusicMixer} from "./musicmixer";
import {MusicList} from "./musiclist";
import {MusicFile} from "./musicfile";

export class MusicPlayerSetting {
currentMusicFile: MusicFile;
currentMusicList: MusicList;
currentMusicMixer : MusicMixer;
play: boolean;
}
