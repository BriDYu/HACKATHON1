// if guess is within 5% of price,
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
const playGameBtn = document.getElementById("start");
playGameBtn.addEventListener("click", () => {
  //set display of start button to none
  var start = document.getElementById("start");
  var guess = document.getElementById("guess");
  var mainText = document.getElementById("instructions");
  start.style.display = "none";
  mainText.style.display = "none";
  guess.style.display = "inline";
  // imgContainer.display = "inline";
  //set display of instructions to none
  //set display of new Guess button to showup
  //set display of text field to showup
  //set display of image box to showup

  // guess functionality
});

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

*/
