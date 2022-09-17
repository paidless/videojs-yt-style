import videojs from 'video.js';

import { debounce } from '../utils/fn';

const Component = videojs.getComponent('Component');

/**
 * Bezel text
 */
class BezelText extends Component {

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
      className: 'vjs-bezel-text'
    });
  }
}

videojs.registerComponent('BezelText', BezelText);

/**
 * Bezel text wrapper
 */
class BezelTextWrapper extends Component {

  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor(player, options = {}) {

    // It is important to invoke the superclass before anything else,
    // to get all the features of components out of the box!
    super(player, options);

    this.addChild('BezelText');
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    return videojs.dom.createEl('div', {

      // Prefixing classes of elements within a player with "vjs-"
      // is a convention used in Video.js.
      className: 'vjs-bezel-text-wrapper'
    });
  }
}

videojs.registerComponent('BezelTextWrapper', BezelTextWrapper);

/**
 * Bezel
 */
class Bezel extends Component {

  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor(player, options = {}) {

    // It is important to invoke the superclass before anything else,
    // to get all the features of components out of the box!
    super(player, options);

    this.hideDebounce = debounce(this.hide, 500);

    this.addChild('BezelTextWrapper');

    if (options.text) {
      this.updateTextContent(options.text);
    }
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    return videojs.dom.createEl('div', {

      // Prefixing classes of elements within a player with "vjs-"
      // is a convention used in Video.js.
      className: 'vjs-bezel vjs-hidden'
    });
  }

  updateTextContent(text) {
    if (typeof text !== 'string') {
      return;
    }

    const bezelText = this.getChild('BezelTextWrapper').getChild('BezelText');

    videojs.dom.emptyEl(bezelText.el());
    videojs.dom.appendContent(bezelText.el(), text);
  }

  display(text) {
    if (typeof text !== 'string') {
      return;
    }

    this.updateTextContent(text);
    this.show();
    this.hideDebounce();
  }
}

videojs.registerComponent('Bezel', Bezel);
