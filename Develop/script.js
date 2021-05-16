// Assignment code here
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
];

var ranPass = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log("hello");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(ranPass)
  
  passwordText.value = ranPass.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var characterLength = prompt(
    "how long would you like your password to be?(between 8 - 128)"
  );
  console.log(characterLength);

  var confirmUpper = confirm(
    "would you like upper case letters? (ok = YES, cancel = NO"
  );
  if (confirmUpper) {
    var upperArray =
      upperCase[Math.floor(Math.random() * upperCase.length - 1)];
    ranPass.push(upperArray);
    console.log("upperArray");
    console.log(upperArray);
    console.log("ranPass");
    console.log(ranPass);
  }

  var confirmLower = confirm(
    "would you like lower case letters? (ok = YES, cancel = NO"
  );
  if (confirmLower) {
    var lowerArray =
      lowerCase[Math.floor(Math.random() * lowerCase.length - 1)];
    ranPass.push(lowerArray);
    console.log("lowerArray");
    console.log(lowerArray);
    console.log("ranPass");
    console.log(ranPass);
  }

  var numConfir = confirm("would you like nunmbers? ok = YES, cancel = NO");
  if (numConfir) {
    var numArray = numbers[Math.floor(Math.random() * numbers.length - 1)];
    ranPass.push(numArray);
    console.log("numArray");
    console.log(numArray);
    console.log("ranPass");
    console.log(ranPass);
  }

  var specCharConfirm = confirm(
    "would you like special characters? ok = YES, cancel = NO"
  );
  if (specCharConfirm) {
    var specArray =
      specialCharacters[
        Math.floor(Math.random() * specialCharacters.length - 1)
      ];
    ranPass.push(specArray);
    console.log("specArray");
    console.log(specArray);
    console.log("ranPass")
    console.log(ranPass)
  }
  // for(var i = 0; i < questions.length; i++)
  // //ask what characters you want
  // confirm(questions[i].question)
}

//special characters you will have to escape maybe the backslash "/"
