function validation_signIn(e){
    e.preventDefault();
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;  
    

    if(emailInput == ""){
        document.getElementById("emailError").innerText="Please enter your email address!";
    }
    else{
        if(emailChecker(emailInput)){
            document.getElementById("emailError").innerText="";
        }
        else{
            document.getElementById("emailError").innerText="Enter a valid email!";
        }
    }
    
    if(passwordInput == ""){
        document.getElementById("passwordError").innerText="Please enter your password!";
    }
    else if(passwordInput.length <= 8){
        document.getElementById("passwordError").innerText="Password must be more than 8 characters!";
    }
    else{
        if(passwordChecker(passwordInput)){
            document.getElementById("passwordError").innerText="";
        }
        else{
            document.getElementById("passwordError").innerText="Enter a valid password!";
        }
    }
    

    if(emailChecker(emailInput) && passwordChecker(passwordInput)){
        alert("Login Successfull!");
    }
}


//check email
//kriteria harus ada symbol '@'
function emailChecker(emailInput){
    var validity = false;

    if(emailInput.includes('@')){
        validity = true;
    }

    return validity;
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