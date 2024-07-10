var signName = document.getElementById('signUpName');
var signEmail = document.getElementById('signUpEmail');
var signPassword = document.getElementById('signUpPassword');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'));
} else {
    user = [];
}

function addPerson() {
    if (signName.value == '' || signEmail.value == '' || signPassword.value == '') {
        document.getElementById('popup').innerHTML = `<p class="text-danger mb-5">All inputs is required</p>`;
    } else {
        var person = {
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value,
        };
        user.push(person);
        localStorage.setItem('user', JSON.stringify(user));
        location.href = '../Login/index.html';
    }
}