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
    const shadowStyleText = `
    .eruda-console-container .eruda-js-input textarea {
      overflow: hidden;
    }
    `

    const shadowStyle = document.createElement('style');

    shadowStyle.textContent = shadowStyleText;
    eruda._$el.get(0).insertAdjacentElement('afterend', shadowStyle);
  }(window));
});
