var email = document.getElementById('email');
var senha = document.getElementById('senha');

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#000"
})
senha.addEventListener('focus', ()=>{
    senha.style.borderColor = "#000"
})