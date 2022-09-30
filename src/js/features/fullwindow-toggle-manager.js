import document from 'global/document';

import '../element-components/fullwindow-toggle';
import { autoDisposeEvent } from '../utils/event';
import { silencePromise } from '../utils/promise';

const fullwindowToggleManager = (player) => {
  /**
   * Patch the exit full screen helper
   */
  player.exitFullscreenHelper_ = function exitFullscreenHelper_() {
    if (this.isFullWindow) {
      return this.exitFullWindow();
    }

    if (this.fsApi_.requestFullscreen) {
      const promise = document[this.fsApi_.exitFullscreen]();

      if (promise) {
        // we're splitting the promise here, so, we want to catch the
        // potential error so that this chain doesn't have unhandled errors
        silencePromise(promise.then(function() {
          return this.isFullscreen(false);
        }));
      }

      return promise;
    } else if (this.tech_.supportsFullScreen() && !this.options_.preferFullWindow === true) {
      this.techCall_('exitFullScreen');
    } else {
      this.exitFullWindow();
    }
  };

  player.ready(() => {
    if (!player.options_.alwaysEnableFullWindow || player.isOnlyFullWindow()) {
      return;
    }

    const autoEvent = autoDisposeEvent(player, player);

    const controlBar = player.getChild('controlBar');
    const fullscreenToggle = controlBar.getChild('FullscreenToggle');

    controlBar.addChild('FullwindowToggle', {}, controlBar.children_.indexOf(fullscreenToggle));

    const fullwindowToggle = controlBar.getChild('FullwindowToggle');

    autoEvent(player, 'fullscreenchange', () => {
      if (player.isFullscreen()) {
        fullwindowToggle.hide();
      } else {
        fullwindowToggle.show();
      }
    });

    autoEvent(player, 'enterFullWindow', () => {
      fullwindowToggle.hide();
      fullscreenToggle.controlText('Exit Fullwindow');
    });

    autoEvent(player, 'exitFullWindow', () => {
      fullwindowToggle.show();
      fullscreenToggle.controlText('Fullscreen');
    });
  });
};

export default fullwindowToggleManager;
