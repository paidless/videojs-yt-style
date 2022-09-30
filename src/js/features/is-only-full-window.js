const isOnlyFullWindowMethod = (player) => {
  /**
   * Detect is only full window was supported.
   *
   * @return    {boolean}
   *            Return detect result.
   */
  player.isOnlyFullWindow = function isOnlyFullWindow() {
    // https://github.com/videojs/video.js/blob/9ca2e8764a2cced1efdad730b8c66c4b42a33f7f/src/js/player.js#L2909-L2932
    if (player.fsApi_.requestFullscreen) {
      return false;
    } else if (player.tech_.supportsFullScreen() && !player.options_.preferFullWindow === true) {
      // we can't take the video.js controls fullscreen but we can go fullscreen
      // with native controls
      return false;
    }
    // fullscreen isn't supported so we'll just stretch the video element to
    // fill the viewport
    return true;

  };
};

export default isOnlyFullWindowMethod;
