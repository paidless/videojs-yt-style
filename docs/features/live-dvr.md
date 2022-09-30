# Live DVR

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
  },
  liveui: true, // highlight-line
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  nativeControlsForTouch: false,
  noUITitleAttributes: true,
  keepTimeTooltipInSeekBar: true,
  persistTextTrackSettings: true,
};
```

### Example
```html inject
<video id="videojs-yt-style-live-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//storage.googleapis.com/shaka-live-assets/player-source.mpd" type="application/dash+xml">
</video>
```

<br/>

```js run
window.player = videojs(document.querySelector('#videojs-yt-style-live-player'), playerOptions);
window.player_ytStyle = player.ytStyle(); // highlight-line
```
