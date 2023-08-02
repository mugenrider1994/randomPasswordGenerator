// Arrays of special characters, uppercase letters, lowercase letters, and numbers
var specialCharacters = ["!",'\"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Constants for minimum and maximum number of characters in the password
const minNumberOfChars = 8;
const maxNumberOfChars = 128;

// Get references to the #generate element (HTML button for generating password)
var generateBtn = document.querySelector("#generate");

// Function to write the generated password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to prompt user for password criteria and generate the password
function generatePassword() {
  let isLengthValid = false;
  let len = parseInt(prompt("How long? (8-128)"));
  while(!isLengthValid) {
      if(len >= minNumberOfChars && len <= maxNumberOfChars) {
          isLengthValid = true;
      } else {
          len = parseInt(prompt("Invalid range. How long? (8-128)"));
      }
  }
  
  // Prompt user for including uppercase, lowercase, special characters, and numbers
  uc = prompt("Include uppercase letters? (y/n)").toLowerCase() === 'y';
  lc = prompt("Lowercase letters? (y/n)").toLowerCase() === 'y';
  spec = prompt("Special characters? (y/n)").toLowerCase() === 'y';
  num = prompt("Numbers? (y/n)").toLowerCase() === 'y';

  // Call createPassword function to generate the password based on the criteria
  retval = createPassword(len, uc, lc, spec, num)

  return retval;
}

// Function to create a password by randomly selecting characters from each selected criteria
function createPassword(len, uc, lc, spec, num) {
  allowedChars = [];

  if(uc) {
      allowedChars = allowedChars.concat(upperCase);
      console.log("Uppercase");
  }
  if(lc) {
      allowedChars = allowedChars.concat(lowerCase);
      console.log("Lowercase");
  }
  if(spec) {
      allowedChars = allowedChars.concat(specialCharacters);
      console.log("Special");
  }
  if(num) {
      allowedChars = allowedChars.concat(numbers);
      console.log("Number");
  }

  arrayLen = allowedChars.length;
  console.log("Test: " + arrayLen);
  console.log("Test: " + allowedChars);
  password = '';
  for(var i = 0; i < len; i++) {
      rand1 = generateRandomInt(0, arrayLen - 1);
      if(allowedChars[rand1] == undefined) {
          console.log(rand1 + " LOOK!");
          console.log(arrayLen);
      }
      password += allowedChars[rand1];
  }
  return password;
}

// Function to generate a random integer between min and max (inclusive)
function generateRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Add event listener to the #generate button, triggering writePassword function on click
generateBtn.addEventListener("click", writePassword);