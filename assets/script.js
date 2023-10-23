// Assignment Code
document.getElementById("generate").addEventListener("click", generatePassword);

// Write password to the #password input
function generatePassword() {
  // Prompt the user for password criteria
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");

    // Prompt for user to select the length of their password
    const passwordLength = prompt("Enter password length (8-32 characters):");

    // Checks to see if password length is within correct values
    if (passwordLength < 8 || passwordLength > 32) {
      alert("Password length must be between 8 and 32 characters.");
      return;
    }

     // Checks to see if atleast one character type has been selected
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("Please select at least one character type.");
    return;
  }

    // Generate the password based on selected character groups
    const password = generateRandomPassword(includeLowercase, includeUppercase, includeNumbers, includeSpecialChars, passwordLength);

    // Code that will display generated password
    alert("Your generated password is: " + password);
  }
  