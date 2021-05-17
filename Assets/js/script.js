// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//pull from array and render on form
function generatePassword(
  upperCase,
  lowerCase,
  numbersConfirm,
  specialChar,
  length
) {
  console.log(upperCase, lowerCase, numbersConfirm, specialChar);
  var generatedPassword = "";
  var letters = [
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
    ],
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    special = [
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
      "]",
      "^",
      "_",
      "{",
      "}",
      "|",
      "~",
    ];

  for (var i = 0; i < length; i++) {
    var tempArray = [];
    console.log(tempArray);
    console.log({ upperCase, lowerCase, numbersConfirm, specialChar });
    if (upperCase) {
      var character = letters[Math.floor(Math.random() * letters.length)];
      console.log(character);
      tempArray.push(character.toUpperCase());
    }
    if (lowerCase) {
      tempArray.push(letters[Math.floor(Math.random() * letters.length)]);
    }
    if (numbersConfirm) {
      tempArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (specialChar) {
      tempArray.push(special[Math.floor(Math.random() * special.length)]);
    }
    generatedPassword =+
      tempArray[Math.floor(Math.random() * tempArray.length)];
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var characterLength = prompt(
    "how long would you like your password to be?(between 8 - 128)"
  );
  if (characterLength < 8 || characterLength > 128) {
    writePassword()
    console.log(characterLength);
  }
  var confirmUpper = confirm(
    "would you like upper case letters? (ok = YES, cancel = NO"
  );
  console.log(confirmUpper);

  var confirmLower = confirm(
    "would you like lower case letters? (ok = YES, cancel = NO"
  );
  console.log(confirmLower);

  var numConfirm = confirm("would you like numbers? ok = YES, cancel = NO");
  console.log(numConfirm);

  var specCharConfirm = confirm(
    "would you like special characters? ok = YES, cancel = NO"
  );
  console.log(specCharConfirm);

  if (!confirmLower && !confirmUpper && !numConfirm && !specCharConfirm) {
    alert("Please choose at least one option");
    writePassword();
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword(
    confirmUpper,
    confirmLower,
    numConfirm,
    specCharConfirm,
    characterLength
  );
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//special characters you will have to escape maybe the backslash "/"
