/*! @name videojs-yt-style @version 0.1.1 @license UNLICENSED */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
	typeof define === 'function' && define.amd ? define(['video.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.videojsYtStyle = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var setPrototypeOf = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var inheritsLoose = createCommonjsModule(function (module) {
	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    setPrototypeOf(subClass, superClass);
	  }

	  module.exports = _inheritsLoose;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var version = "0.1.1";

	var Dom = videojs__default['default'].dom; // https://github.com/Ami-OS/video.js/blob/65750e311661e70f170e3652573caacf6f21fcce/src/js/control-bar/progress-control/time-tooltip.js#L54-L133

	videojs__default['default'].getComponent('TimeTooltip').prototype.update = function update(seekBarRect, seekBarPoint, content) {
	  var tooltipRect = Dom.findPosition(this.el_);
	  var playerRect = Dom.getBoundingClientRect(this.player_.el());
	  var seekBarPointPx = seekBarRect.width * seekBarPoint; // do nothing if either rect isn't available
	  // for example, if the player isn't in the DOM for testing

	  if (!playerRect || !tooltipRect) {
	    return;
	  } // This is the space left of the `seekBarPoint` available within the bounds
	  // of the player. We calculate any gap between the left edge of the player
	  // and the left edge of the `SeekBar` and add the number of pixels in the
	  // `SeekBar` before hitting the `seekBarPoint`


	  var spaceLeftOfPoint = seekBarRect.left - playerRect.left + seekBarPointPx; // This is the space right of the `seekBarPoint` available within the bounds
	  // of the player. We calculate the number of pixels from the `seekBarPoint`
	  // to the right edge of the `SeekBar` and add to that any gap between the
	  // right edge of the `SeekBar` and the player.

	  var spaceRightOfPoint = seekBarRect.width - seekBarPointPx + (playerRect.right - seekBarRect.right);

	  if (this.options_.playerOptions.keepTimeTooltipInSeekBar) {
	    // This is the space right of the `seekBarPoint` in the `SeekBar`
	    spaceRightOfPoint = seekBarRect.width - seekBarPointPx; // This is the space left of the `seekBarPoint` in the `SeekBar`

	    spaceLeftOfPoint = seekBarRect.width - spaceRightOfPoint;
	  } // This is the number of pixels by which the tooltip will need to be pulled
	  // further to the right to center it over the `seekBarPoint`.


	  var pullTooltipBy = tooltipRect.width / 2;

	  if (this.options_.playerOptions.keepTimeTooltipInSeekBar) {
	    // The center of `seekBar`
	    var centerPosition = seekBarRect.width / 2; // Offset value of the `centerPosition`

	    var centerOffsetOfPoint = centerPosition - seekBarPointPx; // If `tooltipRect` is greater than `seekBarRect` then center the tooltip,
	    // else patch the offset value of the tooltip overflow space.

	    if (tooltipRect.width > seekBarRect.width) {
	      pullTooltipBy += centerOffsetOfPoint;
	    } else if (spaceLeftOfPoint < pullTooltipBy) {
	      pullTooltipBy += pullTooltipBy - spaceLeftOfPoint;
	    } else if (spaceRightOfPoint < pullTooltipBy) {
	      pullTooltipBy -= pullTooltipBy - spaceRightOfPoint;
	    }
	  } else {
	    // Adjust the `pullTooltipBy` distance to the left or right depending on
	    // the results of the space calculations above.
	    if (spaceLeftOfPoint < pullTooltipBy) {
	      pullTooltipBy += pullTooltipBy - spaceLeftOfPoint;
	    } else if (spaceRightOfPoint < pullTooltipBy) {
	      pullTooltipBy = spaceRightOfPoint;
	    } // Due to the imprecision of decimal/ratio based calculations and varying
	    // rounding behaviors, there are cases where the spacing adjustment is off
	    // by a pixel or two. This adds insurance to these calculations.


	    if (pullTooltipBy < 0) {
	      pullTooltipBy = 0;
	    } else if (pullTooltipBy > tooltipRect.width) {
	      pullTooltipBy = tooltipRect.width;
	    }
	  } // prevent small width fluctuations within 0.4px from
	  // changing the value below.
	  // This really helps for live to prevent the play
	  // progress time tooltip from jittering


	  pullTooltipBy = Math.round(pullTooltipBy);
	  this.el_.style.right = "-" + pullTooltipBy + "px";
	  this.write(content);
	};

	var Component = videojs__default['default'].getComponent('Component');

	var ProgressBarPadding = /*#__PURE__*/function (_Component) {
	  inheritsLoose(ProgressBarPadding, _Component);

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

	var progressBarPadding = function progressBarPadding(player) {
	  player.getChild('controlBar').getChild('progressControl').getChild('seekBar').addChild('ProgressBarPadding');
	};

	var sizeProperty = function sizeProperty(player) {
	  var resizeHandle = function resizeHandle() {
	    var _player$currentDimens = player.currentDimensions(),
	        width = _player$currentDimens.width,
	        height = _player$currentDimens.height;

	    player.el().style.setProperty('--player-width', width + "px");
	    player.el().style.setProperty('--player-height', height + "px");
	  };

	  resizeHandle();
	  player.on('playerresize', resizeHandle);
	};

	var dashHlsBitrateSwitcher = function dashHlsBitrateSwitcher(player) {
	  if (player.usingPlugin('dashHlsBitrateSwitcher')) {
	    // https://github.com/samueleastdev/videojs-dash-hls-bitrate-switcher/blob/master/src/plugin.js#L54-L68
	    player.one('loadstart', function () {
	      player.one(videojs__default['default'].browser.IS_IOS ? 'canplaythrough' : 'loadedmetadata', function () {
	        player.getChild('controlBar').getChild('RatesButton').controlText('Bitrate');
	      });
	    });
	  }
	};

	var Plugin = videojs__default['default'].getPlugin('plugin'); // Default options for the plugin.

	var defaults = {};
	/**
	 * An advanced Video.js plugin. For more information on the API
	 *
	 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
	 */

	var YtStyle = /*#__PURE__*/function (_Plugin) {
	  inheritsLoose(YtStyle, _Plugin);

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
	    progressBarPadding(_this.player);
	    sizeProperty(_this.player); // plugins

	    dashHlsBitrateSwitcher(_this.player);

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

	return YtStyle;

})));
