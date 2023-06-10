                           //Assignment NO 12
                           //MATH METHODS
//QNo 1
var userInput = prompt("Enter a positive integer:");
var number = parseInt(userInput);

if (Number.isNaN(number) || number <= 0) {
  document.write("Invalid input. Please enter a positive integer.");
} else {

  document.write("<p>Number: " + number + "</p>");


  var roundValue = Math.round(number);
  document.write("<p>Round off value: " + roundValue + "</p>");


  var floorValue = Math.floor(number);
  document.write("<p>Floor value: " + floorValue + "</p>");

  var ceilValue = Math.ceil(number);
  document.write("<p>Ceil value: " + ceilValue + "</p>");
}

//QNo 2
var userInput = prompt("Enter a negative floating-point number:");


var number = parseFloat(userInput);


if (Number.isNaN(number) || number >= 0) {
  document.write("Invalid input.  Please enter a negative floating-point number.");
} else {
  
  document.write("<p>Number: " + number + "</p>");


  var roundValue = Math.round(number);
  document.write("<p>Round off value: " + roundValue + "</p>");


  var floorValue = Math.floor(number);
  document.write("<p>Floor value: " + floorValue + "</p>");


  var ceilValue = Math.ceil(number);
  document.write("<p>Ceil value: " + ceilValue + "</p>");
}

//QNo 3
var userInput = prompt("Enter a number:");
var number = parseFloat(userInput);
var absoluteValue = Math.abs(number);

console.log("The absolute value of " + number + " is " + absoluteValue);

//QNo 4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<p>The dice rolled and the value is: " + diceValue + "</p>");

//QNo 5
var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("<p>The coin was tossed and the value is: " + coinValue + "</p>");

//QNo 6
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<p>The random number is: " + randomNumber + "</p>");

//QNo 7
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
if (!isNaN(weight)) {
  document.write("<p>Your weight is: " + weight + " kilograms</p>");
} else {
  document.write("<p>Invalid input. Please enter a valid weight.</p>");
}

//QNo 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number (between 1 and 10):");
var userNumber = parseInt(userInput);

if (userNumber === secretNumber) {
  document.write("<p>Congratulations! You guessed the secret number.</p>");
} else {
  document.write("<p>Sorry, the secret number was " + secretNumber + ". Try again!</p>");
}
