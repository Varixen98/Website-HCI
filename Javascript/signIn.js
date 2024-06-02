document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("submit!");

    let valid = true;

    //validasi email
    let email = document.getElementById('email').value;
    if(email == ""){
        valid = false;
        document.getElementById('emailError').innerText="Please enter an email address!";
    }
    else if(!email.includes('@')){
        valid = false;
        document.getElementById('emailError').innerText="Please enter a valid email address!";
    }
    else{
        document.getElementById('emailError').innerText="";
    }

    //validasi password (alphanumeric)
    let password = document.getElementById('password').value;
    if (!isAlphanaumeric(password)) {
        valid = false;
        document.getElementById('passwordError').innerText = "Must be alpha numeric!";
    } else {
        document.getElementById('passwordError').innerText = "";
    }

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