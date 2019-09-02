import {MusicPlayerSetting} from "./musicplayersetting";

export class MusicPlayerState{
  musicPlayerSetting: MusicPlayerSetting;
  frameSize: number;
  totalFrames: number;
  sampleRate: number;
  bufferSize: number;
  framePosition: number;
  elaspsedTime: number;
  elapsedPercentage: number;
  errorMessage: number;
  playing: number;

}
