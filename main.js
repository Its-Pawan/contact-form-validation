const id = (id) => document.getElementById(id)
const form = id('form'), nameInput = id('username'), email = id('email'), contact = id("contact"), desc = id("desc")
const errHolder = document.querySelectorAll('.err-holder')

const nameRegex = /^[a-zA-Z. ]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^(?![1234])\d{10}$/;
const textRegex = /^[\s\S]{0,250}$/;

function validation(field, errMgs, regex, validateOn) {
    if (field.value.trim() === "") {
        errMgs.innerText = "This field is required";
        errMgs.classList.add("error");
        return false;
    }
    else if (validateOn === 'name' && field.value.trim().length <= 2) {
        errMgs.innerText = `Invalid length of ${validateOn}`;
        errMgs.classList.add("error");
        return false
    }
    else if (validateOn === 'number' && isNaN(field.value.trim())) {
        errMgs.innerText = `Contact should contain only numbers`;
        errMgs.classList.add("error");
        return false
    }
    else if (validateOn === 'number' && field.value.trim().length !== 10) {
        errMgs.innerText = `Invalid length of ${validateOn}`;
        errMgs.classList.add("error");
        return false
    }
    else if (validateOn === 'description' && field.value.trim().length >= 10) {
        errMgs.innerText = `You have reached max length of 250 characters`;
        errMgs.classList.add("error");
        return false
    }
    else if (!regex.test(field.value.trim())) {
        errMgs.innerText = `Invalid ${validateOn}`;
        errMgs.classList.add("error");
        return false
    }
    else {
        errMgs.innerText = "";
        errMgs.classList.remove("error");
        return true
    }
}

form.addEventListener('submit', function (event) {

    const isNameValid = validation(nameInput, errHolder[0], nameRegex, "name");
    const isEmailValid = validation(email, errHolder[1], emailRegex, "email");
    const isContactValid = validation(contact, errHolder[2], numberRegex, "number");
    const isDescriptionValid = validation(desc, errHolder[3], textRegex, "description");

    if (isNameValid && isEmailValid && isContactValid && isDescriptionValid) {
        console.log(nameInput.value)
        console.log(email.value)
        console.log(contact.value)
        console.log(desc.value)
        event.preventDefault();
    }

    else if (!isNameValid || !isEmailValid || !isContactValid || !isDescriptionValid) {
        nameInput.addEventListener('keyup', () => {
            validation(nameInput, errHolder[0], nameRegex, "name");
        })
        email.addEventListener('keyup', () => {
            validation(email, errHolder[1], emailRegex, "email");
        })
        contact.addEventListener('keyup', () => {
            validation(contact, errHolder[2], numberRegex, "number")
        })
        desc.addEventListener('keyup', () => {
            validation(desc, errHolder[3], textRegex, "description")
        })
        event.preventDefault();
    }
}); 