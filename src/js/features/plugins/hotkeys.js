import { getDuration } from '../../utils/videojs-extra.js';

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
        player.getChild('Bezel').display(`${player.playbackRateGoto.get().prev()}x`);
        player.playbackRateGoto.prev();
      } else {
        player.getChild('Bezel').display(`${player.playbackRateGoto.get().next()}x`);
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
      if (player.subtitles.currentsTextTrack().length === 0) {
        return;
      }

      if (player.subtitles.active() < 0) {
        // do open
        player.subtitles.quickOpen();
        player.getChild('Bezel').display(`${player.localize(player.subtitles.activeTextTrack().label)} ${player.localize('Subtitles On')}`);
      } else {
        // do close
        player.subtitles.close();
        player.getChild('Bezel').display(`${player.localize('Subtitles Off')}`);
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
  if (player.hasPlugin('hotkeys') && !player.usingPlugin('hotkeys')) {
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

      volumeUpKey(e) {
        if (e.key !== 'ArrowUp') {
          return false;
        }
        const calc = Math.round(Math.min(1, player.volume() + this.volumeStep) * 100);

        player.getChild('Bezel').display(`${calc}%`);
        return true;
      },

      volumeDownKey(e) {
        if (e.key !== 'ArrowDown') {
          return false;
        }
        const calc = Math.round(Math.max(0, player.volume() - this.volumeStep) * 100);

        player.getChild('Bezel').display(`${calc}%`);
        return true;
      },

      muteKey(e) {
        if (e.key !== 'm') {
          return false;
        }
        let calc = Math.round(player.volume() * 100);

        if (!player.muted()) {
          calc = 0;
        }

        player.getChild('Bezel').display(`${calc}%`);
        return true;
      },

      customKeys
    });
  }
};

export default hotkeys;
