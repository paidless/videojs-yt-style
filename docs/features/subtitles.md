# Subtitles

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
    settingsMenu: {
      items: [
        // "AudioTrackButton",
        // "ChaptersButton",
        "SubsCapsButton", // highlight-line
        "PlaybackRateMenuButton",
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
  persistTextTrackSettings: true,         // highlight-line
  subtitles: [                            // highlight-line
    {                                     // highlight-line
      kind: 'subtitles',                  // highlight-line
      srclang: 'zh-TW',                   // highlight-line
      label: 'Chinese (Traditional)',     // highlight-line
      src: 'assets/vtt/vtt.zh-tw.txt'     // highlight-line
    },                                    // highlight-line
    {                                     // highlight-line
      default: true,                      // highlight-line
      kind: 'subtitles',                  // highlight-line
      srclang: 'en-US',                   // highlight-line
      label: 'English',                   // highlight-line
      src: 'assets/vtt/vtt.en.txt'        // highlight-line
    }                                     // highlight-line
  ]                                       // highlight-line
};
```

### Example
```html inject
<video id="videojs-yt-style-subtitles-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
</video>
```

<br/>

```js run
window.player = videojs(document.querySelector('#videojs-yt-style-subtitles-player'), playerOptions);
window.player_ytStyle = player.ytStyle(); // highlight-line

['subtitles', 'subtitlechange'].forEach(type => player.on(type, (event, data) => {
  console.log(type, event, data);
}));
```
