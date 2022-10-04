// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // Array Declare
  var UPPERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var LOWERS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var SPECIALS = [
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ",",
    ".",
    "/",
    "?",
  ];
  var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Var Declare
  var passwordChoice = [];

  var length = prompt("How many characters do you want?");
  length = parseInt(length);

  //Re-prompt - If the user has not entered a valid number //
  if (length < 8 || length > 128) {
    window.alert("Please enter a number between 8-128");
    length = window.prompt("How many characters do you want?");
    length = parseInt(length);
  }

  while (isNaN(length) || length < 8 || length > 128) {
    window.alert("Please enter a number between 8-128");
    length = window.prompt("How many characters do you want?");
    length = parseInt(length);
  }

  var lowerBool = window.confirm("Do you want lowercase characters?");
  var upperBool = window.confirm("Do you want uppercase characters?");
  var specialBool = window.confirm("Do you want special characters?");
  var numberBool = window.confirm("Do you want numbers?");

  if (!lowerBool && !upperBool && !specialBool && !numberBool) {
    alert("You must select at least one choice.");
    return;
  }

  //combine arrays for each confirmation
  if (lowerBool == true){
    passwordChoice = passwordChoice.concat(LOWERS);
  } 
  if (upperBool == true){
    passwordChoice = passwordChoice.concat(UPPERS);
  }
  if (specialBool == true){
    passwordChoice = passwordChoice.concat(SPECIALS);
  }
  if (numberBool == true){
    passwordChoice = passwordChoice.concat(NUMBERS);
  }

  // generate password
  var newpassword = [];
  for (var i = 0; i < length; i++) {
    var RANDOM = Math.floor(Math.random() * passwordChoice.length);
    newpassword.push(passwordChoice[RANDOM]);
  }
  password = newpassword.join("");
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
