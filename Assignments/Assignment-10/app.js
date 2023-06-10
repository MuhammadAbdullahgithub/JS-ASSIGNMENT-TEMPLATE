                            //Assignment No 10
                            //ARRAYS AND LOOP
//QNO 1
var multidimensionalArray = [];

//QNo 2
var matrix = [
    [0, 1, 2,3]
    [1, 0, 1,2]
    [2, 1, 0,1]
  ];
  
 //QNo 3
 for (var i = 1; i <= 10; i++) {
    console.log(i);
  }

//QNo 4
var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

console.log("Multiplication Table of " + tableNumber + ":");

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  console.log(tableNumber + " * " + i + " = " + result);
}

//QNo 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items in the array:");

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
   
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    document.write("<h1>Items in the array:</h1>");

    for (var i = 0; i < fruits.length; i++) {
      document.write(fruits[i] + "<br>");
    }

//QNo 6
for (let i = 1; i <= 15; i++) {
  document.write(i + "<br>");
}
for (let i = 10; i >= 1; i--) {
  document.write(i + "<br>");
}
for (let i = 0; i <= 20; i += 2) {
  document.write(i + "<br>");
}
for (let i = 1; i <= 19; i += 2) {
  document.write(i +"<br>");
}
for (let i = 1; i <= 10; i++) {
  document.write(i * 2 + "k" + "<br>");
}

//QNo 7
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const userInput = prompt("welcome to united bakery.what do you want to order sir/ma'am?:");

const searchItem = userInput.toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
  
  const currentItem = A[i].toLowerCase();


  if (currentItem === searchItem) {
    found = true;
    break;
  }
}

if (found) {
  alert("cookie is available at index 2 in our bakery.");
} else {
  alert("We are sorry.pastry is not available in our bakery.");
}

//QNo 8
const B = [24, 53, 78, 91, 12];

let largest = B[3];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("Array items: 24, 53, 78, 91, 12");
console.log("The largest number is:", largest);

//QNO 9
const c = [24, 53, 78, 91, 12];

let smallest = c[4];

for (let i = 1; i < A.length; i++) {
  if (A[i] > smallest) {
    smallest = A[i];
  }
}
console.log("Array items: 24, 53, 78, 91, 12");
console.log("The smallest number is:", smallest);

//QNO 10
for (let i = 1; i <= 100; i++) {
 
  if (i % 5 === 0) {
    console.log(i);
  }
}



