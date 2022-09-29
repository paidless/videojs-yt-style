# Setting Menu

## Demo

### Config

```js run
window.playerOptions = {
  html5: {
    vhs: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false
  },
  plugins: {
    dashHlsBitrateSwitcher: {
      support: "both",
    },
    settingsMenu: { // highlight-line
      items: [ // highlight-line
        "AudioTrackButton", // highlight-line
        "ChaptersButton", // highlight-line
        "SubsCapsButton", // highlight-line
        "PlaybackRateMenuButton", // highlight-line
        "RatesButton", // highlight-line
      ], // highlight-line
      languages: { // highlight-line
        settings: "Settings", // highlight-line
        loading: "Loading", // highlight-line
        back: "Back", // highlight-line
        captions_off: "Captions Off", // highlight-line
        default_audio: "Default Audio", // highlight-line
        audio: "Audio", // highlight-line
        subtitles: "Subtitles", // highlight-line
        chapters: "Chapters", // highlight-line
        speed: "Speed", // highlight-line
        quality: "Quality", // highlight-line
      }, // highlight-line
    }, // highlight-line
  },
  liveui: true,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  nativeControlsForTouch: false,
  noUITitleAttributes: true,
  keepTimeTooltipInSeekBar: true,
  persistTextTrackSettings: true,
};
```

### Example
```html inject
<video id="videojs-yt-style-settings-menu-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8" type="application/x-mpegURL">
</video>
```

<br/>

```js run
window.player = videojs(document.querySelector('#videojs-yt-style-settings-menu-player'), playerOptions);
window.player_ytStyle = player.ytStyle(); // highlight-line
```
