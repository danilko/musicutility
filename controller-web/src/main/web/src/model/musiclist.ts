import { MusicFile } from './musicfile';

export class MusicList {
  id: string;
  label: string;
  musicFiles: Array<MusicFile> = new Array();
}
