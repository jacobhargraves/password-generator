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
  lowercaseInput = confirm("Would you like to include lowercase leters?");
  return lowercaseInput;
}
var uppercase = function() {
  uppercaseInput = confirm("Would you like to include uppercase leters?");
  return uppercaseInput;
}
var numbers = function () {
  numbersInput = confirm("Would you like to include numbers?");
  return numbersInput;
}
var specialCharacters = function () {
  specialCharactersInput = confirm("Would you like to include special characters?");
  return specialCharactersInput;
}

// initiate prompts
function criteriaPrompt() {
  promptInitiate();
  passwordLengthPrompt();
  lowercase();
  uppercase();
  numbers();
  specialCharacters();
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
