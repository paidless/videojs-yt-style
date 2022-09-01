import videojs from 'video.js';
import {version as VERSION} from '../package.json';

import './js/components/progress-bar-padding';

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

    this.player.controlBar.progressControl.seekBar.addChild('ProgressBarPadding');

    this.player.on('playerresize', function(e) {
      const {width, height} = player.currentDimensions();
      player.el().style.setProperty('--player-width', `${width}px`);
      player.el().style.setProperty('--player-height', `${height}px`);
    })

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
