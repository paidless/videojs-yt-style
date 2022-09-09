const ghpages = require('gh-pages');

ghpages.publish(
  './',
  {
    src: [
      'docs/**/*',
      'dist/**/*',
      '.nojekyll',
      'node_modules/video.js/dist/*',
      'node_modules/videojs-contrib-quality-levels/dist/*',
      'node_modules/@samueleastdev/videojs-dash-hls-bitrate-switcher/dist/*',
      'node_modules/@samueleastdev/videojs-settings-menu/dist/*',
      'node_modules/videojs-mobile-ui/dist/*',
      'node_modules/eruda*/*'
    ],
    dotfiles: true,
    repo: 'https://github.com/paidless/videojs-yt-style.git'
  },
  function(err) {
    // eslint-disable-next-line
    console.log(err);
  }
);
