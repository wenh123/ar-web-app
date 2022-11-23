import { DeepAR } from 'deepar';
import deeparWasm from 'deepar/wasm/deepar.wasm';

import faceTrackingModel from 'deepar/models/face/models-68-extreme.bin';
import segmentationModel from 'deepar/models/segmentation/segmentation-160x160-opt.bin';

const canvas = document.getElementById('deepar-canvas');
const deepAR = new DeepAR({
  licenseKey: 'ac6d4949a74f0f2f8f98110c46a21182dd290181693ee73ef7362acfd6c2f1e3b437f9d866c8220e',
  canvas: canvas,
  deeparWasmPath: deeparWasm,
  callbacks: {
    onInitialize: () => {
      deepAR.startVideo(true);
    },
    segmentationConfig: {
        modelPath: segmentationModel,
      },
  },
});

  
deepAR.downloadFaceTrackingModel(faceTrackingModel);

const effects = [
    './effects/Neon_Devil_horns.deepar',
    './effects/Hope.deepar',
    './effects/MakeupLook.deepar',
    './effects/Ping_Pong.deepar',
    './effects/galaxy_background.deepar',
  ];
  let currentEffectIdx = -1;
  const btn = document.getElementById('button');
  btn.addEventListener('click', () => {
    currentEffectIdx = (currentEffectIdx + 1) % effects.length;
    const effect = effects[currentEffectIdx];
    deepAR.switchEffect(0, 'slot', effect);
  });