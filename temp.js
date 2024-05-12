const id = (id) => document.getElementById(id);

const form = id("myForm"),
  nameInput = id("name"),
  emailInput = id("email"),
  numberInput = id("mobile"),
  descInput = id("desc"),
  submitBtn = id("submit");

const nameError = id("nameError"),
  emailError = id("emailError"),
  numError = id("numError"),
  addressError = id("descError");

function showError(input, message) {
  const formBox = input.parentElement;
  const errorMessage = formBox.querySelector(".error-message");
  errorMessage.innerText = message;
}

function clearError(input) {
  const formBox = input.parentElement;
  const errorMessage = formBox.querySelector(".error-message");
  errorMessage.innerText = "";
}

function validateName(input) {
  const nameRegex = /^[a-zA-Z. ]+$/;

  if (input.value.trim() === "") {
    showError(input, "Name is required");
    return false;
  }
  else if(!nameRegex.test(input.value.trim())){
    showError(input, "Please Enter Char Only")
  }
  else if(input.value.trim().length <3){
    showError(input, "Minimum 3 Char is required")
  }
  else {
    clearError(input);
    return true;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (input.value.trim() === "") {
    showError(input, "Email is required");
    return false;
  } else if (!emailRegex.test(input.value.trim())) {
    showError(input, "Invalid email address");
    return false;
  } else {
    clearError(input);
    return true;
  }
}

function validateNumber(input) {
    const numberRegex = /^(?!123|4)\d{10}$/;
  if (input.value.trim() === "") {
    showError(input, "Mobile number is required");
    return false;
  } else if (!numberRegex.test(input.value.trim())) {
    showError(input, "Invalid mobile number");
    return false;
  } else {
    clearError(input);
    return true;
  }
}

function validateDesc(input) {
  if (input.value.trim() === "") {
    showError(input, "Description is required");
    return false;
  } else {
    clearError(input);
    return true;
  }
}

function validateForm() {
  let isNameValid = validateName(nameInput);
  let isEmailValid = validateEmail(emailInput);
  let isNumberValid = validateNumber(numberInput);
  let isAddressValid = validateDesc(descInput);

  return isNameValid && isEmailValid && isNumberValid && isAddressValid;
}

nameInput.addEventListener("blur", () => validateName(nameInput));
emailInput.addEventListener("blur", () => validateEmail(emailInput));
numberInput.addEventListener("blur", () => validateNumber(numberInput));
descInput.addEventListener("blur", () => validateDesc(descInput));
 
// nameInput.addEventListener("input", () => validateName(nameInput));
// emailInput.addEventListener("input", () => validateEmail(emailInput));
// numberInput.addEventListener("input", () => validateNumber(numberInput));
// descInput.addEventListener("input", () => validateDesc(descInput));

form.addEventListener("submit", (e) => {
  clearError(nameInput);
  clearError(emailInput);
  clearError(descInput);
  clearError(numberInput);

  // Validate the form
  if (!validateForm()) {
    e.preventDefault();
  }
});