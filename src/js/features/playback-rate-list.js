import List from '../utils/list';

const playbackRateGoto = (player) => {
  const getList = () => {
    const list = new List(player.playbackRates());

    list.loop(false);
    list.index(player.playbackRates().indexOf(player.playbackRate()));
    return list;
  };

  player.playbackRateGoto = {
    next: () => {
      const rate = getList().next();

      player.playbackRate(rate);
    },
    prev: () => {
      const rate = getList().prev();

      player.playbackRate(rate);
    }
  };
};

export default playbackRateGoto;
