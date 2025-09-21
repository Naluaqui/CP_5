const audio = new Audio('./src/assets/sounds/music.mp3');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

