# videojs-yt-style

**WARNING: Highly early project. The stable version of this project has not been released (Release v1.0.0) and should not be used in production.**

VideoJS Skin like YT.

[Demo](https://paidless.github.io/videojs-yt-style/docs/)

This is a component to connect other supported VideoJS plugins and use to make the VIdeoJS like YT. We also improve some original VideoJS experience.

Connect to other VideoJS Plugin (Checked means support, unchecked means it will be supported in the future):

- [x] [videojs-settings-menu](https://github.com/samueleastdev/videojs-setting-menu) : This is also a very early project, hope the author will continue to maintain it.
- [x] [videojs-dash-hls-bitrate-switcher](https://github.com/samueleastdev/videojs-dash-hls-bitrate-switcher) : Use with videojs-settings-menu.
- [x] [videojs-mobile-ui](https://github.com/mister-ben/videojs-mobile-ui) : Improved mobile experience.
- [x] [videojs-hotkeys](https://github.com/ctd1500/videojs-hotkeys) : Adds more hotkey support to VideoJS.
- [ ] [videojs-vtt-thumbnails](https://github.com/mayeaux/videojs-vtt-thumbnails) : Display the thumbnails in seeking.
- [ ] [videojs-chromecast](https://github.com/silvermine/videojs-chromecast) : Support Chromecast.
- [ ] [videojs-airplay](https://github.com/silvermine/videojs-airplay) : Support AirPlay.

And more (You can tip me on Issues).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Package out from NPM](#package-out-from-npm)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
- [Added Features](#added-features)
  - [Bezel](#bezel)
    - [**Added Component**](#added-component)
    - [**Added Component Method**](#added-component-method)
  - [Fps](#fps)
    - [**Added Player Attributes**](#added-player-attributes)
    - [**Added Player Methods**](#added-player-methods)
    - [**Added Player Events**](#added-player-events)
  - [Keep timetooltip in seekbar](#keep-timetooltip-in-seekbar)
    - [**Added Player Options**](#added-player-options)
  - [Progress bar padding](#progress-bar-padding)
  - [Size property](#size-property)
    - [**Added CSS Variables**](#added-css-variables)
  - [Subtitle Manager](#subtitle-manager)
    - [**Added Player Attributes**](#added-player-attributes-1)
  - [Keep volume](#keep-volume)
  - [Full window mode](#full-window-mode)
    - [**Added Player Options**](#added-player-options-1)
    - [**Added Player Methods**](#added-player-methods-1)
  - [Get duration correctly](#get-duration-correctly)
    - [**Added Player Methods**](#added-player-methods-2)
  - [Fix progress](#fix-progress)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save videojs-yt-style
```

## Package out from NPM

```sh
git clone https://github.com/paidless/videojs-yt-style.git
cd videojs-yt-style
npm install
npm run build-offline
```

Now you can take `build/` out to anywhere.

## Usage

To include videojs-yt-style on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-yt-style.min.js"></script>
<script>
  var player = videojs('my-video');

  player.ytStyle();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-yt-style via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-yt-style');

var player = videojs('my-video');

player.ytStyle();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-yt-style'], function(videojs) {
  var player = videojs('my-video');

  player.ytStyle();
});
```

## Added Features

### Bezel

Show a bezel bar in player.

#### **Added Component**
- `BezelText` : bezel text element
- `BezelTextWrapper` : bezel text wrapper element
- `Bezel` : Control the whole bezel action

#### **Added Component Method**

You can call following method like: `player.getChild('Bezel').something();`.
- `getChild('Bezel').display(string)` : Show specific text 0.5s

### Fps

Add the fps attributes to player.

#### **Added Player Attributes**
- `fps_.fps` (Type: Integer) : evaluated video fps
- `fps._certainty` (Type: Integer) : evaluate certainty

#### **Added Player Methods**
- `fps(value)` (Return type: Integer) : return the evaluated video fps

#### **Added Player Events**
- `fpsupdate` : evaluate fps updated

### Keep timetooltip in seekbar

Add a player option to keep time tooptip in seeb bar.

Original this [PR](https://github.com/videojs/video.js/pull/7913).

#### **Added Player Options**
- `keepTimeTooltipInSeekBar` (Type: Boolean) : Prevents the time tooltip overflow the seek bar

### Progress bar padding

Add a component to progress bar, use it to grow user can hover the progress bar size.

You can use the `.vjs-progress-bar-padding` css class to set the style.

### Size property

Add some css var of player size.

#### **Added CSS Variables**
- `--player-width` (Unit: Pixel) : player width
- `--player-height` (Unit: Pixel) : player height

### Subtitle Manager

A better way to control subtitle.

#### **Added Player Attributes**
- `subtitles` : This is a subtitle manager instance, you can found all method in source `src/js/components/subtitle-manager.js`.

### Keep volume

Keep volume setting in localStorage.

### Full window mode

Include is only full window and fullwindow toggle manager.

#### **Added Player Options**
- `alwaysEnableFullWindow` (Type: Boolean) : Always has are full window button.

#### **Added Player Methods**
- `isOnlyFullWindow()` (Type: Boolean) : Check if only full window is supported.

### Get duration correctly

Add player method to fix live source can not get duration problem.

#### **Added Player Methods**
- `getDuration()` (Type: Number) : Get source duration.

### Fix progress

Fix `VideoJs ProgressBar is slow when dragging with Mouse.` problem: https://github.com/videojs/video.js/issues/4460

Code from: https://github.com/Pong420/videojs-plus/blob/ca74ddceb696ee53fdf934391ca9113e04e93a91/source/Components/ControlBar/Progress/Progress.js

## License

UNLICENSED. Copyright (c) Ami-OS &lt;grizzltty.app@gmail.com&gt;


[videojs]: http://videojs.com/
