const form = document.getElementById("form");
const firstnme_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_msg = document.getElementById("error-msg");

form.addEventListener('submit', (e) => {
    let errors = [];
    if (firstnme_input) {
        errors = getsignupformErrors(firstnme_input.value, email_input.value, password_input.value, repeat_password_input.value);
    } else {
        errors = getloginformErrors(email_input.value, password_input.value);
    }
    if (errors.length > 0) {
        e.preventDefault();
        error_msg.innerText = errors.join(".");
    }
});

function getloginformErrors(email, password) {
    let errors = [];
    if (email === '' || email == null) {
        errors.push('email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}

function getsignupformErrors(firstname, email, password, repeatpassword) {
    let errors = [];
    if (firstname === '' || firstname == null) {
        errors.push('firstname is required');
        firstnme_input.parentElement.classList.add('incorrect');
    }
    if (email === '' || email == null) {
        errors.push('email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if(password.length < 8){
        errors.push('password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatpassword) {
        errors.push('password does not match repeated password');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    return errors;
};



const allinputs = [firstnme_input, email_input, password_input, repeat_password_input];

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_msg.innerText = ""
        } 
    })
});







