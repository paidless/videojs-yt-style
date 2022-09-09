function touch(element, func) {
  let cancel = false;

  const touchstart = () => {
    cancel = false;
  }
  const touchcancel = () => {
    if (cancel) return;
    cancel = true;
  }
  const touchmove = () => {
    if (cancel) return;
    cancel = true;
  }
  const touchend = (event) => {
    if (!cancel) {
      func(event, destroy);
    }
    cancel = false;
  }
  const destroy = () => {
    element.removeEventListener('touchstart', touchstart);
    element.removeEventListener('touchcancel', touchcancel);
    element.removeEventListener('touchmove', touchmove);
    element.removeEventListener('touchend', touchend);
  }
  element.addEventListener('touchstart', touchstart);
  element.addEventListener('touchcancel', touchcancel);
  element.addEventListener('touchmove', touchmove);
  element.addEventListener('touchend', touchend);
}
