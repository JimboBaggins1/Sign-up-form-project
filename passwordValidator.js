

document.getElementById('confPwd').addEventListener('focusout', validatePwd);
document.getElementById('pwd').addEventListener('focusout', validatePwd);


function validatePwd() {
    let pwd1 = document.getElementById('pwd');
    let pwd2 = document.getElementById('confPwd');

    console.log(pwd1.value);
    console.log(pwd2.value);
    if (pwd1.value != pwd2.value) {
        pwd1.classList.add('error');
        pwd2.classList.add('error');
    }else{
        pwd1.classList.remove('error');
        pwd2.classList.remove('error');
    }
}
