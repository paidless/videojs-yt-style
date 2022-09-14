import videojs from 'video.js';
import { version as VERSION } from '../package.json';

import './js/features/keep-timetooltip-in-seekbar';
import './js/components/progress-bar-padding';

import progressBarPaddingPatch from './js/features/progress-bar-padding';
import sizePropertyPatch from './js/features/size-property';
import fpsPatch from './js/features/fps';

// plugins
import dashHlsBitrateSwitcherPatch from './js/features/plugins/dash-hls-bitrate-switcher';

const Plugin = videojs.getPlugin('plugin');

// Default options for the plugin.
const defaults = {};

/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */
class YtStyle extends Plugin {

  /**
   * Create a YtStyle plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options) {
    // the parent class will add player under this.player
    super(player);

    this.options = videojs.mergeOptions(defaults, options);

    progressBarPaddingPatch(this.player);
    sizePropertyPatch(this.player);
    fpsPatch(this.player);

    // plugins
    dashHlsBitrateSwitcherPatch(this.player);

    // default enable
    if (player.hasPlugin('mobileUi')) {
      player.mobileUi();
    }

    // if (player.hasPlugin('hotkeys')) player.hotkeys({
    //   volumeStep: 0.05,
    //   seekStep: 5,
    //   enableMute: true,
    //   enableFullscreen: true,
    //   enableNumbers: true,
    //   enableVolumeScroll: true,
    //   enableHoverScroll: true,

    //   playPauseKey: function (e) {
    //     return (e.key === ' ');
    //   },

    //   seekStep: function (e) {
    //     if (e.ctrlKey && e.shiftKey) {
    //       return 5 * 60;
    //     } else if (e.ctrlKey) {
    //       return 60;
    //     } else if (e.altKey) {
    //       return 1;
    //     } else {
    //       return 5;
    //     }
    //   },

    //   fullscreenKey: function (e) {
    //     return ((e.key === 'f') || (e.ctrlKey && e.key === 'Enter'));
    //   },

    //   customKeys: {

    //     customMediaPlayPauseKey: {
    //       key: function (e) {
    //         return (e.key === 'MediaPlayPause');
    //       },
    //       handler: function (player, options, e) {
    //         if (player.hasStarted()) return; // when video has started, browser will catch MediaPlayPause control

    //         if (player.paused()) {
    //           player.play();
    //         } else {
    //           player.pause();
    //         }
    //       }
    //     },

    //     pauseKey: {
    //       key: function (e) {
    //         return (e.key === 'k');
    //       },
    //       handler: function (player, options, e) {
    //         if (player.paused()) {
    //           player.play();
    //         } else {
    //           player.pause();
    //         }
    //       }
    //     },

    //     seekStepKey: {
    //       key: function (e) {
    //         return ((e.key === 'j') || (e.key === 'l'));
    //       },
    //       handler: function (player, options, e) {
    //         var seekStepTime = 10;
    //         var lastTime = player.currentTime();
    //         if (e.key === 'j') {
    //           player.currentTime(Math.max(0, player.currentTime() - seekStepTime));
    //           if (lastTime == player.duration()) {
    //             player.play();
    //           }
    //         } else {
    //           player.currentTime(Math.min(player.duration(), player.currentTime() + seekStepTime));
    //           if (lastTime == player.duration()) {
    //             player.play();
    //           }
    //         }
    //       }
    //     },

    //     seekEndKey: {
    //       key: function (e) {
    //         return ((e.key === 'Home') || (e.key === 'End'));
    //       },
    //       handler: function (player, options, e) {
    //         if (e.key === 'Home') {
    //           player.currentTime(0);
    //           player.play();
    //         } else {
    //           player.currentTime(player.duration());
    //           player.play();
    //         }
    //       }
    //     },

    //     frameKey: {
    //       key: function (e) {
    //         return ((e.key === ',') || (e.key === '.'));
    //       },
    //       handler: function (player, options, e) {
    //         if (player.paused()) {
    //           var frameTime = (1 / player.fps());
    //           if (e.key === ',') {
    //             player.currentTime(Math.max(0, player.currentTime() - frameTime));
    //           } else {
    //             player.currentTime(Math.min(player.duration(), player.currentTime() + frameTime));
    //           }
    //         }
    //       }
    //     },

    //     speedKey: {
    //       key: function (e) {
    //         return ((e.key === '<') || (e.key === '>'));
    //       },
    //       handler: function (player, options, e) {
    //         if (e.key === '<') {
    //           player.DisplayBezel(PlaybackRatePrevMcl());
    //           player.playbackRate(PlaybackRatePrev());
    //         } else {
    //           player.DisplayBezel(PlaybackRateNextMcl());
    //           player.playbackRate(PlaybackRateNext());
    //         }
    //       }
    //     },

    //     // subtitlesKey: {
    //     //   key: function (e) {
    //     //     return (e.key === 'c');
    //     //   },
    //     //   handler: function (player, options, e) {
    //     //     if ((Array.isArray(player.subtitles().values()) && player.subtitles().values().length)) {
    //     //       if (player.subtitles().values().map(t => t.mode).indexOf('showing') == '-1') {
    //     //         var lastSelectSubtitles = player.subtitles().values().indexOf(player.subtitles().track);
    //     //         if (lastSelectSubtitles == '-1') {
    //     //           var defaultSubtitles = player.options().subtitles.findIndex((option) => option.default === true);
    //     //           if (defaultSubtitles == '-1') {
    //     //             var vlangSubtitles = player.subtitles().values().map(t => t.language).indexOf(vlang);
    //     //             if (vlangSubtitles == '-1') {
    //     //               player.subtitles().pick(0);
    //     //             } else {
    //     //               player.subtitles().pick(vlangSubtitles);
    //     //             }
    //     //           } else {
    //     //             player.subtitles().pick(defaultSubtitles);
    //     //           }
    //     //         } else {
    //     //           player.subtitles().pick(lastSelectSubtitles);
    //     //         }
    //     //       } else {
    //     //         player.subtitles().pick(-1);
    //     //       }
    //     //       player.DisplayBezel(getSubtitleLabel());
    //     //     } else {
    //     //       player.DisplayBezel('This video has no subtitles');
    //     //     }
    //     //   }
    //     // }
    //   }
    // });

    this.player.ready(() => {
      this.player.addClass('vjs-yt-style');
    });
  }
}

// Define default values for the plugin's `state` object here.
YtStyle.defaultState = {};

// Include the version number.
YtStyle.VERSION = VERSION;

// Register the plugin with video.js.
videojs.registerPlugin('ytStyle', YtStyle);

export default YtStyle;
