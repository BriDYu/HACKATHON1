const actualPrices = [
  { bike: 100 },
  { fan: 20 },
  { fryingpan: 14 },
  { bookbag: 36 },
  { cooler: 57 },
  { hairdryer: 14 },
  { table: 130 },
  { basketball: 70 },
  { waterbottle: 40 },
  { lights: 16 },
];

// if guess is within 5% of price
function priceIsRight(guess, actual) {
  // if guess is within 5% of actual price (5% above and below), then price is right
  let deviationPercent = 0.15;
  let minRange = (1 - deviationPercent) * actual;
  let maxRange = (1 + deviationPercent) * actual;
  // set range from 95% of actual and 105% of actual
  // if guess is greater than 95% of actual but less than 105% of actual, return correct
  if (guess > minRange && guess < maxRange) return "correct";
  // else return wrong
  else return "wrong";
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
  img.setAttribute("src", "./amazonimages/basketball.jpg");
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
  window.location.href =
    "https://www.amazon.com/Wilson%C2%AE-Evolution%C2%AE-Indoor-Basketball-EA/dp/B0009KMXWY/ref=sr_1_6?crid=1L9N2L5Z64EDW&keywords=basketball&qid=1664413866&qu=eyJxc2MiOiI3LjM1IiwicXNhIjoiNi45MCIsInFzcCI6IjYuNjIifQ%3D%3D&sprefix=basketball%2Caps%2C111&sr=8-6";
  // priceIsRight(input, // prices we've stored)
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
