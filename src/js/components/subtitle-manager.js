import { isLangMatched } from '../utils/lang';
import window from 'global/window';

// https://github.com/Pong420/videojs-plus/blob/master/source/Plugin/Subtitles/Subtitles.js

/**
 * Manager subtitle operate
 */
class SubtitleManager {

  /**
   * Create a SubtitleManager instance.
   *
   * @param {Player} player
   *        A Video.js Player instance.
   *
   * @param {Object} options
   *        An optional options object.
   */
  constructor(player, options = {}) {
    this.player = player;

    // Save last showing index of textTrack.
    this.lastShowing_ = null;

    const handleSubtitleChangeEvent = () => {
      const currentActive = this.active();

      this.lastShowing(currentActive);

      const currentTextTrack = this.getTextTrack(currentActive);

      player.trigger('subtitlechange', {
        index: currentActive,
        label: currentTextTrack ? currentTextTrack.label : ''
      });
    };

    player.textTracks().on('change', handleSubtitleChangeEvent);
    player.on('dispose', () => {
      player.textTracks().off('change', handleSubtitleChangeEvent);
    });
  }

  /**
   * Load subtitles from player options when the player is ready
   *
   * @function
   * @param     {Array} subtitlesOptions
   *            Subtitles from player options
   *
   * @return    {Object}
   *            Return subtitle manager instance
   */
  load(subtitlesOptions = []) {
    const { player } = this;

    if (subtitlesOptions && subtitlesOptions.length) {
      this.removeAll();

      let index = -1;
      const trackEls = [];
      const subtitles = subtitlesOptions.map((optionItem, optionIndex) => {
        const subtitle = Object.assign({}, optionItem);
        const manualCleanup = true;

        // set default to false, otherwise subtitle will reset to the default subtitle
        // when user switch quality with quality plugin
        const trackEl = player.addRemoteTextTrack(
          Object.assign({}, subtitle, { default: false }),
          manualCleanup
        );

        trackEl.track.mode = 'hidden';

        trackEls.push(trackEl);

        if (index === -1 && subtitle.default === true) {
          index = optionIndex;
        } else {
          subtitle.default = false;
        }

        return subtitle;
      });

      if (index !== -1) {
        this.flag = subtitles[index].label;
        this.track = trackEls[index].track;
        this.track.mode = 'showing';
      }

      player.trigger('subtitles', subtitles);
    }

    return this;
  }

  /**
   * Remove all subtitle text tracks
   *
   * @function
   * @return    {Object}
   *            Return subtitle manager instance
   */
  removeAll() {
    this.allTextTracks().forEach(track => {
      this.player.removeRemoteTextTrack(track);
    });

    return this;
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
   * Get all subtitle text tracks.
   *
   * @function
   * @return    {Array}
   *            Return a text track list.
   */
  allTextTracks() {
    const textTrackList = [];
    const textTracks = this.player.textTracks();
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
    const allTextTrack = this.allTextTracks();

    // Check default in `allTextTrack`.
    const defaultIndex = allTextTrack.findIndex(textTrack => textTrack.default === true);

    if (defaultIndex !== -1) {
      return defaultIndex;
    }

    // Check user browser preferred language.
    const defaultTextTrack = allTextTrack[defaultIndex];

    if (defaultTextTrack && isLangMatched(defaultTextTrack.language, window.navigator.language)) {
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

    const get = this.allTextTracks()[index];

    if (!get) {
      return;
    }
    return get;
  }

  /**
   * Get active `textTrack` index.
   *
   * @function
   * @return    {number}
   *            Return active `textTrack` index.
   */
  active() {
    let currentIndex = -1;

    for (const [index, textTrack] of this.allTextTracks().entries()) {
      if (textTrack.mode === 'showing') {
        currentIndex = index;
        break;
      }
    }

    return currentIndex;
  }

  /**
   * Get active `textTrack`.
   *
   * @function
   * @return    {TextTrack}
   *            Return active `TextTrack`.
   */
  activeTextTrack() {
    return this.getTextTrack(this.active());
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
   * Close the subtitle.
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
   * Quick to Open the subtitle (auto selected the subtitle).
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

export default SubtitleManager;
