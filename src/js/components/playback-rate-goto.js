import List from '../utils/list';

class PlaybackRateGoto {
  constructor(player) {
    this.player = player;
  }

  get() {
    const list = new List(this.player.playbackRates());

    list.loop(false);
    list.index(this.player.playbackRates().indexOf(this.player.playbackRate()));
    return list;
  }

  next() {
    const rate = this.get().next();

    this.player.playbackRate(rate);
  }

  prev() {
    const rate = this.get().prev();

    this.player.playbackRate(rate);
  }
}

export default PlaybackRateGoto;
