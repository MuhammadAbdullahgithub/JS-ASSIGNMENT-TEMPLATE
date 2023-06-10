                              //Assignment No 6
                              //Math Expressions
//QNo 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<br>a is = ?");
document.write("<br>b is = ?");
document.write("<br>result is = ?");

//QNo 3
var userName = prompt("Please enter your name:");
console.log("Hello, " + userName + " ! Welcome !");
alert("Hello, " + userName + " ! Welcome! ");

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

//QNO 6
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
