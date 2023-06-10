                                //Assignment No 8
          //IF…ELSE & ELSE IF STATEMENT TESTING SET OF CONDITIONS
//QNO 1
var input = prompt("Enter a character:");
checkCharacterType(input);

function checkCharacterType(character) {
    var charCode = character.charCodeAt(0);
    
    if (charCode >= 48 && charCode <= 57) {
      console.log("The input is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
      console.log("The input is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
      console.log("The input is a lowercase letter.");
    } else {
      console.log("The input is neither a number nor a letter.");
    }
  }
 
//QNo 2
var number1 = parseInt(prompt("Enter the first number:"));
var number2 = parseInt(prompt("Enter the second number:"));
compareIntegers(number1, number2);

function compareIntegers(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " is larger than " + num2);
    } else if (num1 < num2) {
      console.log(num2 + " is larger than " + num1);
    } else {
      console.log("Both numbers are equal.");
    }
  }

//QNO 3
var input = parseFloat(prompt("Enter a number:"));
checkNumber(input);

function checkNumber(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

//QNo 4
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  const character = prompt("Enter a character:");
  if (character.length === 1) {
    const result = isVowel(character);
    console.log("Is the character of a vowel ? " + result);
  } else {
    console.log("Please enter a single character.");
  }

//QNo 5
const correctPassword = "myPassword123";
const userPassword = prompt("Enter your password:");

if (userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

//QNo 6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//QNo 7
var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");
var hour = parseInt(time.substring(0, 2));

if (hour >= 0 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 17) {
  console.log("Good afternoon!");
} else if (hour >= 17 && hour < 20) {
  console.log("Good evening!");
} else if (hour >= 20 && hour <= 23) {
  console.log("Good night!");
} else {
  console.log("Invalid time format.");
}



  
  
  
            