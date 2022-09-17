const mobileUi = (player) => {
  if (player.hasPlugin('mobileUi') && !player.usingPlugin('mobileUi')) {
    player.mobileUi();
  }
};

export default mobileUi;
