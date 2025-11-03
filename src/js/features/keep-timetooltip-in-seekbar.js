import videojs from 'video.js';

const Dom = videojs.dom;

// https://github.com/Ami-OS/video.js/blob/65750e311661e70f170e3652573caacf6f21fcce/src/js/control-bar/progress-control/time-tooltip.js#L54-L133
videojs.getComponent('TimeTooltip').prototype.update = function update(seekBarRect, seekBarPoint, content) {
  const tooltipRect = Dom.findPosition(this.el_);
  const playerRect = Dom.getBoundingClientRect(this.player_.el());
  const seekBarPointPx = seekBarRect.width * seekBarPoint;

  // do nothing if either rect isn't available
  // for example, if the player isn't in the DOM for testing
  if (!playerRect || !tooltipRect) {
    return;
  }

  // This is the space left of the `seekBarPoint` available within the bounds
  // of the player. We calculate any gap between the left edge of the player
  // and the left edge of the `SeekBar` and add the number of pixels in the
  // `SeekBar` before hitting the `seekBarPoint`
  let spaceLeftOfPoint = (seekBarRect.left - playerRect.left) + seekBarPointPx;

  // This is the space right of the `seekBarPoint` available within the bounds
  // of the player. We calculate the number of pixels from the `seekBarPoint`
  // to the right edge of the `SeekBar` and add to that any gap between the
  // right edge of the `SeekBar` and the player.
  let spaceRightOfPoint = (seekBarRect.width - seekBarPointPx) +
    (playerRect.right - seekBarRect.right);

  if (this.options_.playerOptions.keepTimeTooltipInSeekBar) {
    // This is the space right of the `seekBarPoint` in the `SeekBar`
    spaceRightOfPoint = seekBarRect.width - seekBarPointPx;

    // This is the space left of the `seekBarPoint` in the `SeekBar`
    spaceLeftOfPoint = seekBarRect.width - spaceRightOfPoint;
  }

  // This is the number of pixels by which the tooltip will need to be pulled
  // further to the right to center it over the `seekBarPoint`.
  let pullTooltipBy = tooltipRect.width / 2;

  if (this.options_.playerOptions.keepTimeTooltipInSeekBar) {
    // The center of `seekBar`
    const centerPosition = seekBarRect.width / 2;

    // Offset value of the `centerPosition`
    const centerOffsetOfPoint = centerPosition - seekBarPointPx;

    // If `tooltipRect` is greater than `seekBarRect` then center the tooltip,
    // else patch the offset value of the tooltip overflow space.
    if (tooltipRect.width > seekBarRect.width) {
      pullTooltipBy += centerOffsetOfPoint;
    } else if (spaceLeftOfPoint < pullTooltipBy) {
      pullTooltipBy += pullTooltipBy - spaceLeftOfPoint;
    } else if (spaceRightOfPoint < pullTooltipBy) {
      pullTooltipBy -= pullTooltipBy - spaceRightOfPoint;
    }
  } else {
    // Adjust the `pullTooltipBy` distance to the left or right depending on
    // the results of the space calculations above.
    if (spaceLeftOfPoint < pullTooltipBy) {
      pullTooltipBy += pullTooltipBy - spaceLeftOfPoint;
    } else if (spaceRightOfPoint < pullTooltipBy) {
      pullTooltipBy = spaceRightOfPoint;
    }

    // Due to the imprecision of decimal/ratio based calculations and varying
    // rounding behaviors, there are cases where the spacing adjustment is off
    // by a pixel or two. This adds insurance to these calculations.
    if (pullTooltipBy < 0) {
      pullTooltipBy = 0;
    } else if (pullTooltipBy > tooltipRect.width) {
      pullTooltipBy = tooltipRect.width;
    }
  }

  // prevent small width fluctuations within 0.4px from
  // changing the value below.
  // This really helps for live to prevent the play
  // progress time tooltip from jittering
  pullTooltipBy = Math.round(pullTooltipBy);

  this.el_.style.right = `-${pullTooltipBy}px`;
  this.write(content);
};
