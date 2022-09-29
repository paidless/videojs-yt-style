<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [videojs-yt-style](#videojs-yt-style)
  - [Demo](#demo)
    - [Config](#config)
    - [Basic Example](#basic-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# videojs-yt-style

VideoJS Skin like YT.

## Demo

### Config

```js run
window.playerOptions = {
  html5: {
    // nativeCaptions: false,
    vhs: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false
  },
  plugins: {
    dashHlsBitrateSwitcher: {
      support: "both",
    }
  },
  liveui: true, // highlight-line
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], // highlight-line
  nativeControlsForTouch: false, // highlight-line
  noUITitleAttributes: true, // highlight-line
  keepTimeTooltipInSeekBar: true, // highlight-line
  persistTextTrackSettings: true, // highlight-line
  preferFullWindow: true,
  alwaysEnableFullWindow: true,
  // techOrder: ["html5"],
  // crossOrigin: "anonymous",
};
```

### Basic Example
```html inject
<video id="videojs-yt-style-basic-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8" type="application/x-mpegURL">
</video>
```

<br/>

```js run
window.player = videojs(document.querySelector('#videojs-yt-style-basic-player'), playerOptions);
window.player_ytStyle = player.ytStyle(); // highlight-line
```
