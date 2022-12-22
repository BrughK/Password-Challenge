// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables needed
var passLength = "";
var passSpecial;
var passNum;
var passUp;
var passLow;
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// 1. Prompt User for the password criteria
    //  password length between 8-128
    //  lowercase, uppercase, special chars
// 2. Validate the Input
// 3. Generate password based on criteria

function generatePassword() {
  var passLength = window.prompt("How many characters would you like the password to be? (8-128)");
  console.log("Password Length " + passLength + " chars")
  if (passLength <=7 || passLength >=129) {
    window.alert("Your password must be between 8 and 128 characters!!!\nPlease Start Over!");
    return "";
  }
  else {
    var passSpecial = window.confirm("Would you like to include special characters? \nOkay = Yes \nCancel = No");
    console.log("Special Charcters " + passSpecial);
    var passNum = window.confirm("Would you like to include numbers? \nOkay = Yes \nCancel = No");
    console.log("Numbers " + passNum);
    var passUp = window.confirm("Would you like to include uppercase letters? \nOkay = Yes \nCancel = No");
    console.log("Uppercase " + passUp);
    var passLow = window.confirm("Would you like to include lowercase letters? \nOkay = Yes \nCancel = No");
    console.log("Lowercase " + passLow);

    //IF NO PARAMETERS ARE SELECTED FOR THE PASSWORD
    if (passSpecial === false && passNum === false && passLow === false && passUp === false) {
      window.alert("You must select at least one parameter!!!\nPlease Start Over!");
    }
  }

  var passText = [];

  // MAKE THE PASSWORD
  /* Each one of these is seeing if the user wants the prompted 
     parameters and if so adding them to the big array of possible chars */
  if (passSpecial){
    passText = passText.concat(special);
  } 

  if (passNum){
    passText = passText.concat(nums);
  }

  if (passUp){
    passText = passText.concat(upper);
  }

  if (passLow){
    passText = passText.concat(lower);
  }

  // Var to hold the password being made
  var userPass = "";

  // FOR LOOP TO FILL THE LENGTH OF PASS WITH REQUIRED CHARACTERS
  for (var i = 0; i < passLength; i++) {
    // Took indexing array thing from mini project
    // This takes the array of possible options and picks one at random within the amount of chars available
    // The math.floor is needed or the code will pick an undefined option
    var userPass = userPass + passText[Math.floor(Math.random() *  passText.length)];
    console.log(userPass);
  }

  // 4. Display password to page
  return userPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
