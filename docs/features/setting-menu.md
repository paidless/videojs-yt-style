# Setting Menu

## Demo

### Config

```js run
window.playerOptions = {
  html5: {
    nativeCaptions: false,
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
        "AudioTrackButton", // highlight-line
        "ChaptersButton", // highlight-line
        "SubsCapsButton", // highlight-line
        "PlaybackRateMenuButton", // highlight-line
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

### Example
```html inject
<video id="videojs-yt-style-setting-menu-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8" type="application/x-mpegURL">
</video>
```

<br/>

```js run
window.settingMenuPlayer = videojs('videojs-yt-style-setting-menu-player', playerOptions);
window.settingMenuPlayer_ytStyle = settingMenuPlayer.ytStyle(); // highlight-line
window.settingMenuPlayer_mobileUi = settingMenuPlayer.mobileUi();
```
