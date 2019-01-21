// let divs = document.querySelectorAll('.key')
let divs2 = document.querySelectorAll('.key kbd')
let divs3 = document.querySelectorAll('.key audio')
let divs3 = document.querySelectorAll('.key span')
// let divArray = Array.prototype.slice.call(divs)

// NodeList.prototype.isPrototypeO(divs)

console.log(divs2[0].innerHTML.toLowerCase())
console.log(divs3[0])

let audio = new Audio('../../sounds/clap.wav');


document.addEventListener('keydown', (key) => {

  if (key.key == divs2[0].innerHTML.toLowerCase()){
    console.log(`Success! "${key.key}"`);
    audio.play();
  }
});
