const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();


// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement;
// }


// let audio = new Audio('../../sounds/clap.wav');

// get the audio element
const audioElement = document.querySelector('audio');

const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);



document.addEventListener('keydown', (key) => {
  console.log(audioElement.play());
});
