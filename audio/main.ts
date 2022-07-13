import { BaseExercise } from '../../_base/base-exercise';
import { Library as lib } from './lib';

export class Main_audio extends BaseExercise {
  constructor(private root: audio.Root) {
    super(root, {
      canvasImageSmoothing: true,
      disableMouseForAllClips: false,
      enableMouse: [],
      stopAllClips: true,
      autoCache: true,
      autoCacheScale: 1,
      disableCache: [],
      enableCache: [],
      forceCache: [],
      debug: {
        listCachedClips: false,
        showCachedClips: false,
      },
    });
  }

  initialize() {
    this.root.stage.enableMouseOver();
  }

  nextStep() {}

  checkExercise() {}

  setLocked(locked: boolean) {}

  reset() {}

  nextSubstep() {}

  sameStep() {}

  sameSubstep() {}

  onCheckReady(isReady: boolean) {}

  beforeCorrectAnswer() {}

  beforeWrongAnswer() {}

  beforeFinalAnswer() {}

  afterCorrectAnswer() {}

  afterFinalAnswer() {}

  afterWrongAnswer() {}
}
