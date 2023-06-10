                             //Assignment No 9
                                 //Array
//QNo 1
var studentNames = [];
studentNames.push("Abdullah");
studentNames.push("Afaq");
console.log(studentNames);

//QNo 2
let userNames = [];
userNames[0] = "hammad";
userNames[1] = "khan";
console.log(userNames[0]); 
console.log(userNames[1]); 

//QNo 3
let stringsArray = ["apple", "banana", "cherry"];
console.log(stringsArray);

//QNo 4
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

//QNo 5
let booleanArray = [true, false, true];
console.log(booleanArray);

//QNo 6
let mixedArray = ["apple", 1, true, "banana", 2, false];
console.log(mixedArray);

//Qno 7
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications in Pakistan:</h1>");
document.write("<ol>");

for (let i = 0; i < educationQualifications.length; i++) {
  document.write("<li>" + educationQualifications[i] + "</li>");
}

document.write("</ol>");

//Qno 8
let stdNames = ["Abdullah", "ahsan", "ahmer"];
let stdScores = [400, 370, 460];

const totalMarks = 500;

document.write("<h1>Student Scores and Percentages:</h1>");
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");

for (let i = 0; i < stdNames.length; i++) {
  let score = stdScores[i];
  let percentage = (score / totalMarks) * 100;

  document.write("<tr>");
  document.write("<td>" + stdNames[i] + "</td>");
  document.write("<td>" + score + "</td>");
  document.write("<td>" + percentage.toFixed(2) + "%</td>");
  document.write("</tr>");
}

document.write("</table>");

//QNo 9
let colorNames = ["Red", "Green", "Blue"];

document.write("<h2>Original Array:</h2>");
document.write(colorNames.join(", "));

let colorToAddStart = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(colorToAddStart);

document.write("<h2>Updated Array (Added to Beginning):</h2>");
document.write(colorNames.join(", "));


let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colorNames.push(colorToAddEnd);


document.write("<h2>Updated Array (Added to End):</h2>");
document.write(colorNames.join(", "));


colorNames.unshift("Purple", "Yellow");


document.write("<h2>Updated Array (Added Two Colors to Beginning):</h2>");
document.write(colorNames.join(", "));


colorNames.shift();


document.write("<h2>Updated Array (Deleted First Color):</h2>");
document.write(colorNames.join(", "));


colorNames.pop();

document.write("<h2>Updated Array (Deleted Last Color):</h2>");
document.write(colorNames.join(", "));


let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAdd = prompt("Enter the color to add at the specified index:");
colorNames.splice(indexToAdd, 0, colorToAdd);


document.write("<h2>Updated Array (Added Color at Specified Index):</h2>");
document.write(colorNames.join(", "));




let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colorNames.splice(indexToDelete, numColorsToDelete);

document.write("<h2>Updated Array (Deleted Color(s) at Specified Index):</h2>");
document.write(colorNames.join(", "));

//QNo 10
let studentScores = [78, 92, 85, 67, 94, 80];

document.write("<h2>Scores of students:</h2>");
document.write(studentScores.join(", "));

studentScores.sort(function(a, b) {
  return a - b;
});

document.write("<h2>Ordered scores of students:</h2>");
document.write(studentScores.join(", "));

//QNO 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'];
var selectedCities = [];

selectedCities = cities.slice(0,2);

document.write("<h2>Selected cities List:</h2>")
document.write(selectedCities);

//QNo 12
var arr = ["This", "is", "my", "cat"];
var result = arr.join(" ");
document.write("<h2>Array:</h2>");
document.write(arr);
document.write("<h2>String:</h2>");
document.write(result);

//QNO 13
var fifoArray = [];

fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("pointer");
fifoArray.push("monitor");


console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 

//QNo 14
var fifoArray = [];

fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 

//QNo 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h2>Select your phone</h2>");
document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
















