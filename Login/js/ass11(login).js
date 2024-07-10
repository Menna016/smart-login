var signEmail = document.getElementById('signUpEmail');
var signPassword = document.getElementById('signUpPassword');
var user = [];

if (localStorage.getItem('user') != null) {
  user = JSON.parse(localStorage.getItem('user'));
}

document.getElementById('login').addEventListener('click', function(){
    if(signEmail.value == '' || signPassword.value == ''){
        document.getElementById('popup').innerHTML = `<p class="text-danger mb-5">All inputs is required</p>`
    }else{
       checkUser(); 
    }
});


function checkUser() {
  var userFound = false;
  for (var i = 0; i < user.length; i++) {
      if (signEmail.value === user[i].email && signPassword.value === user[i].password) {
          var y = user[i].name;
          localStorage.setItem('userName', y);
          location.href = '../home/index.html';
          userFound = true;
          break;
      }
  }
  if (!userFound) {
      document.getElementById('popup').innerHTML = `<p class="text-danger mb-5">Invalid email or password</p>`;
  }
}