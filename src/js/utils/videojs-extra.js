export const getDuration = (player) => {
  return player.liveTracker.isLive() ? player.liveTracker.liveCurrentTime() : player.duration();
};
