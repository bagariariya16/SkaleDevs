const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
WebSecurity.ResetPassword(passwordResetToken,newPassword)

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 10);
});

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});

// Initialize Userfront
Userfront.init("demo1234");
Userfront.resetPassword({
  password: "myshinynewpassword",
});
Userfront.init("demo1234");

var passwordResetFormEl = document.getElementById("password-reset-form");
var alertEl = document.getElementById("alert");
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");

function formResetPassword(e) {
 
  e.preventDefault();
  
  setAlert();
  
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }

  Userfront.resetPassword({
    password: password,
  }).catch(function(error) {
    setAlert(error.message);
  });
}


function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

{
  newPassword = Request["newPassword"];
  confirmPassword = Request["confirmPassword"];
  token = Request["token"];
  if IsPost
  {
      // input testing is ommitted here to save space
      retunValue = ResetPassword(token, newPassword);
  }
  }