// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteriaPrompt);

// Variables for prompts
var promptInitiate = function() {
  alert("Please select password criteria");
  return;
}
var passwordLengthPrompt = function() {
  while (true) {
    var lengthInput = prompt("Please select password length (8-128 characters)");
    if (lengthInput == null || lengthInput > 128 || lengthInput < 8) {
      alert("Please enter a valid response.");
    } else if (lengthInput >= 8 || lengthInput <= 128) {
      break;
    }
  }
  return lengthInput;
}
var lowercase = function() {
  var lowercaseInput = confirm("Would you like to include lowercase leters?");
  return lowercaseInput;
}
var uppercase = function() {
  var uppercaseInput = confirm("Would you like to include uppercase leters?");
  return uppercaseInput;
}
var numbers = function () {
  var numbersInput = confirm("Would you like to include numbers?");
  return numbersInput;
}
var specialCharacters = function () {
  var specialCharactersInput = confirm("Would you like to include special characters?");
  return specialCharactersInput;
}
//var criteriaSelections = function() {
//  if (lowercaseInput == true) {
//    strLCI = "Lowercase";
//  }
//  if (uppercaseInput == true) {
//    strUCI = "Uppercase";
//  }
//  if (numbersInput == true) {
//    strNI = "Numbers";
//  }
//  if (SpecialCharactersInput == true) {
//    strSCI = "Special characters";
//  }
//  alert("Your password length is: " + lengthInput + "\n" + 
//  "You have chose to include" + strLCI + strUCI + strNI + strSCI);
//}

// initiate prompts
function criteriaPrompt() {
  promptInitiate();
  var lengthValue = passwordLengthPrompt();
  while (true) {
    var lowercaseValue = lowercase();
    var uppercaseValue = uppercase();
    var numbersValue = numbers();
    var specialCharactersValue = specialCharacters();
    if (lowercaseValue == false && uppercaseValue == false && numbersValue == false && specialCharactersValue == false) {
      alert("Please select at least one criteria for characters.");
    } else {
      break;
    }
  }
  alert("Your password length is: " + lengthValue);
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
