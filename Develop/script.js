// Assignment code here

var ranPass = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log("hello");

//pull from array and render on form
function generatePassword(upperCase, lowerCase, numbers, special, length) {
  console.log(upperCase, lowerCase, numbers, special)
  var generatedPassword = '';
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      numbers = [1,2,3,4,5,6,7,8,9,0],
      special = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"]
  
  for (var i = 0; i < length; i++) {

    var tempArray = [];
    if(upperCase){
      var character = letters[Math.floor(Math.random() * letters.length - 1)];
      console.log(character)
      tempArray.push(character.toUpperCase())
    }
    if(lowerCase){
      tempArray.push(letters[Math.floor(Math.random() * letters.length - 1)]);
    }
    if(numbers){
      tempArray.push(numbers[Math.floor(Math.random() * numbers.length - 1)]);
    }
    if(special){
      tempArray.push(special[Math.floor(Math.random() * special.length - 1)])
    }
    generatedPassword += tempArray[Math.floor(Math.random() * tempArray.length - 1)]
  }
    
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var characterLength = prompt(
    "how long would you like your password to be?(between 8 - 128)"
  );

  var confirmUpper = confirm(
    "would you like upper case letters? (ok = YES, cancel = NO"
  );


  var confirmLower = confirm(
    "would you like lower case letters? (ok = YES, cancel = NO"
  );
  

  var numConfirm = confirm("would you like nunmbers? ok = YES, cancel = NO");
  

  var specCharConfirm = confirm(
    "would you like special characters? ok = YES, cancel = NO"
  );

  var passwordText = document.querySelector("#password");
  
  passwordText.value = generatePassword(confirmUpper, confirmLower, numConfirm, specCharConfirm, characterLength);

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  // for(var i = 0; i < questions.length; i++)
  // //ask what characters you want
  // confirm(questions[i].question)


//special characters you will have to escape maybe the backslash "/"
