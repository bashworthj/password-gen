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
//with the confirm variables set to true i then run if statements
//if true i take my empty area assigned to variable selected criteria and add corellating arrays.
  }
    if (lower) {
    
      selectedCriteria = selectedCriteria.concat(lowerArray);
    } if (num) {
     
      selectedCriteria = selectedCriteria.concat(numberArray);
    } if (silly) {
      
      selectedCriteria = selectedCriteria.concat(specialArray);
    } if (upper) {
      
      selectedCriteria = selectedCriteria.concat(upperArray);
    } if (lower === false && num === false && silly === false && upper === false) {
      alert("One Criteria must be selected to generate your password.");
    } console.log(input);
    for (var i = 0; i < input; i++) {
     results += selectedCriteria[Math.floor(Math.random()
       * selectedCriteria.length)]

      
    }
    return results;
  }

  // Write password to the #password input
  function writePassword() {
    var password = passGen();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);