# videojs-yt-style

**WARNING: High early project. The stable version of this project has not been released (Release v1.0.0) and should not be used in production.**

VideoJS Skin like YT.

This is a component to connect other supported VideoJS plugins and use to make the VIdeoJS like YT. We also improve some original VideoJS experience.

Connect to other VideoJS Plugin (Checked means support, unchecked means it will be supported in the future):

- [x] [videojs-settings-menu](https://github.com/samueleastdev/videojs-setting-menu): This is also a very early project, hope the author will continue to maintain it.
- [x] [videojs-dash-hls-bitrate-switcher](https://github.com/samueleastdev/videojs-dash-hls-bitrate-switcher): Use with videojs-settings-menu.
- [x] [videojs-mobile-ui](https://github.com/mister-ben/videojs-mobile-ui): Improved mobile experience.
- [ ] [videojs-vtt-thumbnails](https://github.com/mayeaux/videojs-vtt-thumbnails): Display the thumbnails in seeking.

And more (You can tip me on Issues).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save videojs-yt-style
```

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

## License

UNLICENSED. Copyright (c) Ami-OS &lt;grizzltty.app@gmail.com&gt;


[videojs]: http://videojs.com/
