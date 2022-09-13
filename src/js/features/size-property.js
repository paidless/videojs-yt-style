const sizeProperty = (player) => {
  const resizeHandle = () => {
    const {width, height} = player.currentDimensions();

    player.el().style.setProperty('--player-width', `${width}px`);
    player.el().style.setProperty('--player-height', `${height}px`);
  };

  resizeHandle();
  player.on('playerresize', resizeHandle);
};

export default sizeProperty;
