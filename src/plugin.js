import videojs from 'video.js';
import { version as VERSION } from '../package.json';

import './js/features/keep-timetooltip-in-seekbar';

import progressBarPaddingPatch from './js/features/progress-bar-padding';
import sizePropertyPatch from './js/features/size-property';
import fpsPatch from './js/features/fps';
import subtitlesPatch from './js/features/subtitles';
import playbackRateGotoPatch from './js/features/playback-rate-list';
import bezelPatch from './js/features/bezel';

// plugins
import dashHlsBitrateSwitcherPatch from './js/features/plugins/dash-hls-bitrate-switcher';
import mobileUiPatch from './js/features/plugins/mobile-ui';
import hotkeysPatch from './js/features/plugins/hotkeys';

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
    subtitlesPatch(this.player);
    playbackRateGotoPatch(this.player);
    bezelPatch(this.player);

    // plugins
    dashHlsBitrateSwitcherPatch(this.player);

    // default enable plugins
    mobileUiPatch(this.player);
    hotkeysPatch(this.player);

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
