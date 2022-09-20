import window from 'global/window';

const LOCAL_STORAGE_KEY = 'vjs-volume';

const keepVolume = (player) => {
  let values;

  // load
  try {
    const data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));

    values = {
      muted: data.muted,
      volume: Number(data.volume) / 100
    };
  } catch (err) {
    player.log.warn(err);
  }

  if (values) {
    player.muted(values.muted);
    player.volume(values.volume);
  }

  // change
  const volumechangeHandle = () => {
    values = {
      muted: player.muted(),
      volume: Math.round(player.volume() * 100)
    };

    try {
      if (Object.keys(values).length) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
      } else {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    } catch (err) {
      player.log.warn(err);
    }
  };

  player.on('volumechange', volumechangeHandle);
  player.on('dispose', () => {
    player.textTracks().off('volumechange', volumechangeHandle);
  });
};

export default keepVolume;
