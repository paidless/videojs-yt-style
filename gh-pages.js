const dependFiles = require('./depend-files');
const ghpages = require('gh-pages');

ghpages.publish(
  './',
  {
    src: [
      'docs/**/*',
      'dist/**/*',
      '.nojekyll',
      ...dependFiles,
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
