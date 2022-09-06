/*! @name videojs-yt-style @version 0.0.0 @license UNLICENSED */
'use strict';

var _inheritsLoose = require('@babel/runtime/helpers/inheritsLoose');
var videojs = require('video.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);
var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

var version = "0.0.0";

var Component = videojs__default['default'].getComponent('Component');

var ProgressBarPadding = /*#__PURE__*/function (_Component) {
  _inheritsLoose__default['default'](ProgressBarPadding, _Component);

  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  function ProgressBarPadding(player, options) {
    if (options === void 0) {
      options = {};
    }

    // It is important to invoke the superclass before anything else,
    // to get all the features of components out of the box!
    return _Component.call(this, player, options) || this;
  } // The `createEl` function of a component creates its DOM element.


  var _proto = ProgressBarPadding.prototype;

  _proto.createEl = function createEl() {
    return videojs__default['default'].dom.createEl('div', {
      // Prefixing classes of elements within a player with "vjs-"
      // is a convention used in Video.js.
      className: 'vjs-progress-bar-padding'
    });
  };

  return ProgressBarPadding;
}(Component);

videojs__default['default'].registerComponent('ProgressBarPadding', ProgressBarPadding);

var Plugin = videojs__default['default'].getPlugin('plugin'); // Default options for the plugin.

var defaults = {};
/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */

var YtStyle = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose__default['default'](YtStyle, _Plugin);

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
  function YtStyle(player, options) {
    var _this;

    // the parent class will add player under this.player
    _this = _Plugin.call(this, player) || this;
    _this.options = videojs__default['default'].mergeOptions(defaults, options);

    _this.player.controlBar.progressControl.seekBar.addChild('ProgressBarPadding');

    _this.player.on('playerresize', function (e) {
      var _player$currentDimens = player.currentDimensions(),
          width = _player$currentDimens.width,
          height = _player$currentDimens.height;

      player.el().style.setProperty('--player-width', width + "px");
      player.el().style.setProperty('--player-height', height + "px");
    });

    _this.player.ready(function () {
      _this.player.addClass('vjs-yt-style');
    });

    return _this;
  }

  return YtStyle;
}(Plugin); // Define default values for the plugin's `state` object here.


YtStyle.defaultState = {}; // Include the version number.

YtStyle.VERSION = version; // Register the plugin with video.js.

videojs__default['default'].registerPlugin('ytStyle', YtStyle);

module.exports = YtStyle;
