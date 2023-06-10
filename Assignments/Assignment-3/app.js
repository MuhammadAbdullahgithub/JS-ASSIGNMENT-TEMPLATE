                            //Assignment No 3
                             //Variables for Numbers
//QNo 1
let age = "i am 22 years old ";
alert(age);

//QNo 2

if (localStorage.getItem("visitCount")) {
    
    var visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
  } else { 
    var visitCount = 1;
  }

  localStorage.setItem("visitCount", visitCount);
  document.write("You have visited this site " + visitCount + " times.<br>");
  
//QNO 3
let birthday = " My birthday year is 2000 ";
document.write(birthday);
document.write("data type of my decleared varible is number <br>")

//QNo 4
var visitorName = " John Doe ";
var productTitle = "T-shirt";
var quantity = 5;

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on unofficial Clothing store. <br>";
document.write(message);



