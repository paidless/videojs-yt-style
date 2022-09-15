import SubtitleManager from '../components/subtitle-manager';

const subtitles = (player) => {
  player.subtitles = new SubtitleManager(player);
};

export default subtitles;
