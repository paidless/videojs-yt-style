<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [videojs-yt-style](#videojs-yt-style)
  - [Demo](#demo)
    - [Config](#config)
    - [Basic Example](#basic-example)
    - [Live Example](#live-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# videojs-yt-style

VideoJS Skin like YT.

## Demo

### Config

```js run
window.playerOptions = {
  html5: {
    // nativeCaptions: false,
    hls: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false
  },
  plugins: {
    dashHlsBitrateSwitcher: {
      support: "both",
    },
    settingsMenu: {
      items: [
        // "AudioTrackButton",
        // "ChaptersButton",
        // "SubsCapsButton",
        // "PlaybackRateMenuButton",
        "RatesButton",
      ],
      languages: {
        settings: "Settings",
        loading: "Loading",
        back: "Back",
        captions_off: "Captions Off",
        default_audio: "Default Audio",
        audio: "Audio",
        subtitles: "Subtitles",
        chapters: "Chapters",
        speed: "Speed",
        quality: "Quality",
      },
    },
  },
  liveui: true,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  nativeControlsForTouch: false,
  noUITitleAttributes: true,
  keepTimeTooltipInSeekBar: true,
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
window.basicPlayer = videojs(document.querySelector('#videojs-yt-style-basic-player'), playerOptions);
window.basicPlayer_ytStyle = basicPlayer.ytStyle(); // highlight-line
basicPlayer.mobileUi();
```

### Live Example
```html inject
<video id="videojs-yt-style-live-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//storage.googleapis.com/shaka-live-assets/player-source.mpd" type="application/dash+xml">
</video>
```

<br/>

```js run
window.livePlayer = videojs(document.querySelector('#videojs-yt-style-live-player'), playerOptions);
window.livePlayer_ytStyle = livePlayer.ytStyle(); // highlight-line
livePlayer.mobileUi();
```
