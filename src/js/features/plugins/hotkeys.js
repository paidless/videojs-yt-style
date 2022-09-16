const getDuration = (player) => {
  return player.liveTracker.isLive() ? player.liveTracker.liveCurrentTime() : player.duration();
};

const customKeys = {

  /**
   * https://github.com/ctd1500/videojs-hotkeys/issues/73
   */
  customMediaPlayPauseKey: {
    key(e) {
      return (e.key === 'MediaPlayPause');
    },
    handler(player, options, e) {
      // when video has started, browser will catch MediaPlayPause control
      if (player.hasStarted()) {
        return;
      }

      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    }
  },

  /**
   * `k` pause/play
   */
  pauseKey: {
    key(e) {
      return (e.key === 'k');
    },
    handler(player, options, e) {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    }
  },

  /**
   * `j`    -10s
   * `l`    +10s
   */
  seekStepKey: {
    key(e) {
      return ((e.key === 'j') || (e.key === 'l'));
    },
    handler(player, options, e) {
      const seekStepTime = 10;
      const lastTime = player.currentTime();

      if (e.key === 'j') {
        player.currentTime(Math.max(0, player.currentTime() - seekStepTime));
        if (lastTime === getDuration(player)) {
          player.play();
        }
      } else {
        player.currentTime(Math.min(getDuration(player), player.currentTime() + seekStepTime));
        if (lastTime === getDuration(player)) {
          player.play();
        }
      }
    }
  },

  /**
   * `Home`   start
   * `End`    end
   */
  seekEndKey: {
    key(e) {
      return ((e.key === 'Home') || (e.key === 'End'));
    },
    handler(player, options, e) {
      if (e.key === 'Home') {
        player.currentTime(0);
        player.play();
      } else {
        player.currentTime(getDuration(player));
        player.play();
      }
    }
  },

  /**
   * `,`    -1 frame
   * `.`    +1 frame
   */
  frameKey: {
    key(e) {
      return ((e.key === ',') || (e.key === '.'));
    },
    handler(player, options, e) {
      if (player.paused()) {
        const frameTime = (1 / player.fps());

        if (e.key === ',') {
          player.currentTime(Math.max(0, player.currentTime() - frameTime));
        } else {
          player.currentTime(Math.min(getDuration(player), player.currentTime() + frameTime));
        }
      }
    }
  },

  /**
   * `<`    - play speed
   * `>`    + play speed
   */
  speedKey: {
    key(e) {
      return ((e.key === '<') || (e.key === '>'));
    },
    handler(player, options, e) {
      if (e.key === '<') {
        // player.DisplayBezel(PlaybackRatePrevMcl());
        // player.playbackRate(PlaybackRatePrev());

        player.playbackRateGoto.prev();
      } else {
        // player.DisplayBezel(PlaybackRateNextMcl());
        // player.playbackRate(PlaybackRateNext());

        player.playbackRateGoto.next();
      }
    }
  },

  /**
   * `c`    open/close
   */
  subtitlesKey: {
    key(e) {
      return (e.key === 'c');
    },
    handler(player, options, e) {
      // if ((Array.isArray(player.subtitles().values()) && player.subtitles().values().length)) {
      //   if (player.subtitles().values().map(t => t.mode).indexOf('showing') == '-1') {
      //     var lastSelectSubtitles = player.subtitles().values().indexOf(player.subtitles().track);
      //     if (lastSelectSubtitles == '-1') {
      //       var defaultSubtitles = player.options().subtitles.findIndex((option) => option.default === true);
      //       if (defaultSubtitles == '-1') {
      //         var vlangSubtitles = player.subtitles().values().map(t => t.language).indexOf(vlang);
      //         if (vlangSubtitles == '-1') {
      //           player.subtitles().pick(0);
      //         } else {
      //           player.subtitles().pick(vlangSubtitles);
      //         }
      //       } else {
      //         player.subtitles().pick(defaultSubtitles);
      //       }
      //     } else {
      //       player.subtitles().pick(lastSelectSubtitles);
      //     }
      //   } else {
      //     player.subtitles().pick(-1);
      //   }
      //   player.DisplayBezel(getSubtitleLabel());
      // } else {
      //   player.DisplayBezel('This video has no subtitles');
      // }

      if (player.subtitles.currentsTextTrack().length === 0) {
        // console.debug('This video has no subtitles');
        return;
      }

      if (player.subtitles.active() < 0) {
        // do open
        player.subtitles.quickOpen();
      } else {
        // do close
        player.subtitles.close();
      }
    }
  },

  /**
   * `0-9`    n%
   */
  numbersKey: {
    key(event) {
      return ((event.which > 47 && event.which < 59) || (event.which > 95 && event.which < 106));
    },
    handler(player, options, event) {
      // Do not handle if enableModifiersForNumbers set to false and keys are Ctrl, Cmd or Alt
      if (options.enableModifiersForNumbers || !(event.metaKey || event.ctrlKey || event.altKey)) {
        let sub = 48;

        if (event.which > 95) {
          sub = 96;
        }
        const number = event.which - sub;
        const lastTime = player.currentTime();

        player.currentTime(getDuration(player) * number * 0.1);
        if (lastTime === getDuration(player)) {
          player.play();
        }
      }
    }
  }
};

const hotkeys = (player) => {
  if (player.hasPlugin('hotkeys')) {
    player.hotkeys({
      volumeStep: 0.05,
      // seekStep: 5,
      enableMute: true,
      enableFullscreen: true,
      enableNumbers: false,
      enableVolumeScroll: true,
      enableHoverScroll: true,

      playPauseKey(e) {
        return (e.key === ' ');
      },

      seekStep(e) {
        if (e.ctrlKey && e.shiftKey) {
          return 5 * 60;
        } else if (e.ctrlKey) {
          return 60;
        } else if (e.altKey) {
          return 1;
        }
        return 5;

      },

      fullscreenKey(e) {
        return ((e.key === 'f') || (e.ctrlKey && e.key === 'Enter'));
      },

      customKeys
    });
  }
};

export default hotkeys;
