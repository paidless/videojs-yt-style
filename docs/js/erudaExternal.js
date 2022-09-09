/**
 * Eruda External
 */

eruda.init();

window.addEventListener('DOMContentLoaded', function () {
  eruda.add(erudaFps);
  eruda.add(erudaFeatures);
  eruda.add(erudaMemory);
  eruda.add(erudaCode);
  eruda.add(erudaDom);
  eruda.add(erudaOrientation);
  eruda.add(erudaTouches);

  (function (window) {
    const clickToOpen = (style) => {
      return style === 'height: 80%; display: block;' || style === 'height: 80%; opacity: 0; display: block;';
    }

    const clickToClose = (style) => {
      return style === 'height: 80%; display: block; opacity: 0;';
    }

    const touchToOpen = (style) => {
      return style === 'height: 80%;' || style === 'height: 80%; opacity: 0; display: none;';
    }

    const touchToClose = (style) => {
      return style === 'height: 80%; display: block; opacity: 1;';
    }

    const html = document.querySelector('html');
    const openDevtoolsButton = eruda._$el.find('.eruda-entry-btn');

    openDevtoolsButton.eq(0).on('click', () => {
      const style = eruda._$el.find('.eruda-dev-tools').eq(0).attr('style');

      if (clickToOpen(style)) {
        html.classList.add('open-devtools');
        return;
      }

      if (clickToClose(style)) {
        html.classList.remove('open-devtools');
        return;
      }
    });
    touch(openDevtoolsButton.get(0), () => {
      const style = eruda._$el.find('.eruda-dev-tools').eq(0).attr('style');

      if (touchToOpen(style)) {
        html.classList.add('open-devtools');
        return;
      }
      if (touchToClose(style)) {
        html.classList.remove('open-devtools');
        return;
      }
    });
  }(window));

  (function (window) {
    const styleText = `
    html.open-devtools,
    html.open-devtools body {
      overflow-y: auto;
    }

    html.open-devtools body {
      height: 20vh;
    }
    `;

    const shadowStyleText = `
    .eruda-console-container .eruda-js-input textarea {
      overflow: hidden;
    }
    `

    const style = document.createElement('style');

    style.textContent = styleText;
    document.head.appendChild(style);

    const shadowStyle = document.createElement('style');

    shadowStyle.textContent = shadowStyleText;
    eruda._$el.get(0).insertAdjacentElement('afterend', shadowStyle);
  }(window));
});
