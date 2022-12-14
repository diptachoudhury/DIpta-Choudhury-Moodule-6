
const firstName = document.getElementById('validationCustom01')
const lastName = document.getElementById('validationCustom02')
const email = document.getElementById('email')
const password = document.getElementById('validationCustom03')
const stateName = document.getElementById('validationCustom04')
const confirmPassword = document.getElementById('validationCustom05')
const agreementCheck = document.getElementById('invalidCheck')
const checkBox = document.getElementById('invalidCheck')
const firstNameValidity = document.getElementById('firstNameValidity')
const lastNameValidity = document.getElementById('lastNameValidity')
const emailValidity = document.getElementById('emailValidity')
const emailBlank = document.getElementById('emailBlank')
const passwordValidity = document.getElementById('passwordValidity')
const confirmPasswordValidity = document.getElementById('confirmPasswordValidity')
const checkBoxValidity = document.getElementById('checkBoxValidity')


const validateData = () => {
  if (firstName.value.length < 3){
     firstNameValidity.innerHTML = "Please enter a valid first name"
  }
  else{
    firstNameValidity.innerHTML = ""
  }

  if (lastName.value.length < 3){
    lastNameValidity.innerHTML = "Please enter a valid last name"
 }
 else{
   lastNameValidity.innerHTML = ""
 }

 if(email.value.length == 0){
    emailBlank.innerHTML = "email cannot be blank"
 }
 else {
    emailBlank.innerHTML = ""
 }



 const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/
 const value = email.value;
 if(!value.match(regx)){
  emailValidity.innerHTML= "Enter a valid email address"
 }
 else {
    emailValidity.innerHTML= ""
 }

 const regxPassword = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
 const pass = password.value;
 if(!pass.match(regxPassword)){
    passwordValidity.innerHTML= "Enter a valid password"
 }
 else {
    passwordValidity.innerHTML= ""
 }

 if(password.value != confirmPassword.value){
    confirmPasswordValidity.innerHTML = "Password and confirm password don't match"
 }
 else{
    confirmPasswordValidity.innerHTML= ""
 }

 if(!checkBox.checked){
    checkBoxValidity.innerHTML = "You must agree before submitting"
 }
 else{
    checkBoxValidity.innerHTML = ""
 }

 if(!firstName.value.length < 3 && !lastName.value.length < 3 && email.value.length != 0 && value.match(regx) && pass.match(regxPassword) && checkBox.checked){
    alert("Your details have been saved successfully");
 }
}
