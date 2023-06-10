                                //Assignment No 11
                                 //STRING METHODS
//QNo 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

//QNo 2
var favoriteModel = prompt("Enter your favorite mobile phone model:");

var inputLength = favoriteModel.length;

document.write("The length of your favorite mobile is: " + inputLength);

//QNo 3
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("<br>The index of 'n' in the word 'Pakistani' is: " + indexOfN);

//QNo 4
var word = "Hello World";
var lastIndexOfL = word.lastIndexOf("l");
document.write("<br>The last index of 'l' in the word 'Hello World' is: " + lastIndexOfL);

//QNo 5
var word = "Pakistani";
var characterAtThirdIndex = word.charAt(3);

document.write("<br>The character at the 3rd index in the word 'Pakistani' is: " + characterAtThirdIndex);

//QNo 6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

//QNo 7
var word = "Hyderabad";
var replacedWord = word.replace("Hyder", "Islam");

document.write("<br>The modified word is: " + replacedWord);

//QNo 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.split("and").join("&");

document.write("<br>The modified message is: " + replacedMessage);

//QNo 9
var str = "472";
var num = parseInt(str);

document.write("<br>The value is: " + num + "<br>");
document.write("The type is: " + typeof num);

//QNo 10
var userInput = prompt("Enter your input:");
var convertedInput = userInput.toUpperCase();

document.write(" Converted input: " + convertedInput);

//QNo 11
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
  }
  var userInput = prompt("Enter your input:");
  var convertedInput = toTitleCase(userInput); 
  document.write(" Converted input: " + convertedInput);

//QNo 12
var num = 35.36;
var strNum = num.toString().replace('.', '');

console.log(strNum); 
document.write(strNum);

//QNo 13
var username = prompt("Enter your username:");

if (
  username.includes("@") ||
  username.includes(".") ||
  username.includes(",") ||
  username.includes("!")
) {
  alert("Please enter a valid username without special symbols.");
} else {
  alert("Username accepted: " + username);
}

//QNo 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:").toLowerCase();

var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;
    break;
  }
}

if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

//QNo 15
function checkPassword(password) {
   
    if (password.length < 6) {
      return false;
    }
    if (!isNaN(password[0])) {
      return false;
    }
    let hasAlpha = false;
    let hasDigit = false;
  
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(/[a-z]/i)) {
        hasAlpha = true;
      } else if (!isNaN(password[i])) {
        hasDigit = true;
      }
  
      if (hasAlpha && hasDigit) {
        return true;
      }
    }
  
    return false;
  }
  
  
  let password = prompt("Enter a password: ");
  while (!checkPassword(password)) {
    alert("Invalid password! Please enter a valid password.");
    password = prompt("Enter a password: ");
  }
  
  alert("Valid password!");

  //QNo 16
  var university = "<br>U<br>n<br>i<br>v<br>e<br>r<br>s<br>i<br>t<br>y<br> o<br>f<br> K<br>a<br>r<br>a<br>c<br>h<br>i<br>";
var array = university.split(" ");

for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}
//QNo 17
var userInput = prompt("Enter a string:");

if (userInput !== null && userInput !== "") {
  var lastCharacter = userInput.charAt(userInput.length - 1);

  console.log("Last character:", lastCharacter);
} else {
  console.log("No input provided.");
}

//QNo 18
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var lowercaseSentence = sentence.toLowerCase();
var words = lowercaseSentence.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToSearch) {
    count++;
  }
}

console.log("Number of occurrences of '" + wordToSearch + "': " + count);

  
