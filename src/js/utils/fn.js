export const UPDATE_REFRESH_INTERVAL = 30;

/**
 * Creates a debounced function that delays invoking `func` until after `delay`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked.
 *
 * Inspired by lodash and underscore implementations.
 *
 * @function
 * @param    {Function} func
 *           The function to wrap with debounce behavior.
 *
 * @param    {number} delay
 *           The number of milliseconds to wait after the last invocation.
 *
 * @param    {boolean} [immediate]
 *           Whether or not to invoke the function immediately upon creation.
 *
 * @return   {Function}
 *           A debounced function.
 */
const debounce = function(func, delay, immediate = false) { // eslint-disable-line no-unused-vars
  let timer;
  let fastRun = true;
  /* eslint-disable consistent-this */

  return function() {
    const context = this;
    const args = arguments;

    if (fastRun && immediate) {
      func.apply(context, args);
      fastRun = false;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
      fastRun = true;
    }, delay);
  };
  /* eslint-enable consistent-this */
};

/**
 * Wraps the given function, `func`, with a new function that only invokes `func`
 * at most once per every `limit` milliseconds.
 *
 * @function
 * @param    {Function} func
 *           The function to be throttled.
 *
 * @param    {number}   limit
 *           The number of milliseconds by which to throttle.
 *
 * @return   {Function}
 *           Closure return function.
 */
const throttle = (func, limit) => { // eslint-disable-line no-unused-vars
  let lastFunc;
  let lastRan;
  /* eslint-disable consistent-this */

  return function() {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
  /* eslint-enable consistent-this */
};
