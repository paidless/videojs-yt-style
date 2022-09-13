import videojs from 'video.js';

const dashHlsBitrateSwitcher = (player) => {
  if (player.usingPlugin('dashHlsBitrateSwitcher')) {
    // https://github.com/samueleastdev/videojs-dash-hls-bitrate-switcher/blob/master/src/plugin.js#L54-L68
    player.one('loadstart', () => {
      player.one(((videojs.browser.IS_IOS) ? 'canplaythrough' : 'loadedmetadata'), () => {
        player.getChild('controlBar').getChild('RatesButton').controlText('Bitrate');
      });
    });
  }
};

export default dashHlsBitrateSwitcher;
