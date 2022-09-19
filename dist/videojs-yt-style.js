/*! @name videojs-yt-style @version 0.1.1 @license UNLICENSED */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js'), require('global/document'), require('global/window')) :
	typeof define === 'function' && define.amd ? define(['video.js', 'global/document', 'global/window'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.videojsYtStyle = factory(global.videojs, global.document, global.window));
}(this, (function (videojs, document, window) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);
	var document__default = /*#__PURE__*/_interopDefaultLegacy(document);
	var window__default = /*#__PURE__*/_interopDefaultLegacy(window);

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

	var Component$1 = videojs__default['default'].getComponent('Component');

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
	}(Component$1);

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
	  player.on('dispose', function () {
	    player.off('playerresize', resizeHandle);
	  });
	};

	var UPDATE_REFRESH_INTERVAL = 30;
	/**
	 * Creates a debounced function that delays invoking `func` until after `delay`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked.
	 *
	 * Inspired by lodash and underscore implementations.
	 *
	 * @function
	 * @param    {Function} func
	 *           The function to wrap with debounce behavior.
	 *
	 * @param    {number} delay
	 *           The number of milliseconds to wait after the last invocation.
	 *
	 * @param    {boolean} [immediate]
	 *           Whether or not to invoke the function immediately upon creation.
	 *
	 * @return   {Function}
	 *           A debounced function.
	 */

	var debounce = function debounce(func, delay, immediate) {
	  if (immediate === void 0) {
	    immediate = false;
	  }

	  // eslint-disable-line no-unused-vars
	  var timer;
	  var fastRun = true;
	  /* eslint-disable consistent-this */

	  return function () {
	    var context = this;
	    var args = arguments;

	    if (fastRun && immediate) {
	      func.apply(context, args);
	      fastRun = false;
	    }

	    clearTimeout(timer);
	    timer = setTimeout(function () {
	      func.apply(context, args);
	      fastRun = true;
	    }, delay);
	  };
	  /* eslint-enable consistent-this */
	};
	/**
	 * Wraps the given function, `func`, with a new function that only invokes `func`
	 * at most once per every `limit` milliseconds.
	 *
	 * @function
	 * @param    {Function} func
	 *           The function to be throttled.
	 *
	 * @param    {number}   limit
	 *           The number of milliseconds by which to throttle.
	 *
	 * @return   {Function}
	 *           Closure return function.
	 */

	var throttle = function throttle(func, limit) {
	  // eslint-disable-line no-unused-vars
	  var lastFunc;
	  var lastRan;
	  /* eslint-disable consistent-this */

	  return function () {
	    var context = this;
	    var args = arguments;

	    if (!lastRan) {
	      func.apply(context, args);
	      lastRan = Date.now();
	    } else {
	      clearTimeout(lastFunc);
	      lastFunc = setTimeout(function () {
	        if (Date.now() - lastRan >= limit) {
	          func.apply(context, args);
	          lastRan = Date.now();
	        }
	      }, limit - (Date.now() - lastRan));
	    }
	  };
	  /* eslint-enable consistent-this */
	};

	var frameEvent = function frameEvent(videoElement, func) {
	  // Part 1:
	  var vid = videoElement;
	  var lastMediaTime;
	  var lastFrameNum;
	  var fps;
	  var fpsRounder = [];
	  var frameNotSeeked = true; // Part 4:

	  var getFpsAverage = function getFpsAverage() {
	    return fpsRounder.reduce(function (a, b) {
	      return a + b;
	    }) / fpsRounder.length;
	  }; // Part 2 (with some modifications):


	  var ticker = function ticker(useless, metadata) {
	    var mediaTimeDiff = Math.abs(metadata.mediaTime - lastMediaTime);
	    var frameNumDiff = Math.abs(metadata.presentedFrames - lastFrameNum);
	    var diff = mediaTimeDiff / frameNumDiff;

	    if (diff && diff < 1 && frameNotSeeked && fpsRounder.length < 50 && vid.playbackRate === 1 && document__default['default'].hasFocus()) {
	      fpsRounder.push(diff);
	      fps = Math.round(1 / getFpsAverage());
	      func({
	        fps: fps,
	        certainty: fpsRounder.length * 2
	      });
	    }

	    frameNotSeeked = true;
	    lastMediaTime = metadata.mediaTime;
	    lastFrameNum = metadata.presentedFrames;
	    vid.requestVideoFrameCallback(ticker);
	  }; // https://caniuse.com/?search=requestVideoFrameCallback


	  if (vid.requestVideoFrameCallback) {
	    vid.requestVideoFrameCallback(ticker);
	  } // Part 3:


	  var seekedHandle = function seekedHandle() {
	    fpsRounder.pop();
	    frameNotSeeked = false;
	  }; // You have to listen to the `seeked` event yourself.
	  // Like this: `player.on('seeked', seekedHandle)`


	  return seekedHandle;
	};

	var fps = function fps(player) {
	  player.fps_ = {
	    fps: 10,
	    certainty: 0
	  };

	  player.fps = function (value) {
	    if (typeof value !== 'number') {
	      return player.fps_.fps;
	    }

	    player.fps_.fps = value;
	    return player.fps_.fps;
	  };

	  var playerOptions = player.options_; // Manual set fps

	  if (typeof playerOptions.fps === 'number' && playerOptions.fps > 0) {
	    player.fps(playerOptions.fps);
	    return;
	  } // https://videojs.com/guides/tech/#required-events


	  player.one('loadstart', function () {
	    // The fps measurement only can use for Html5 video, so that is safely behavior
	    // https://github.com/videojs/video.js/issues/2617
	    var playerTech = player.tech({
	      IWillNotUseThisInPlugins: true
	    });

	    if (!playerTech) {
	      return;
	    } // Not html5 video
	    // https://github.com/videojs/video.js/issues/2617


	    if (playerTech.name() !== 'Html5') {
	      return;
	    }

	    var fpsUpdate = function fpsUpdate(details) {
	      player.fps(details.fps);
	      player.fps_.certainty = details.certainty;
	      player.trigger('fpsupdate');
	    };

	    var fpsUpdateHandle = throttle(fpsUpdate, UPDATE_REFRESH_INTERVAL);
	    var seekedHandle = frameEvent(playerTech.el(), fpsUpdateHandle);
	    player.on('seeked', seekedHandle);
	    player.on('dispose', function () {
	      player.off('seeked', seekedHandle);
	    });
	  });
	};

	/**
	 * Check two language is not same.
	 *
	 * @param     {string} needToCompare
	 *            Language need to compare.
	 *
	 * @param     {string} compareLang
	 *            Compare with language.
	 *
	 * @return    {boolean}
	 *            Return the compared result.
	 */
	var isLangMatched = function isLangMatched(needToCompare, compareLang) {
	  // eslint-disable-line no-unused-vars
	  var _ref = [needToCompare.toLowerCase(), compareLang.toLowerCase()],
	      aLang = _ref[0],
	      bLang = _ref[1];

	  if (aLang === bLang) {
	    return true;
	  }

	  if (aLang === bLang.split('-').at(0)) {
	    return true;
	  }

	  return false;
	};

	function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	/**
	 * Manager subtitle operate
	 */

	var SubtitleManager = /*#__PURE__*/function () {
	  /**
	   * Create a SubtitleManager instance.
	   *
	   * @param {Player} player
	   *        A Video.js Player instance.
	   *
	   * @param {Object} options
	   *        An optional options object.
	   */
	  function SubtitleManager(player, options) {
	    var _this = this;

	    this.player = player; // Save last showing index of textTrack.

	    this.lastShowing_ = null;

	    var handleSubtitleChangeEvent = function handleSubtitleChangeEvent() {
	      _this.lastShowing(_this.active());
	    };

	    player.textTracks().on('change', handleSubtitleChangeEvent);
	    player.on('dispose', function () {
	      player.textTracks().off('change', handleSubtitleChangeEvent);
	    });
	  }
	  /**
	   * Get last showing or set last showing.
	   *
	   * @function
	   * @param     {number} [index]
	   *            Input a index of text track if you need to update the last showing.
	   *
	   * @return    {number}
	   *            Return a index of last showing text track.
	   */


	  var _proto = SubtitleManager.prototype;

	  _proto.lastShowing = function lastShowing(index) {
	    if (index === void 0) {
	      index = undefined;
	    }

	    if (typeof index !== 'number' || index < 0) {
	      return this.lastShowing_;
	    }

	    this.lastShowing_ = index;
	    return index;
	  }
	  /**
	   * Get all subtitles.
	   *
	   * @function
	   * @return    {Array}
	   *            Return a text track list.
	   */
	  ;

	  _proto.currentsTextTrack = function currentsTextTrack() {
	    var textTrackList = [];
	    var textTracks = this.player.textTracks();
	    var currentTrack;

	    for (var index = 0; index < textTracks.length; index++) {
	      currentTrack = textTracks[index];

	      if (currentTrack.kind === 'subtitles') {
	        textTrackList.push(currentTrack);
	      }
	    }

	    return textTrackList;
	  }
	  /**
	   * Get default text track index.
	   *
	   * @function
	   * @return    {number}
	   *            Return default text track index.
	   */
	  ;

	  _proto.default = function _default() {
	    var allTextTrack = this.currentsTextTrack(); // Check default in `allTextTrack`.

	    var defaultIndex = allTextTrack.findIndex(function (textTrack) {
	      return textTrack.default === true;
	    });

	    if (defaultIndex !== -1) {
	      return defaultIndex;
	    } // Check user browser preferred language.


	    var defaultTextTrack = allTextTrack[defaultIndex];

	    if (defaultTextTrack && isLangMatched(defaultTextTrack.language, window__default['default'].navigator.language)) {
	      return defaultIndex;
	    } // Check user browser all selected language.


	    for (var _iterator = _createForOfIteratorHelperLoose(allTextTrack.entries()), _step; !(_step = _iterator()).done;) {
	      var _step$value = _step.value,
	          index = _step$value[0],
	          textTrack = _step$value[1];

	      for (var _iterator2 = _createForOfIteratorHelperLoose(window__default['default'].navigator.languages), _step2; !(_step2 = _iterator2()).done;) {
	        var navLang = _step2.value;

	        if (isLangMatched(textTrack.language, navLang)) {
	          return index;
	        }
	      }
	    } // Fail back.


	    return -1;
	  }
	  /**
	   * Get `TextTrack` instance with index.
	   *
	   * @function
	   * @param     {number} index
	   *            Need to get the index of the text track.
	   *
	   * @return    {TextTrack}
	   *            Return the TextTrack instance.
	   */
	  ;

	  _proto.getTextTrack = function getTextTrack(index) {
	    if (index < 0) {
	      return;
	    }

	    var get = this.currentsTextTrack()[index];

	    if (!get) {
	      return;
	    }

	    return get;
	  }
	  /**
	   * Get active `textTrack` index.
	   *
	   * @function
	   * @return    {number}
	   *            Return active `textTrack` index.
	   */
	  ;

	  _proto.active = function active() {
	    var currentIndex = -1;

	    for (var _iterator3 = _createForOfIteratorHelperLoose(this.currentsTextTrack().entries()), _step3; !(_step3 = _iterator3()).done;) {
	      var _step3$value = _step3.value,
	          index = _step3$value[0],
	          textTrack = _step3$value[1];

	      if (textTrack.mode === 'showing') {
	        currentIndex = index;
	        break;
	      }
	    }

	    return currentIndex;
	  }
	  /**
	   * Get active `textTrack`.
	   *
	   * @function
	   * @return    {TextTrack}
	   *            Return active `TextTrack`.
	   */
	  ;

	  _proto.activeTextTrack = function activeTextTrack() {
	    return this.getTextTrack(this.active());
	  }
	  /**
	   * Pick the subtitle with index.
	   *
	   * @function
	   * @param     {number} index
	   *            Need to pick the index of the text track.
	   *
	   * @return    {TextTrack}
	   *            Return a `TextTrack` instance.
	   */
	  ;

	  _proto.pick = function pick(index) {
	    if (typeof index !== 'number') {
	      return;
	    }

	    if (index < 0) {
	      return this.close();
	    }

	    var choose = this.getTextTrack(index);

	    if (!choose) {
	      return;
	    }

	    choose.mode = 'showing';
	    return choose;
	  }
	  /**
	   * Close the subtitle.
	   *
	   * @function
	   * @return    {TextTrack}
	   *            Return a closed `TextTrack` instance.
	   */
	  ;

	  _proto.close = function close() {
	    var active = this.getTextTrack(this.active());

	    if (!active) {
	      return;
	    }

	    active.mode = 'disabled';
	    this.lastShowing(active);
	    return active;
	  }
	  /**
	   * Quick to Open the subtitle (auto selected the subtitle).
	   *
	   * @function
	   * @return    {TextTrack}
	   *            Return the selected `TextTrack` instance.
	   */
	  ;

	  _proto.quickOpen = function quickOpen() {
	    // Check last showing.
	    var last = this.lastShowing();

	    if (typeof last === 'number') {
	      return this.pick(last);
	    } // Check default.


	    var defaultIndex = this.default();

	    if (defaultIndex !== -1) {
	      return this.pick(defaultIndex);
	    }
	  };

	  return SubtitleManager;
	}();

	var subtitles = function subtitles(player) {
	  player.subtitles = new SubtitleManager(player);
	};

	/**
	 * List - can loop array
	 */
	var List = /*#__PURE__*/function () {
	  /**
	   * Create a List instance.
	   *
	   * @param     {Array} array
	   *            Init array.
	   *
	   * @param     {number} [startIndex]
	   *            Set start index.
	   */
	  function List(array, startIndex) {
	    this.values = array.slice(0);
	    this.index_ = startIndex || 0;
	    this.loop_ = true;
	  }
	  /**
	   * Get or set the index.
	   *
	   * @function
	   * @param     {number} [value]
	   *            Set the current index.
	   *
	   * @return    {number}
	   *            Current index.
	   */


	  var _proto = List.prototype;

	  _proto.index = function index(value) {
	    if (typeof value !== 'undefined') {
	      this.index_ = Math.max(0, Math.min(value, this.values.length - 1));
	    } else {
	      return this.index_;
	    }
	  }
	  /**
	   * Get or set is not loop the array.
	   *
	   * @function
	   * @param     {boolean} [value]
	   *            Set is not loop the array.
	   *
	   * @return    {boolean}
	   *            Is not loop the array.
	   */
	  ;

	  _proto.loop = function loop(value) {
	    if (typeof value !== 'undefined') {
	      this.loop_ = !!value;
	    } else {
	      return this.loop_;
	    }
	  }
	  /**
	   * Calculate the loop index.
	   *
	   * @function
	   * @param     {number} steps
	   *            Step number of the index.
	   *
	   * @return    {number}
	   *            Calculated index.
	   */
	  ;

	  _proto.calc = function calc(steps) {
	    var newIndex = this.index_ + steps;
	    var length = this.values.length;
	    return this.loop_ ? (length + newIndex) % length : Math.max(0, Math.min(newIndex, length - 1));
	  }
	  /**
	   * Set and get array element with step.
	   *
	   * @function
	   * @param     {number} steps
	   *            step number of the index.
	   *
	   * @return    {*}
	   *            Return specify array element.
	   */
	  ;

	  _proto.step = function step(steps) {
	    this.index_ = this.calc(steps);
	    return this.values[this.index_];
	  }
	  /**
	   * Get current array element.
	   *
	   * @function
	   * @return    {*}
	   *            Return current array element.
	   */
	  ;

	  _proto.current = function current() {
	    return this.values[this.index_];
	  }
	  /**
	   * Set and get next array element.
	   *
	   * @function
	   * @return    {*}
	   *            Return next array element.
	   */
	  ;

	  _proto.next = function next() {
	    return this.step(1);
	  }
	  /**
	   * Set and get prev array element.
	   *
	   * @function
	   * @return    {*}
	   *            Return prev array element.
	   */
	  ;

	  _proto.prev = function prev() {
	    return this.step(-1);
	  }
	  /**
	   * Check current is the end of array.
	   *
	   * @function
	   * @return    {boolean}
	   *            Return the check result.
	   */
	  ;

	  _proto.ended = function ended() {
	    return this.index_ === this.values.length - 1;
	  };

	  return List;
	}();

	var PlaybackRateGoto = /*#__PURE__*/function () {
	  function PlaybackRateGoto(player) {
	    this.player = player;
	  }

	  var _proto = PlaybackRateGoto.prototype;

	  _proto.get = function get() {
	    var list = new List(this.player.playbackRates());
	    list.loop(false);
	    list.index(this.player.playbackRates().indexOf(this.player.playbackRate()));
	    return list;
	  };

	  _proto.next = function next() {
	    var rate = this.get().next();
	    this.player.playbackRate(rate);
	  };

	  _proto.prev = function prev() {
	    var rate = this.get().prev();
	    this.player.playbackRate(rate);
	  };

	  return PlaybackRateGoto;
	}();

	var playbackRateGoto = function playbackRateGoto(player) {
	  player.playbackRateGoto = new PlaybackRateGoto(player);
	};

	var Component = videojs__default['default'].getComponent('Component');
	/**
	 * Bezel text
	 */

	var BezelText = /*#__PURE__*/function (_Component) {
	  inheritsLoose(BezelText, _Component);

	  // The constructor of a component receives two arguments: the
	  // player it will be associated with and an object of options.
	  function BezelText(player, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    // It is important to invoke the superclass before anything else,
	    // to get all the features of components out of the box!
	    return _Component.call(this, player, options) || this;
	  } // The `createEl` function of a component creates its DOM element.


	  var _proto = BezelText.prototype;

	  _proto.createEl = function createEl() {
	    return videojs__default['default'].dom.createEl('div', {
	      // Prefixing classes of elements within a player with "vjs-"
	      // is a convention used in Video.js.
	      className: 'vjs-bezel-text'
	    });
	  };

	  return BezelText;
	}(Component);

	videojs__default['default'].registerComponent('BezelText', BezelText);
	/**
	 * Bezel text wrapper
	 */

	var BezelTextWrapper = /*#__PURE__*/function (_Component2) {
	  inheritsLoose(BezelTextWrapper, _Component2);

	  // The constructor of a component receives two arguments: the
	  // player it will be associated with and an object of options.
	  function BezelTextWrapper(player, options) {
	    var _this;

	    if (options === void 0) {
	      options = {};
	    }

	    // It is important to invoke the superclass before anything else,
	    // to get all the features of components out of the box!
	    _this = _Component2.call(this, player, options) || this;

	    _this.addChild('BezelText');

	    return _this;
	  } // The `createEl` function of a component creates its DOM element.


	  var _proto2 = BezelTextWrapper.prototype;

	  _proto2.createEl = function createEl() {
	    return videojs__default['default'].dom.createEl('div', {
	      // Prefixing classes of elements within a player with "vjs-"
	      // is a convention used in Video.js.
	      className: 'vjs-bezel-text-wrapper'
	    });
	  };

	  return BezelTextWrapper;
	}(Component);

	videojs__default['default'].registerComponent('BezelTextWrapper', BezelTextWrapper);
	/**
	 * Bezel
	 */

	var Bezel = /*#__PURE__*/function (_Component3) {
	  inheritsLoose(Bezel, _Component3);

	  // The constructor of a component receives two arguments: the
	  // player it will be associated with and an object of options.
	  function Bezel(player, options) {
	    var _this2;

	    if (options === void 0) {
	      options = {};
	    }

	    // It is important to invoke the superclass before anything else,
	    // to get all the features of components out of the box!
	    _this2 = _Component3.call(this, player, options) || this;
	    _this2.hideDebounce = debounce(_this2.hide, 500);

	    _this2.addChild('BezelTextWrapper');

	    if (options.text) {
	      _this2.updateTextContent(options.text);
	    }

	    return _this2;
	  } // The `createEl` function of a component creates its DOM element.


	  var _proto3 = Bezel.prototype;

	  _proto3.createEl = function createEl() {
	    return videojs__default['default'].dom.createEl('div', {
	      // Prefixing classes of elements within a player with "vjs-"
	      // is a convention used in Video.js.
	      className: 'vjs-bezel vjs-hidden'
	    });
	  };

	  _proto3.updateTextContent = function updateTextContent(text) {
	    if (typeof text !== 'string') {
	      return;
	    }

	    var bezelText = this.getChild('BezelTextWrapper').getChild('BezelText');
	    videojs__default['default'].dom.emptyEl(bezelText.el());
	    videojs__default['default'].dom.appendContent(bezelText.el(), text);
	  };

	  _proto3.display = function display(text) {
	    if (typeof text !== 'string') {
	      return;
	    }

	    var fixedText = text.trim();

	    if (fixedText === '') {
	      return;
	    }

	    this.updateTextContent(fixedText);
	    this.show();
	    this.hideDebounce();
	  };

	  return Bezel;
	}(Component);

	videojs__default['default'].registerComponent('Bezel', Bezel);

	var bezel = function bezel(player) {
	  player.addChild('Bezel', {
	    text: 'Loaded'
	  });
	};

	var dashHlsBitrateSwitcher = function dashHlsBitrateSwitcher(player) {
	  if (player.usingPlugin('dashHlsBitrateSwitcher')) {
	    // https://github.com/samueleastdev/videojs-dash-hls-bitrate-switcher/blob/master/src/plugin.js#L54-L68
	    player.one('loadstart', function () {
	      player.one(videojs__default['default'].browser.IS_IOS ? 'canplaythrough' : 'loadedmetadata', function () {
	        var RatesButton = player.getChild('controlBar').getChild('RatesButton');

	        if (!RatesButton) {
	          return;
	        }

	        RatesButton.controlText('Bitrate');
	      });
	    });
	  }
	};

	var mobileUi = function mobileUi(player) {
	  if (player.hasPlugin('mobileUi') && !player.usingPlugin('mobileUi')) {
	    player.mobileUi();
	  }
	};

	var getDuration = function getDuration(player) {
	  return player.liveTracker.isLive() ? player.liveTracker.liveCurrentTime() : player.duration();
	};

	var customKeys = {
	  /**
	   * https://github.com/ctd1500/videojs-hotkeys/issues/73
	   */
	  customMediaPlayPauseKey: {
	    key: function key(e) {
	      return e.key === 'MediaPlayPause';
	    },
	    handler: function handler(player, options, e) {
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
	    key: function key(e) {
	      return e.key === 'k';
	    },
	    handler: function handler(player, options, e) {
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
	    key: function key(e) {
	      return e.key === 'j' || e.key === 'l';
	    },
	    handler: function handler(player, options, e) {
	      var seekStepTime = 10;
	      var lastTime = player.currentTime();

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
	    key: function key(e) {
	      return e.key === 'Home' || e.key === 'End';
	    },
	    handler: function handler(player, options, e) {
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
	    key: function key(e) {
	      return e.key === ',' || e.key === '.';
	    },
	    handler: function handler(player, options, e) {
	      if (player.paused()) {
	        var frameTime = 1 / player.fps();

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
	    key: function key(e) {
	      return e.key === '<' || e.key === '>';
	    },
	    handler: function handler(player, options, e) {
	      if (e.key === '<') {
	        player.getChild('Bezel').display(player.playbackRateGoto.get().prev() + "x");
	        player.playbackRateGoto.prev();
	      } else {
	        player.getChild('Bezel').display(player.playbackRateGoto.get().next() + "x");
	        player.playbackRateGoto.next();
	      }
	    }
	  },

	  /**
	   * `c`    open/close
	   */
	  subtitlesKey: {
	    key: function key(e) {
	      return e.key === 'c';
	    },
	    handler: function handler(player, options, e) {
	      if (player.subtitles.currentsTextTrack().length === 0) {
	        return;
	      }

	      if (player.subtitles.active() < 0) {
	        // do open
	        player.subtitles.quickOpen();
	        player.getChild('Bezel').display(player.localize(player.subtitles.activeTextTrack().label) + " " + player.localize('Subtitles On'));
	      } else {
	        // do close
	        player.subtitles.close();
	        player.getChild('Bezel').display("" + player.localize('Subtitles Off'));
	      }
	    }
	  },

	  /**
	   * `0-9`    n%
	   */
	  numbersKey: {
	    key: function key(event) {
	      return event.which > 47 && event.which < 59 || event.which > 95 && event.which < 106;
	    },
	    handler: function handler(player, options, event) {
	      // Do not handle if enableModifiersForNumbers set to false and keys are Ctrl, Cmd or Alt
	      if (options.enableModifiersForNumbers || !(event.metaKey || event.ctrlKey || event.altKey)) {
	        var sub = 48;

	        if (event.which > 95) {
	          sub = 96;
	        }

	        var number = event.which - sub;
	        var lastTime = player.currentTime();
	        player.currentTime(getDuration(player) * number * 0.1);

	        if (lastTime === getDuration(player)) {
	          player.play();
	        }
	      }
	    }
	  }
	};

	var hotkeys = function hotkeys(player) {
	  if (player.hasPlugin('hotkeys') && !player.usingPlugin('hotkeys')) {
	    player.hotkeys({
	      volumeStep: 0.05,
	      // seekStep: 5,
	      enableMute: true,
	      enableFullscreen: true,
	      enableNumbers: false,
	      enableVolumeScroll: true,
	      enableHoverScroll: true,
	      playPauseKey: function playPauseKey(e) {
	        return e.key === ' ';
	      },
	      seekStep: function seekStep(e) {
	        if (e.ctrlKey && e.shiftKey) {
	          return 5 * 60;
	        } else if (e.ctrlKey) {
	          return 60;
	        } else if (e.altKey) {
	          return 1;
	        }

	        return 5;
	      },
	      fullscreenKey: function fullscreenKey(e) {
	        return e.key === 'f' || e.ctrlKey && e.key === 'Enter';
	      },
	      volumeUpKey: function volumeUpKey(e) {
	        if (e.key !== 'ArrowUp') {
	          return false;
	        }

	        var calc = Math.min(1, player.volume() + this.volumeStep) * 100;
	        player.getChild('Bezel').display(calc.toFixed(0) + "%");
	        return true;
	      },
	      volumeDownKey: function volumeDownKey(e) {
	        if (e.key !== 'ArrowDown') {
	          return false;
	        }

	        var calc = Math.max(0, player.volume() - this.volumeStep) * 100;
	        player.getChild('Bezel').display(calc.toFixed(0) + "%");
	        return true;
	      },
	      muteKey: function muteKey(e) {
	        if (e.key !== 'm') {
	          return false;
	        }

	        var calc = player.volume() * 100;

	        if (!player.muted()) {
	          calc = 0;
	        }

	        player.getChild('Bezel').display(calc.toFixed(0) + "%");
	        return true;
	      },
	      customKeys: customKeys
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
	    sizeProperty(_this.player);
	    fps(_this.player);
	    subtitles(_this.player);
	    playbackRateGoto(_this.player);
	    bezel(_this.player); // plugins

	    dashHlsBitrateSwitcher(_this.player); // default enable plugins

	    mobileUi(_this.player);
	    hotkeys(_this.player);

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
