import videojs from 'video.js';

const Component = videojs.getComponent('Component');

class ProgressBarPadding extends Component {

  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor(player, options = {}) {

    // It is important to invoke the superclass before anything else,
    // to get all the features of components out of the box!
    super(player, options);
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    return videojs.dom.createEl('div', {

      // Prefixing classes of elements within a player with "vjs-"
      // is a convention used in Video.js.
      className: 'vjs-progress-bar-padding'
    });
  }
}

videojs.registerComponent('ProgressBarPadding', ProgressBarPadding);
