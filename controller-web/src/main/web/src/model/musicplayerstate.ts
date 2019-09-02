import {MusicPlayerSetting} from "./musicplayersetting";

export class MusicPlayerState{
  musicPlayerSetting: MusicPlayerSetting;
  frameSize: bigint;
  totalFrames: bigint;
  sampleRate: bigint;
  bufferSize: bigint;
  framePosition: bigint;
  elaspsedTime: string;
  elapsedPercentage: string;
  errorMessage: string;
  playing: boolean;

}
