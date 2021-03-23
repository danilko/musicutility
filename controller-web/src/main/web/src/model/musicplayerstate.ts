import {MusicPlayerSetting} from "./musicplayersetting";

export class MusicPlayerState{
  musicPlayerSetting: MusicPlayerSetting  = new MusicPlayerSetting();
  frameSize: number = 0;
  totalFrames: number = 0;
  sampleRate: number = 0;
  bufferSize: number = 0;
  framePosition: number = 0;
  elaspsedTime: number = 0;
  elapsedPercentage: number = 0;
  errorMessage: number = 0;
  playing: number = 0;

}
