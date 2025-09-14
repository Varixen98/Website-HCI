
function validation_register(e){
    e.preventDefault();

    // baca data dari input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dobInput = document.getElementById("dob").value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var terms = document.getElementById('terms').checked;

    var validity = false;

    // first name
    if(firstName == ""){
        document.getElementById('firstNameError').innerText = "Please enter your name!";
    }
    else{
        if(firstNameChecker(firstName)){
            document.getElementById('firstNameError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('firstNameError').innerText = "Your name must be more than 1 character";
        }
    }

    //last name
    if(lastName == ""){
        document.getElementById('lastNameError').innerText = "Please enter your name!";
    }
    else{
        if(firstNameChecker(lastName)){
            document.getElementById('lastNameError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('lastNameError').innerText = "Your name must be more than 1 character";
        }
    }

    // date of birth
    if(dobInput == ""){
        document.getElementById('dobError').innerText = "Please input your date of birth!";
    }
    else{
        if(dobChecker(dobInput)){
            document.getElementById('dobError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('dobError').innerText = "Invalid date of birth";
        }
    }

    //address
    if(address == ""){
        document.getElementById('addressError').innerText = "Please input your address!";
    }
    else{
        if(addressChecker(address)){
            document.getElementById('addressError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('addressError').innerText = "Address must be more than 5 characters";
        }
    }

    //phone number
    if(phone == ""){
        document.getElementById('phoneNumberError').innerText = "Please input your phone number!";
    }
    else{
        if(phoneNumberChecker(phone)){
            document.getElementById('phoneNumberError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('phoneNumberError').innerText = "Phone number must be at least 10 digits";
        }
    }

    //gender
    if (!gender) {
        valid = false;
        document.getElementById('genderError').innerText = "Please select your gender!";
    } else {
        document.getElementById('genderError').innerText = "";
        validity = true;
    }

    //email
    if(email == ""){
        document.getElementById('emailError').innerText = "Please input your email!";
    }
    else{
        if(emailChecker(email)){
            document.getElementById('emailError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('emailError').innerText = "Email must use @ symbol";
        }
    }

    //password
    if(passwordInput == ""){
        document.getElementById('passwordError').innerText = "Please input a password!";
    }
    else if(passwordInput.length <= 8){
        document.getElementById('passwordError').innerText = "Password must contain more than 8 characters";
    }
    else{
        if(passwordChecker(passwordInput)){
            document.getElementById('passwordError').innerText = "";
            validity = true;
        }
        else{
            document.getElementById('passwordError').innerText = "Invalid password";
        }
    }

    if(passwordInput == ""){
        document.getElementById('confirmPasswordError').innerText = "";
    }
    else if(passwordInput == confirmPassword){
        document.getElementById('confirmPasswordError').innerText = "";
        validity = true;
    }
    else{
        document.getElementById('confirmPasswordError').innerText = "Does not match! Please re-enter your password";
    }

    // terms and condition
    if (!terms) {
        valid = false;
        document.getElementById('termsError').innerText = "You must agree to the terms and conditions!";
    } else {
        document.getElementById('termsError').innerText = "";
        validity = true;
    }

    if(validity){
        alert("Registration complete!");
    }

}

// check first dan last Name
//kriteria harus lebih dari 1 karakter
function firstNameChecker(firstName){

    if(firstName.length <= 1){
        return false;
    }

    return true;
}

function lastNameChecker(lastName){

    if(lastName.length <= 1){
        return false;
    }

    return true;
}

// check date of birth
//kriteria dob tidak boleh lebih dari tanggal sekarang / future date tidak boleh
function dobChecker(dobInput){
    let dateNow = new Date();
    let dateInput = new Date(dobInput);
    if(dateInput > dateNow){
        return false;
    }
    return true;
}

//check email address
//kriteria harus menggunakan symbol '@'
function emailChecker(emailInput){
    if(!emailInput.includes('@')){
        return false;
    }

    return true;
}


//check address
//kriteria address harus lebih dari 5 karakter
function addressChecker(address){
    if(address.length <= 5){
        return false;
    }

    return true;
}

//check phone number
//kriteria harus sama dengan atau lebih dari 10 digit
function phoneNumberChecker(phone){
    if(phone.length < 10){
        return false;
    }
    return true;
}

// check password 
//kriteria harus ada lower, upper, number, symbol
function passwordChecker(passwordInput){

    var hasLower = false;
    var hasUpper = false;
    var hasNumber = false;
    var hasSymbol = false;
    var symbol = ['!', '@', '#', '$'];

    if(passwordInput.length <= 8){
        return hasLower && hasUpper && hasSymbol && hasNumber;
    }


    for(let i = 0; i < passwordInput.length; i++){
        if(passwordInput[i] >= 'A' && passwordInput[i] <= 'Z'){
            hasUpper = true;
        }
        else if(passwordInput[i] >= 'a' && passwordInput[i] <= 'z'){
            hasLower = true;
        }
        else if(passwordInput[i] >= '0' && passwordInput[i] <= '9'){
            hasNumber = true;
        }
        else if(symbol.includes(passwordInput[i])){
            hasSymbol = true;
        }
    }

    return hasLower && hasUpper && hasSymbol && hasNumber;
}