                                  //Assignment No 13
                                    //DATE METHODS

// QNO 2
  var currentDate = new Date();
  var month = currentDate.getMonth();
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  var currentMonth = monthNames[month];
  alert("Current Month: " + currentMonth);

//QNo 3
  var currentDate = new Date();
  var day = currentDate.getDay();
  var dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDay = dayAbbreviations[day];
  alert("Current Day: " + currentDay);

//QNo 4
var currentDate = new Date();

var day = currentDate.getDay();

if (day === 5 || day === 0) {
  alert("It's Fun day");
}

//QNo 5
  var currentDate = new Date();
  var date = currentDate.getDate();
  if (date < 16) {
    alert("First fifteen days of the month");
  } else {
    alert("Last days of the month");
  }

//QNo 6
var myDate = new Date();
var milliseconds = myDate.getTime();
var minutes = Math.floor(milliseconds / (1000 * 60));
 alert("Minutes since midnight, Jan. 1, 1970: " + minutes);

//QNo 7
  var currentDate = new Date();
  var hour = currentDate.getHours();
  if (hour < 12) {
    alert("It's AM");
  } else {
    alert("It's PM");
  }

//QNo 8
  var laterDate = new Date(2020, 11, 31);
  console.log(laterDate);

//QNo 9
  var startingDate = new Date(2015, 5, 18); 
  var currentDate = new Date();
  var timeDifference = currentDate.getTime() - startingDate.getTime();
  var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  alert("Number of days passed since 1st Ramadan: " + daysPassed);

//QNo 11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);

//QNo 12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
var formattedDate = currentDate.toDateString();
alert("Date 100 years back: " + formattedDate);

//QNo 13
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);

//QNo 14
var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
var netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = netAmountPayable.toFixed(2);
var grossAmountPayable = parseFloat(netAmountPayable) + latePaymentSurcharge;
grossAmountPayable = grossAmountPayable.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");
