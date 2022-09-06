/*! @name @samueleastdev/videojs-dash-hls-bitrate-switcher @version 1.0.7 @license Apache-2.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
	typeof define === 'function' && define.amd ? define(['video.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.videojsDashHlsBitrateSwitcher = factory(global.videojs));
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

	var assertThisInitialized = createCommonjsModule(function (module) {
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  module.exports = _assertThisInitialized;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

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

	var version = "1.0.7";

	var MenuItem = videojs__default['default'].getComponent('MenuItem');
	var PlayBackRatesBtn = /*#__PURE__*/function (_MenuItem) {
	  inheritsLoose(PlayBackRatesBtn, _MenuItem);

	  function PlayBackRatesBtn(player, options) {
	    var _this;

	    _this = _MenuItem.call(this, player, options) || this;
	    _this.height = options.height;
	    _this.levels = options.levels;
	    _this.bitrate = options.bitrate;

	    _this.setAttribute('data-bitrate', options.bitrate);

	    return _this;
	  }

	  var _proto = PlayBackRatesBtn.prototype;

	  _proto.handleClick = function handleClick(event) {
	    var _this2 = this;

	    // Add the selected class
	    this.parentComponent_.children_.forEach(function (child) {
	      child.removeClass('vjs-selected');
	    });
	    this.addClass('vjs-selected');
	    this.levels.forEach(function (level) {
	      if (_this2.bitrate === level.bitrate) {
	        level.enabled = true;
	      } else {
	        level.enabled = false;
	      }
	    });
	  };

	  return PlayBackRatesBtn;
	}(MenuItem);
	videojs__default['default'].registerComponent('PlayBackRatesBtn', PlayBackRatesBtn);

	var Plugin = videojs__default['default'].getPlugin('plugin');
	var Component = videojs__default['default'].getComponent('Component');
	var MenuButton = videojs__default['default'].getComponent('MenuButton');

	var defaults = {
	  now: null,
	  then: Date.now(),
	  interval: 1000,
	  frames: 0,
	  delta: null,
	  showInfo: false
	};
	/**
	 * An advanced Video.js plugin. For more information on the API
	 *
	 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
	 */

	var DashHlsBitrateSwitcher = /*#__PURE__*/function (_Plugin) {
	  inheritsLoose(DashHlsBitrateSwitcher, _Plugin);

	  /**
	   * Create a DashHlsBitrateSwitcher plugin instance.
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
	  function DashHlsBitrateSwitcher(player, options) {
	    var _this;

	    _this = _Plugin.call(this, player) || this;

	    var self = assertThisInitialized(_this);

	    _this.options = videojs__default['default'].mergeOptions(defaults, options);

	    _this.player.ready(function () {
	      _this.player.addClass('vjs-dash-hls-bitrate-switcher');

	      if (_this.options.showInfo) {
	        self.buildUi();
	      }
	    });

	    _this.player.on('loadstart', function (_event) {
	      if (this.getChild('controlBar').getChild('RatesButton')) {
	        this.getChild('controlBar').removeChild('RatesButton');
	        self.qualityLevels.off('change');
	      }

	      this.one(videojs__default['default'].browser.IS_IOS ? 'canplaythrough' : 'loadedmetadata', function (_evt) {
	        if (['m3u8', 'mpd'].includes(self.getExtension(this.currentSrc()))) {
	          self.qualityLevels = this.qualityLevels();

	          if (self.qualityLevels.levels_.length > 1) {
	            self.init();
	          }
	        }
	      });
	    });

	    return _this;
	  }

	  var _proto = DashHlsBitrateSwitcher.prototype;

	  _proto.getExtension = function getExtension(url) {
	    return url.split(/[#?]/)[0].split('.').pop().trim();
	  };

	  _proto.sortProperties = function sortProperties(obj) {
	    obj = obj.levels_; // convert object into array

	    var sortable = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        sortable.push(obj[key]);
	      }
	    } // sort items by value


	    sortable.sort(function (a, b) {
	      if (b.hasOwnProperty('height')) {
	        return a.height - b.height;
	      }

	      if (b.hasOwnProperty('bandwidth')) {
	        return a.bandwidth - b.bandwidth;
	      }
	    });
	    return sortable.reverse();
	  };

	  _proto.formatBitrate = function formatBitrate(bits) {
	    var i = -1;
	    var byteUnits = [' kbps', ' Mbps', ' Gbps', ' Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'];

	    do {
	      bits = bits / 1024;
	      i++;
	    } while (bits > 1024);

	    return Math.max(bits, 0.1).toFixed(1) + byteUnits[i];
	  };

	  _proto.formatRendition = function formatRendition(level) {
	    if (level.hasOwnProperty('height')) {
	      if (level.height) {
	        return level.height + "p, " + this.formatBitrate(level.bitrate);
	      }

	      return '';
	    } else {
	      return "" + this.formatBitrate(level.bitrate);
	    }
	  };

	  _proto.init = function init(levels) {
	    var self = this;

	    var RatesButton = /*#__PURE__*/function (_MenuButton) {
	      inheritsLoose(RatesButton, _MenuButton);

	      function RatesButton(player, options) {
	        return _MenuButton.call(this, player, options) || this;
	      }

	      var _proto2 = RatesButton.prototype;

	      _proto2.buildCSSClass = function buildCSSClass() {
	        return "vjs-icon-cog " + _MenuButton.prototype.buildCSSClass.call(this);
	      };

	      _proto2.buildWrapperCSSClass = function buildWrapperCSSClass() {
	        return "vjs-dash-hls-bitrate-switcher-menu " + _MenuButton.prototype.buildWrapperCSSClass.call(this);
	      };

	      _proto2.updateSelected = function updateSelected(item) {
	        this.items.forEach(function (child) {
	          if (item.bitrate === parseInt(child.el().getAttribute('data-bitrate'))) {
	            child.addClass('vjs-selected');
	          } else {
	            child.removeClass('vjs-selected');
	          }
	        });
	      };

	      _proto2.createItems = function createItems(items) {
	        var _this2 = this;

	        if (items === void 0) {
	          items = [];
	        }

	        var qualityLevels = self.sortProperties(self.qualityLevels);
	        qualityLevels.forEach(function (level) {
	          // bitrate need to be set
	          if (level.bitrate) {
	            items.push(new PlayBackRatesBtn(_this2.player(), {
	              levels: qualityLevels,
	              label: "" + self.formatRendition(level),
	              bitrate: level.bitrate,
	              type: level.bitrate
	            }));
	          }
	        });
	        return items;
	      };

	      return RatesButton;
	    }(MenuButton);

	    videojs__default['default'].registerComponent('RatesButton', RatesButton);
	    var comps = self.player.getChild('controlBar').children().length;

	    if (self.player.getChild('controlBar').getChild('fullscreenToggle')) {
	      self.player.getChild('controlBar').addChild('ratesButton', {}, comps - 1);
	    } else {
	      self.player.getChild('controlBar').addChild('ratesButton', {}, comps);
	    } // Listen to change events for when the player selects a new quality level


	    self.qualityLevels.on('change', function () {
	      var rendition = self.qualityLevels[self.qualityLevels.selectedIndex];
	      self.player.getChild('controlBar').getChild('ratesButton').updateSelected(rendition);

	      if (self.player.getChild('streamInfo')) {
	        self.player.getChild('streamInfo').updateTextContent("<div class=\"vjs-stream-info-box\">Dimensions:" + rendition.width + "x" + rendition.height + "<br/>Bitrate:" + self.formatBitrate(rendition.bitrate) + "<br/>Renditions:" + self.qualityLevels.length + "<br/>Type:" + self.player.currentType() + "</div>");
	      }
	    }); // Set initial value

	    var rendition = self.qualityLevels[self.qualityLevels.selectedIndex];
	    self.player.getChild('controlBar').getChild('ratesButton').updateSelected(rendition);

	    if (self.player.getChild('streamInfo')) {
	      self.player.getChild('streamInfo').updateTextContent("<div class=\"vjs-stream-info-box\">Dimensions:" + rendition.width + "x" + rendition.height + "<br/>Bitrate:" + self.formatBitrate(rendition.bitrate) + "<br/>Renditions:" + self.qualityLevels.length + "<br/>Type:" + self.player.currentType() + "</div>");
	    }
	  };

	  _proto.buildUi = function buildUi() {
	    var streamInfo = videojs__default['default'].extend(Component, {
	      constructor: function constructor(player, options) {
	        Component.apply(this, arguments);

	        if (options.text) {
	          this.updateTextContent(options.text);
	        }
	      },
	      createEl: function createEl() {
	        return videojs__default['default'].createEl('div', {
	          className: 'vjs-stream-info',
	          innerHTML: ''
	        });
	      },
	      updateTextContent: function updateTextContent(text) {
	        if (typeof text !== 'string') {
	          text = '';
	        }

	        this.el().innerHTML = text;
	      }
	    });
	    window.videojs = videojs__default['default'];
	    videojs__default['default'].registerComponent('streamInfo', streamInfo);
	    this.player.addChild('streamInfo', {
	      text: ''
	    });
	  };

	  return DashHlsBitrateSwitcher;
	}(Plugin); // Define default values for the plugin's `state` object here.


	DashHlsBitrateSwitcher.defaultState = {}; // Include the version number.

	DashHlsBitrateSwitcher.VERSION = version; // Register the plugin with video.js.

	videojs__default['default'].registerPlugin('dashHlsBitrateSwitcher', DashHlsBitrateSwitcher);

	return DashHlsBitrateSwitcher;

})));
