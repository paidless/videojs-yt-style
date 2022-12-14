import { throttle, UPDATE_REFRESH_INTERVAL } from '../utils/fn';
import document from 'global/document';

const frameEvent = (videoElement, func) => {
  // Part 1:
  const vid = videoElement;
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
      fps = Math.round(1 / getFpsAverage());

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

  // https://caniuse.com/?search=requestVideoFrameCallback
  if (vid.requestVideoFrameCallback) {
    vid.requestVideoFrameCallback(ticker);
  }

  // Part 3:
  const seekedHandle = () => {
    fpsRounder.pop();
    frameNotSeeked = false;
  };

  // You have to listen to the `seeked` event yourself.
  // Like this: `player.on('seeked', seekedHandle)`
  return seekedHandle;
};

const fps = (player) => {
  player.fps_ = {
    fps: 10,
    certainty: 0
  };

  player.fps = (value) => {
    if (typeof value !== 'number') {
      return player.fps_.fps;
    }

    player.fps_.fps = value;

    return player.fps_.fps;
  };

  const playerOptions = player.options_;

  // Manual set fps
  if (typeof playerOptions.fps === 'number' && playerOptions.fps > 0) {
    player.fps(playerOptions.fps);
    return;
  }

  // https://videojs.com/guides/tech/#required-events
  player.one('loadstart', () => {
    // The fps measurement only can use for Html5 video, so that is safely behavior
    // https://github.com/videojs/video.js/issues/2617
    const playerTech = player.tech({ IWillNotUseThisInPlugins: true });

    if (!playerTech) {
      return;
    }

    // Not html5 video
    // https://github.com/videojs/video.js/issues/2617
    if (typeof playerTech.el !== 'function' || !playerTech.el().requestVideoFrameCallback) {
      return;
    }

    const fpsUpdate = (details) => {
      player.fps(details.fps);
      player.fps_.certainty = details.certainty;

      player.trigger('fpsupdate', details);
    };
    const fpsUpdateHandle = throttle(fpsUpdate, UPDATE_REFRESH_INTERVAL);

    const seekedHandle = frameEvent(playerTech.el(), fpsUpdateHandle);

    player.on('seeked', seekedHandle);
    player.on('dispose', () => {
      player.off('seeked', seekedHandle);
    });
  });
};

export default fps;
