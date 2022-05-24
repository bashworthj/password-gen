// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for Password
// I used the split method to turn my long stings into an array

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowercase.split("");
var numbers = "0123456789";
var numberArray = numbers.split("");
var special = "#$%&()*+,-./:;<=>?";
var specialArray = special.split("");
var uppercase = lowercase.toUpperCase();
var upperArray = uppercase.split("");
var input = "";
var lower;
var num;
var silly; 
var upper;


function passGen() {
  // Added a prompt to specify the desired amount of characters. 
  // If the input is not with in defined paramaters the funtion returns and doesnt continue criteria prompts.
  var input = parseInt(prompt("Choose a lenght between 8 and 128"));
  if (input < 8 || input > 128) {
    alert("WRONG! Please select a number between 8 and 128");
  } if (!isFinite(input)) {
    alert("Must select an interger value between 8 and 128");
  } if (input >= 8 && input <= 128){ 
 
  


    var lower = confirm("Include Lowercase Letters");
    var num = confirm("Include Numbers?");
    var silly = confirm("Include Special Characters");
    var upper = confirm("Include Uppercase Letters?");

    var selectedCriteria = [];
    var results = "";


    if (lower) {
      for(var i of lowerArray)
      selectedCriteria.push(i);
    } if (num) {
      for(var i of numberArray)
      selectedCriteria.push(i);
    } if (silly) {
      for(var i of specialArray)
      selectedCriteria.push(i);
    } if (upper) {
      for(var i of upperArray)
      selectedCriteria.push(i);
    } if (lower === false && num === false && silly === false && upper === false) {
      alert("One Criteria must be selected to generate your password.");
    }
    for (var i = 0; i < input; i++) {
     results = results + selectedCriteria[Math.floor(Math.random()) * selectedCriteria.length]

      return results;
    }
  }
}
  // Write password to the #password input
  function writePassword() {
    var password = passGen();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);