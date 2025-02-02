
 
const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const alertMessage = document.getElementById("alertMessage");

showRegisterBtn.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  showRegisterBtn.classList.replace("btn-secondary", "btn-primary");
  showLoginBtn.classList.replace("btn-primary", "btn-secondary");
  clearAlert();
});

showLoginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  showLoginBtn.classList.replace("btn-secondary", "btn-primary");
  showRegisterBtn.classList.replace("btn-primary", "btn-secondary");
  clearAlert();
});

 
function showAlert(message, type = "success") {
  alertMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(clearAlert, 3000);
}

function clearAlert() {
  alertMessage.innerHTML = "";
}

 
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;

  if (fullName && email && password) {
     
    const user = { fullName, email, password };

     
    localStorage.setItem("user", JSON.stringify(user));
    showAlert("Registration successful!", "success");

     
    document.getElementById("registrationForm").reset();
  } else {
    showAlert("Please fill in all fields.", "danger");
  }
});

 
document.getElementById("loginFormElement").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  
  const storedUser = JSON.parse(localStorage.getItem("user"));

   
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    showAlert("Login successful!", "success");
    
  } else {
    showAlert("Invalid credentials. Please try again.", "danger");
  }
});