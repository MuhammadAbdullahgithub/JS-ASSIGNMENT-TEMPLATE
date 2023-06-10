                             //Assignment No 5
                             //MATH EXPRESSIONS
//QNO 1
let x = 2;
let y = 3;
let z = (x+y);
document.write(" sum of  2 and 3 is");
document.write(z);

//QNo 2
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

var subtraction = num1 - num2;
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");

var multiplication = num1 * num2;
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");

var division = num1 / num2;
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");

var modulus = num1 % num2;
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");

//QNO 3
var number;
document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number += 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br>");

//QNo 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");

//QNo 5
var userInput = prompt("Please enter a number:");
var number = parseInt(userInput);

if (isNaN(number)) {
  number = 5; 5
}

document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

//QNo 6
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 9/5;
    return celsius;
  }

  var celsiusTemperature = 25;
  var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

  console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");
  var fahrenheitTemperature2 = 70;

  var celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);

  console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

//QNo 7
let priceOfItem1 = 650;
let priceOfItem2 = 500;
let orderedQuantityOfItem1 = 4;
let orderedQuantityOfItem2 = 6;
let shippingCharges = 10;

var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;

document.write("<h1>Shopping Card</h1>");
document.write("<p>Price of Item 1 is:" + priceOfItem1 + "</p>");
document.write("<p>Price of Item 2 is:" + priceOfItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1 is: " + orderedQuantityOfItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2 is: " + orderedQuantityOfItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<h3>Total Cost of your order is: " + totalCost + "</h3>");

//QNO 8
let totalMarks = 1150;
let marksObtained = 954;
let percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage + "%</h3>");

//QNO 9
let usDollars = 10;
let saudiRiyals = 25;
let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;

let totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("<h1>Currency in PKR</h1>");
document.write("<b>Total Pakistani Rupees:<b> " + totalRupees);

//QNO 10
let num = 10;
let result = (((number + 5) * 10) / 2);

console.log("Result: " + result);

//QNO 11
let currentYear = 2023; 
let birthYear = 2000; 
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

console.log("Your are " + age1 +  " years old.");

//QNo 12
let radius = 20; 
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

console.log("The radius is " + radius.toFixed(2));
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

//QNo 13
let favoriteSnack = "Chocolate Chip"; 
let currentAge = 15; 
let maximumAge = 70; 
let amountPerDay = 3; 

let yearsRemaining = maximumAge - currentAge;
let snacksPerYear = amountPerDay * 365; 
let totalSnacksNeeded = snacksPerYear * yearsRemaining;

document.write("<h1>The Life Time Supply Calculator</h1>");
document.write("favoriteSnack: Choclate chip");
document.write("<br>currentAge: 15");
document.write("<br>maximumAge: 70");
document.write("<br>amountPerDay: 3");
document.write("<br>You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");



