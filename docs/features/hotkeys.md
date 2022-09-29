# Hotkeys

## keyboard shortcuts

| keyboard shortcuts                         | Function                                                |
| ------------------------------------------ | ------------------------------------------------------- |
| Space bar                                  | Play / Pause in the player.                             |
| "Play" / "Pause" media keys on keyboard    | Play / Pause in the player.                             |
| `k` key                                    | Play / Pause in the player.                             |
| "Stop" media key on keyboard               | Stop play.                                              |
| Left / Right Arrow                         | Reverse or fast forward the video by 5 seconds.         |
| `j` key                                    | Reverse 10 seconds in the player.                       |
| `l` key                                    | Fast forward 10 seconds in the player.                  |
| `,` key                                    | Skip to the next frame when the video is paused.        |
| `.` key                                    | Returns to the previous frame when the video is paused. |
| `>` key                                    | Speed up video playback.                                |
| `<` key                                    | Slow down the video playback speed.                     |
| Alt + Left / Alt + Right                   | Reverse or fast forward the video by 1 second.          |
| Ctrl + Left / Ctrl + Right                 | Reverse or fast forward the video by 1 minute.          |
| Ctrl + Shift + Left / Ctrl + Shift + Right | Reverse or fast forward the video by 5 minutes.         |
| Home / End key                             | Skip to the beginning / end of the video.               |
| Up / Down arrows                           | Turn the volume up / down by 5%.                        |
| Number `1` to `9` keys on jump bar         | Jump to different video playback progress (10% to 90%). |
| Numeric `0` key on jump bar                | Skip to the beginning of the video.                     |
| `f` key                                    | Switch to full screen.                                  |
| `c` key                                    | Open / Close the subtitles.                             |

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
<video id="videojs-yt-style-hotkeys-player" class="video-js vjs-default-skin vjs-fluid" controls>
  <source src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8" type="application/x-mpegURL">
</video>
```

<br/>

```js run
window.player = videojs(document.querySelector('#videojs-yt-style-hotkeys-player'), playerOptions);
window.player_ytStyle = player.ytStyle(); // highlight-line
```
