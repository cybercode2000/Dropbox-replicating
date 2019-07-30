let name = document.querySelector('#name');
let password = document.querySelector('#password');
let submit = document.querySelector('#button');
let forgot = document.querySelector('#forgot');

name.value = '';

function login(){
    if(name.value === 'admin@gmail.com' && password.value === 'admin')
    alert('Login succcessfully');
    else 
    alert('pls enter a valid email and password');
}

submit.addEventListener('click', login);

function forg(){
    prompt('Pls Enter your Email address');
    alert('Pls kindly check your Email inbox to reset your assword');
}

forgot.addEventListener('click', forg);