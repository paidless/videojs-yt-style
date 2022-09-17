import PlaybackRateGoto from '../components/playback-rate-goto';

const playbackRateGoto = (player) => {
  player.playbackRateGoto = new PlaybackRateGoto(player);
};

export default playbackRateGoto;
