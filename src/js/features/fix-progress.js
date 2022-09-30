import videojs from 'video.js';

// Fix problem: https://github.com/videojs/video.js/issues/4460
// Code from: https://github.com/Pong420/videojs-plus/blob/ca74ddceb696ee53fdf934391ca9113e04e93a91/source/Components/ControlBar/Progress/Progress.js

const SeekBar = videojs.getComponent('SeekBar');

SeekBar.prototype.getPercent = function getPercent() {
  const time = this.player_.currentTime();
  const percent = time / this.player_.getDuration();

  return percent >= 1 ? 1 : percent;
};

SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
  const player = this.player_;

  // if (!videojs.dom.isSingleLeftClick(event) || isAdPlaying(player)) {
  if (!videojs.dom.isSingleLeftClick(event)) {
    return;
  }

  let newTime = this.calculateDistance(event) * player.getDuration();

  if (newTime === player.getDuration()) {
    newTime = newTime - 0.1;
  }

  player.currentTime(newTime);

  this.update();
};
