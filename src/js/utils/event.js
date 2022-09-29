export const autoDisposeEvent = (player, context) => {
  return function(target, name, func) {
    const args = arguments;

    const handle = () => {
      func.apply(context, args);
    };

    target.on(name, handle);
    player.on('dispose', () => {
      target.off(name, handle);
    });
  };
};
