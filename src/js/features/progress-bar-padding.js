import '../element-components/progress-bar-padding';

const progressBarPadding = (player) => {
  player.getChild('controlBar').getChild('progressControl').getChild('seekBar').addChild('ProgressBarPadding');
};

export default progressBarPadding;
