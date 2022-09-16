/**
 * List - can loop array
 */
class List {

  /**
   * Create a List instance.
   *
   * @param     {Array} array
   *            Init array.
   *
   * @param     {number} [startIndex]
   *            Set start index.
   */
  constructor(array, startIndex) {
    this.values = array.slice(0);
    this.index_ = startIndex || 0;
    this.loop_ = true;
  }

  /**
   * Get or set the index.
   *
   * @function
   * @param     {number} [value]
   *            Set the current index.
   *
   * @return    {number}
   *            Current index.
   */
  index(value) {
    if (typeof value !== 'undefined') {
      this.index_ = Math.max(0, Math.min(value, this.values.length - 1));
    } else {
      return this.index_;
    }
  }

  /**
   * Get or set is not loop the array.
   *
   * @function
   * @param     {boolean} [value]
   *            Set is not loop the array.
   *
   * @return    {boolean}
   *            Is not loop the array.
   */
  loop(value) {
    if (typeof value !== 'undefined') {
      this.loop_ = !!value;
    } else {
      return this.loop_;
    }
  }

  /**
   * Calculate the loop index.
   *
   * @function
   * @param     {number} steps
   *            Step number of the index.
   *
   * @return    {number}
   *            Calculated index.
   */
  calc(steps) {
    const newIndex = this.index_ + steps;
    const length = this.values.length;

    return this.loop_ ?
      (length + newIndex) % length :
      Math.max(0, Math.min(newIndex, length - 1));
  }

  /**
   * Set and get array element with step.
   *
   * @function
   * @param     {number} steps
   *            step number of the index.
   *
   * @return    {*}
   *            Return specify array element.
   */
  step(steps) {
    this.index_ = this.calc(steps);

    return this.values[this.index_];
  }

  /**
   * Get current array element.
   *
   * @function
   * @return    {*}
   *            Return current array element.
   */
  current() {
    return this.values[this.index_];
  }

  /**
   * Set and get next array element.
   *
   * @function
   * @return    {*}
   *            Return next array element.
   */
  next() {
    return this.step(1);
  }

  /**
   * Set and get prev array element.
   *
   * @function
   * @return    {*}
   *            Return prev array element.
   */
  prev() {
    return this.step(-1);
  }

  /**
   * Check current is the end of array.
   *
   * @function
   * @return    {boolean}
   *            Return the check result.
   */
  ended() {
    return this.index_ === this.values.length - 1;
  }
}

export default List;
