document.getElementById("btn").addEventListener("click", validateEmail);
document.getElementById("dismiss").addEventListener("click",dismiss);
const container = document.getElementById('container');
const success = document.getElementById('success');
const error = document.getElementById('error');
var emailInput = document.getElementById("email");
function display(){
   container.style.display = 'none';
   success.style.display = 'flex';
}

function validateEmail() {
  
   var email = emailInput.value;
   const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (email.match(validEmail)) {
      display();
   }
   else{
      emailInput.classList.remove("input-before");
      emailInput.classList.add("input-after");
      error.style.display="flex";
   }
}
function dismiss(){
   success.style.display = 'none';
   container.style.display = 'flex';
   emailInput.value= '';
}