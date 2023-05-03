// Assignment Code
var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", criteriaPrompt);

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

// initiate prompts
function generatePassword() {
  promptInitiate();
  var lengthValue = passwordLengthPrompt();
  // while loop makes user select at least one criteria
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
  // displays criteria selection in alert
  if (lowercaseValue) {
    var lCString = "Lowercase characters (ex. a,b,c)\n"
  } else {
    lCString = ""
  }
  if (uppercaseValue) {
    var uCString = "Uppercase characters (ex. A,B,C)\n"
  } else {
    uCString = ""
  }
  if (numbersValue) {
    var numbersString = "Numbers (ex. 1,2,3)\n"
  } else {
    numbersString = ""
  }
  if (specialCharactersValue) {
    var sCString = "Special Characters (ex. !,@,#)\n"
  } else {
    sCString = ""
  }
  alert("Your password length is: " + lengthValue + "\n"
  + "You have selected to include:\n" +
  lCString + uCString + numbersString + sCString);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
