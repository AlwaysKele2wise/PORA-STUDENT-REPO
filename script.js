const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
//const password2 = document.getElementById('password2');


// show error function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success
function showSuccess(input){
   formControl = input.parentElement;
   formControl.className = 'form-control success'; 
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'email is required')
  } else {
    showSuccess(email);
  }
});
