// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var numbers =
  var special = "#$%&()*+,-./:;<=>?"
  var upperCase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a value between 8 and 128"));

  if(input >= 8 && input <= 128){
  } else {
    alert("please");

  }

  return "";
}



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
