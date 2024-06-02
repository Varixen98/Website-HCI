document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("submit!");

    let valid = true;

    // validasi first name
    let firstName = document.getElementById('firstName').value;
    if (firstName.length <= 1) {
        valid = false;
        document.getElementById('firstNameError').innerText = "Must be more than 1 character!";
    } else {
        document.getElementById('firstNameError').innerText = "";
    }

    // validasi last name
    let lastName = document.getElementById('lastName').value;
    if (lastName.length <= 1) {
        valid = false;
        document.getElementById('lastNameError').innerText = "Must be more than 1 character!";
    } else {
        document.getElementById('lastNameError').innerText = "";
    }

    // validasi address
    let address = document.getElementById('address').value;
    if (address.length < 5) {
        valid = false;
        document.getElementById('addressError').innerText = "Must be at least 5 characters long!";
    } else {
        document.getElementById('addressError').innerText = "";
    }

    // validasi phone number
    let phone = document.getElementById('phone').value;
    if (phone.length < 10) {
        valid = false;
        document.getElementById('PhoneNumberError').innerText = "Must be at least 10 digits!";
    } else {
        document.getElementById('PhoneNumberError').innerText = "";
    }

    // validasi gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        valid = false;
        document.getElementById('genderError').innerText = "Please select your gender!";
    } else {
        document.getElementById('genderError').innerText = "";
    }

    // validasi email
    let email = document.getElementById('email').value;
    if(email == ""){
        valid = false;
        document.getElementById('emailError').innerText = "Please enter an email address!"
    }
    else if (!email.includes('@')) {
        valid = false;
        document.getElementById('emailError').innerText = "Please enter a valid email address!";
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // validasi password
    let password = document.getElementById('password').value;
    if (!isAlphanaumeric(password)) {
        valid = false;
        document.getElementById('passwordError').innerText = "Must be alpha numeric!";
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    // validasi confirm password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        valid = false;
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match!";
    } else {
        document.getElementById('confirmPasswordError').innerText = "";
    }

    // validasi terms and conditions
    let terms = document.getElementById('terms').checked;
    if (!terms) {
        valid = false;
        document.getElementById('termsError').innerText = "You must agree to the terms and conditions!";
    } else {
        document.getElementById('termsError').innerText = "";
    }

    if (!valid) {
        event.preventDefault();
        return;
    }

    // If the form is valid, you can submit the form or do other actions
    // e.g., submit the form via AJAX, etc.
});

function isAlphanaumeric(password){
    let hasLetter = false;
    let hasNumber = false;
    let hasSymbol = false;
    for(let i = 0; i < password.length; i++){
        const c = password[i];
        if(c >= 'a' && c <= 'z' && c >= 'A' && c <= 'Z'){
            hasLetter = true;
        }
        else if(c >= '0' && c <= '9'){
            hasNumber = true;
        } 
        else{
            hasSymbol = true;
        }
    }

    return ((hasLetter && hasNumber) && !hasSymbol);
}