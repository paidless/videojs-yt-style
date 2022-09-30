const getDurationCorrectly = (player) => {
  player.getDuration = function getDuration() {
    return this.liveTracker.isLive() ? this.liveTracker.liveCurrentTime() : this.duration();
  };
};

export default getDurationCorrectly;
