import videojs from 'video.js';
import { autoDisposeEvent } from '../utils/event';

const Button = videojs.getComponent('Button');

/**
 * Full window toggle button
 */
class FullwindowToggle extends Button {

  /**
   * Create a Full window toggle button instance.
   *
   * @param     {Player} player
   *            A Video.js Player instance.
   *
   * @param     {Object} [options]
   *            An optional options object.
   */
  constructor(player, options = {}) {
    super(player, options);

    this.updateButtonState();

    const autoEvent = this.autoEvent = autoDisposeEvent(player, this);

    autoEvent(player, 'enterFullWindow', this.updateButtonState);
    autoEvent(player, 'exitFullWindow', this.updateButtonState);
  }

  /**
   * Set button css class.
   *
   * @return    {string}
   *            Return css class.
   */
  buildCSSClass() {
    return `vjs-fullwindow-control ${super.buildCSSClass()}`;
  }

  /**
   * Button click handle.
   *
   * @param     {Object} [event]
   *            Event data.
   */
  handleClick(event) {
    // console.log('Hi');
    if (!this.player_.isFullWindow) {
      this.player_.enterFullWindow();
    } else {
      this.player_.exitFullWindow();
    }

    this.updateButtonState();
  }

  /**
   * Button state update.
   */
  updateButtonState() {
    if (!this.player_.isFullWindow) {
      this.controlText('Fullwindow');
    } else {
      this.controlText('Exit Fullwindow');
    }
  }
}

videojs.registerComponent('FullwindowToggle', FullwindowToggle);
export default FullwindowToggle;
