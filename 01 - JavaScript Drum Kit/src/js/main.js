//convert to arrays
const audioTags = [...document.querySelectorAll('audio')];
const keyTags = [...document.querySelectorAll('.key')];


const clap = audioTags[0];

// functions that follow are using the clap sound only and the A key only

function preloadAudio(clap) {
  clap.preload = 'auto';
  clap.load();
};

function playSound() {
  let sound = clap.cloneNode();
  sound.play();
}

document.addEventListener('keydown', (key) => {
  if (key.code == "KeyA") {
    playSound();
    keyTags[0].classList.add('playing');
  }

});
document.addEventListener('keyup', (key) => {
  if (key.code == "KeyA") {
    keyTags[0].classList.remove('playing');
  }

});
