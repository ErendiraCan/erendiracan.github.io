const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// The submit button
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

// The if-else statements to check if the input info is correct
function checkInputs(){
  // To get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usernameValue === ''){
    setErrorFor(username, 'Username cannot be blank'); 
   }else{
     setSuccessFor(username);
   }
  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank'); 
   }else if(!isEmail(emailValue)){
      setErrorFor(email, 'Email is not valid'); 
   }else{
     setSuccessFor(email);
   }
  if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank'); 
   }else{
     setSuccessFor(password);
   }
   if(password2Value === ''){
    setErrorFor(password2, 'Password2 cannot be blank'); 
   }else if(passwordValue !== password2Value){
       setErrorFor(password2, 'Passwords Do not matchs'); 
     }else{
     setSuccessFor(password2);
   }
}

// Handling error inputs
function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  
  // To add error message inside small
  small.innerText = message;
  
  // To add error class
  formControl.className= 'form-control error';
}

// To show a success message
function setSuccessFor(input, message){
  const formControl = input.parentElement; //.form-control
  formControl.className= 'form-control success';
}

// This function is to validate the characters included in the email are valid
function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}