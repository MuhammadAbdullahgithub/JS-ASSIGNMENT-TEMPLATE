                             //Assignment No 7
                 //USER INPUT & CONDITIONAL STATEMENT
//QNO 1
var cityName = prompt("Enter the name of your city:");

if (cityName === "karachi") {
  console.log("Welcome to the city of lights!");
} else {
  console.log("Welcome!");
}

//QNo 2
let gender = prompt("Please enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
  console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  console.log("Good Morning Ma'am.");
} else {
  console.log("Invalid input. Please enter 'male' or 'female'.");
}

//QNo 3
let color = prompt("Please enter the color of the road traffic signal:");

if (color.toLowerCase() === "red") {
  console.log("Must Stop.");
} else if (color.toLowerCase() === "yellow") {
  console.log("Ready to move.");
} else if (color.toLowerCase() === "green") {
  console.log("Move now.");
} else {
  console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
}

//QNo 4
let fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in liters):"));

if (fuel < 0.25) {
  console.log("Please refill the fuel in your car.");
} else {
  console.log("You have enough fuel.");
}

//QNO 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//QNo 6
let subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

//QNo 7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer.");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
  console.log("Close enough to the correct answer.");
} else {
  console.log("Wrong guess. The secret number was " + secretNumber + ".");
}

//QNo 8
var number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
  console.log("The number is divisible by 3.");
} else {
  console.log("The number is not divisible by 3.");
}

//QNo 9
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(4));   

//QNo 10
function checkWeatherTemperature(temperature) {
  if (temperature > 40) {
    return "It is too hot outside.";
  } else if (temperature > 30) {
    return "The Weather today is Normal.";
  } else if (temperature > 20) {
    return "Today's Weather is cool.";
  } else if (temperature > 10) {
    return "OMG! Today's weather is so Cool.";
  } else {
    return "Temperature is too low.";
  }
}
console.log(checkWeatherTemperature(45));   
console.log(checkWeatherTemperature(35));   
console.log(checkWeatherTemperature(25));   
console.log(checkWeatherTemperature(15));   
console.log(checkWeatherTemperature(5));    

//QNo 11
function calculateResult(firstNumber, secondNumber, operation) {
  let result;
  
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  } else if (operation === '/') {
    result = firstNumber / secondNumber;
  } else if (operation === '%') {
    result = firstNumber % secondNumber;
  } else {
    return "Invalid operation.";
  }
  
  return "The calculated result is: " + result;
}


console.log(calculateResult(10, 5, '+'));   
console.log(calculateResult(10, 5, '-'));   
console.log(calculateResult(10, 5, '*'));  
console.log(calculateResult(10, 5, '/'));  
console.log(calculateResult(10, 5, '%'));   
console.log(calculateResult(10, 5, '^'));   
