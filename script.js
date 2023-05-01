// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteriaPrompt);

// Variables for prompts
var promptInitiate = function() {
  alert("Please select password criteria");
  return;
}
var passwordLengthPrompt = function() {
  prompt("Please select password length (8-128 characters)");
  return;
}
var lowercase = function() {
  confirm("Would you like to include lowercase leters?");
  return;
}
var uppercase = function() {
  confirm("Would you like to include uppercase leters?");
  return;
}
var numbers = function () {
  confirm("Would you like to include numbers?");
  return;
}
var specialCharacters = function () {
  confirm("Would you like to include special characters?");
  return;
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
