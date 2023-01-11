import SubtitleManager from '../components/subtitle-manager';

const subtitles = (player) => {
  player.subtitles = new SubtitleManager(player);

  player.ready(() => {
    const subtitlesOptions = player.options_.subtitles;

    if (subtitlesOptions && subtitlesOptions.length) {
      player.subtitles.load(subtitlesOptions);
    }
  });
};

export default subtitles;
