const actualPrices = [
  { bike: 100 },
  { fan: 20 },
  { fryingpan: 14 },
  { bookbag: 36 },
  { cooler: 57 },
  { hairdryer: 14 },
  { table: 130 },
  { basketball: 80 },
  { waterbottle: 40 },
  { lights: 16 },
];

let score = 0;

// if guess is within 5% of price
function priceIsRight(guess, actual) {
  // if guess is within 5% of actual price (5% above and below), then price is right
  let deviationPercent = 0.15;
  let minRange = (1 - deviationPercent) * actual;
  let maxRange = (1 + deviationPercent) * actual;
  // set range from 95% of actual and 105% of actual
  // if guess is greater than 95% of actual but less than 105% of actual, return correct
  if (guess > minRange && guess < maxRange) {
    score += 1;
    let scoreCount = document.createElement('p');
    let scoreHTML = document.getElementById('score');
    scoreHTML.append(scoreCount);
    scoreHTML.value = 0;

  }
  // else return wrong
  else {
    //loser sound?
  };
}



// create element in document
// document.querySelector("");
// document.createElement("body");
// create div in element

// document.addEventListener("DOMContentLoaded", () => {
// document.body.appendChild(playGameBtn);
function imgProducer() {}
const playGameBtn = document.getElementById("start");
playGameBtn.addEventListener("click", () => {
  //set display of start button to none
  var start = document.getElementById("start");
  var guess = document.getElementById("guess");
  var mainText = document.getElementById("instructions");
  var imgContainer = document.getElementById("imgContainer");
  var img = document.createElement("image");
  img.setAttribute("id", "image");
  img.setAttribute("src", "./amazonimages/basketball.png");
  img.setAttribute("alt", "this is where the img should showup");
  imgContainer.appendChild(img);

  start.style.display = "none";
  mainText.style.display = "none";
  guess.style.display = "inline";
  imgContainer.style.display = "inline"; // this is breaking

  //set display of instructions to none
  //set display of new Guess button to showup
  //set display of text field to showup
  //set display of image box to showup

  const input = document.createElement("input");
  input.setAttribute("type", "number"); // should create <input type = "number" />
  input.setAttribute("id", "input");
  container.appendChild(input);

  // guess functionality
});

const guessBtn = document.getElementById("guess");
guessBtn.addEventListener("click", () => {
  window.open(
    'https://www.amazon.com/Wilson%C2%AE-Evolution%C2%AE-Indoor-Basketball-EA/dp/B0009KMXWY/ref=sr_1_2?crid=1LEO1UKC105ZW&keywords=wilson%2Bbasketball&qid=1664474247&qu=eyJxc2MiOiI1LjYzIiwicXNhIjoiNS40NCIsInFzcCI6IjUuMjEifQ%3D%3D&sprefix=wilson%2Bbasketball%2Caps%2C85&sr=8-2&th=1&psc=1',
    '_blank'
  );
  var audio = new Audio('ugh.mp3');
  audio.play(); 
  img.removeAttribute(src)
  img.setAttribute("src", "./amazonimages/bookbag1.jpg");
  // priceIsRight(input, // prices we've stored)
  // needs to redirect with target.
});



// const guessBtn = document.getElementById("guess");
// guessBtn.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     console.log("pressed enter");
//   }
// });

// populateImage () {

// }
//function for the onclick of guess when a value is input
//should run priceIsRight
//open link in amazon
//play winning or losing sound within price is right?
//your score incremented?

// creating textbox to input guesses
/*
document.createElement("label")
document.createElement("input")
input.setAttribute("type", "text");
document.body.appendChild(input);
*/
