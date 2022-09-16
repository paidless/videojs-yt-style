import { throttle, UPDATE_REFRESH_INTERVAL } from '../utils/fn';
import document from 'global/document';

const frameEvent = (player, func) => {
  // Part 1:
  const vid = player.tech().el();
  let lastMediaTime; let lastFrameNum; let fps;
  const fpsRounder = [];
  let frameNotSeeked = true;
  // Part 4:
  const getFpsAverage = () => {
    return fpsRounder.reduce((a, b) => a + b) / fpsRounder.length;
  };
  // Part 2 (with some modifications):
  const ticker = (useless, metadata) => {
    const mediaTimeDiff = Math.abs(metadata.mediaTime - lastMediaTime);
    const frameNumDiff = Math.abs(metadata.presentedFrames - lastFrameNum);
    const diff = mediaTimeDiff / frameNumDiff;

    if (
      diff &&
      diff < 1 &&
      frameNotSeeked &&
      fpsRounder.length < 50 &&
      vid.playbackRate === 1 &&
      document.hasFocus()
    ) {
      fpsRounder.push(diff);
      // console.log('ticker', fpsRounder.length);
      fps = Math.round(1 / getFpsAverage());

      // document.querySelector("#info").textContent = "FPS: " + fps + ", certainty: " + fpsRounder.length * 2 + "%";
      func({
        fps,
        certainty: fpsRounder.length * 2
      });
    }
    frameNotSeeked = true;
    lastMediaTime = metadata.mediaTime;
    lastFrameNum = metadata.presentedFrames;
    vid.requestVideoFrameCallback(ticker);
  };

  vid.requestVideoFrameCallback(ticker);
  // Part 3:
  const seekedHandle = () => {
    fpsRounder.pop();
    // console.warn('seeked', fpsRounder.length);
    frameNotSeeked = false;
  };

  player.on('seeked', seekedHandle);
  player.on('dispose', () => {
    player.off('seeked', seekedHandle);
  });

  // vid.addEventListener('seeked', seekedHandle);
};

const fps = (player) => {
  player.fps_ = {
    fps: 10,
    certainty: 0
  };
  player.fps = () => {
    return player.fps_.fps;
  };

  // https://videojs.com/guides/tech/#required-events
  player.one('loadstart', () => {
    if (!player.tech()) {
      return;
    }

    // Not html5 video
    // https://github.com/videojs/video.js/issues/2617
    if (player.tech().name() !== 'Html5') {
      return;
    }

    const fpsUpdate = (details) => {
      player.fps_.fps = details.fps;
      player.fps_.certainty = details.certainty;

      player.trigger('fpsupdate');
    };
    const fpsUpdateHandle = throttle(fpsUpdate, UPDATE_REFRESH_INTERVAL);

    frameEvent(player, fpsUpdateHandle);
  });
};

export default fps;