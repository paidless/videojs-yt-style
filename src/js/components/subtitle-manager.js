import videojs from 'video.js';

import { isLangMatched } from '../utils/lang';
import window from 'global/window';

const Component = videojs.getComponent('Component');

// https://github.com/Pong420/videojs-plus/blob/master/source/Plugin/Subtitles/Subtitles.js

/**
 * Manager subtitle operate
 */
class SubtitleManager extends Component {

  /**
   * Create a SubtitleManager instance
   *
   * @param {Player} player
   *        A Video.js Player instance
   *
   * @param {Object} options
   *        An optional options object.
   */
  constructor(player, options = {}) {
    super(player, options);

    // Save last showing index of textTrack.
    this.lastShowing_ = null;

    const handleSubtitleChangeEvent = () => {
      this.lastShowing(this.active());
    };

    player.textTracks().on('change', handleSubtitleChangeEvent);
    player.on('dispose', () => {
      player.textTracks().off('change', handleSubtitleChangeEvent);
    });
  }

  /**
   * Get last showing or set last showing.
   *
   * @function
   * @param     {number} [index]
   *            Input a index of text track if you need to update the last showing.
   *
   * @return    {number}
   *            Return a index of last showing text track.
   */
  lastShowing(index = undefined) {
    if (typeof index !== 'number' || index < 0) {
      return this.lastShowing_;
    }

    this.lastShowing_ = index;

    return index;
  }

  /**
   * Get all subtitles
   *
   * @function
   * @return    {Array}
   *            Return a text track list
   */
  currentsTextTrack() {
    const textTrackList = [];
    const textTracks = this.player_.textTracks();
    let currentTrack;

    for (let index = 0; index < textTracks.length; index++) {
      currentTrack = textTracks[index];
      if (currentTrack.kind === 'subtitles') {
        textTrackList.push(currentTrack);
      }
    }
    return textTrackList;
  }

  /**
   * Get default text track index.
   *
   * @function
   * @return    {number}
   *            Return default text track index.
   */
  default() {
    const allTextTrack = this.currentsTextTrack();

    // Check default in `allTextTrack`.
    const defaultIndex = allTextTrack.findIndex(textTrack => textTrack.default === true);

    if (defaultIndex !== -1) {
      return defaultIndex;
    }

    // Check user browser preferred language.
    const defaultTextTrack = allTextTrack[defaultIndex];

    if (isLangMatched(defaultTextTrack.language, window.navigator.language)) {
      return defaultIndex;
    }

    // Check user browser all selected language.
    for (const [index, textTrack] of allTextTrack.entries()) {
      for (const navLang of window.navigator.languages) {
        if (isLangMatched(textTrack.language, navLang)) {
          return index;
        }
      }
    }

    // Fail back.
    return -1;
  }

  /**
   * Get `TextTrack` instance with index.
   *
   * @function
   * @param     {number} index
   *            Need to get the index of the text track.
   *
   * @return    {TextTrack}
   *            Return the TextTrack instance.
   */
  getTextTrack(index) {
    if (index < 0) {
      return;
    }

    const get = this.currentsTextTrack()[index];

    if (!get) {
      return;
    }
    return get;
  }

  /**
   * Get active textTrack index
   *
   * @function
   * @return    {number}
   *            Return active textTrack index
   */
  active() {
    let currentIndex = -1;

    for (const [index, textTrack] of this.currentsTextTrack().entries()) {
      if (textTrack.mode === 'showing') {
        currentIndex = index;
        break;
      }
    }

    return currentIndex;
  }

  /**
   * Pick the subtitle with index.
   *
   * @function
   * @param     {number} index
   *            Need to pick the index of the text track.
   *
   * @return    {TextTrack}
   *            Return a `TextTrack` instance.
   */
  pick(index) {
    if (typeof index !== 'number') {
      return;
    }

    if (index < 0) {
      return this.close();
    }

    const choose = this.getTextTrack(index);

    if (!choose) {
      return;
    }

    choose.mode = 'showing';

    return choose;
  }

  /**
   * Close the subtitle
   *
   * @function
   * @return    {TextTrack}
   *            Return a closed `TextTrack` instance.
   */
  close() {
    const active = this.getTextTrack(this.active());

    if (!active) {
      return;
    }
    active.mode = 'disabled';
    this.lastShowing(active);
    return active;
  }

  /**
   * Quick to Open the subtitle (auto selected the subtitle)
   *
   * @function
   * @return    {TextTrack}
   *            Return the selected `TextTrack` instance.
   */
  quickOpen() {
    // Check last showing.
    const last = this.lastShowing();

    if (typeof last === 'number') {
      return this.pick(last);
    }

    // Check default.
    const defaultIndex = this.default();

    if (defaultIndex !== -1) {
      return this.pick(defaultIndex);
    }
  }
}

videojs.registerComponent('SubtitleManager', SubtitleManager);
export default SubtitleManager;
