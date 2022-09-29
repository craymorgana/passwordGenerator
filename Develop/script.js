// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  // Array Declare
  var UPPERS = ["A", "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var LOWERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var SPECIALS = ['!','#','$','%','^','&','*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '\\', '|', '\,' ,'.','/','?'];
  var NUMBERS = ['0','1','2','3','4','5','6','7','8','9']; 
  12
  // Var Declare
  var passwordChoice = [];

  
  var length = window.prompt("How many characters do you want?");
  //Re-prompt - If the user has not entered a valid number //
    while (length < 8 || length > 128){
      window.alert("Please enter a number between 8-128");
      length = window.prompt("How many characters do you want?")
    }
  
   var lowerBool = window.confirm("Do you want lowercase characters?");
   var upperBool = window.confirm("Do you want uppercase characters?");
   var specialBool = window.confirm("Do you want special characters?");
  

// combine arrays for each confirmation
  switch(true){
    // All true
    case (lowerBool && upperBool && specialBool):
      passwordChoice = LOWERS.concat(UPPERS, SPECIALS, NUMBERS);
    break;
    
    // true lower, true upper, false special
    case (lowerBool && upperBool && !specialBool):
      passwordChoice = LOWERS.concat(UPPERS, NUMBERS);
      break;
  
    // true lower, false upper, true special
    case (lowerBool && !upperBool && specialBool):
      passwordChoice = LOWERS.concat(SPECIALS, NUMBERS);
      break;

    // true lower, false upper, false special
    case (lowerBool && !upperBool && !specialBool):
      passwordChoice = LOWERS.concat(NUMBERS);
      break;

    // false lower, true upper, true special
    case (!lowerBool && upperBool && specialBool):
      passwordChoice = UPPERS.concat(SPECIALS, NUMBERS);
      break;

    // false lower, true upper, false special
    case (!lowerBool && upperBool && !specialBool):
      passwordChoice = UPPERS.concat(NUMBERS);
      break;

    // false lower, false upper, true special
    case (!lowerBool && !upperBool && specialBool):
      passwordChoice = SPECIALS.concat(NUMBERS);
      break;

    // all false
    case (!lowerBool && !upperBool && !specialBool):
      passwordChoice = NUMBERS;
    break;
  } 

  
  // generate password
  var newpassword = [];
  for (var i = 0; i < length; i++){
    var RANDOM = Math.floor((Math.random() * passwordChoice.length))
    newpassword.push(passwordChoice[RANDOM]);
  }
  console.log('newpassword :>> ', newpassword);
  password = newpassword.join("");
  return password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*

if all true 




*/