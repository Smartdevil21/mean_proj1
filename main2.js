let usernameOutput = document.querySelector("#username_output");
let emailOutput = document.querySelector("#email_output");
let contactOutput = document.querySelector("#contact_output");

usernameOutput.innerHTML = localStorage.getItem("username");
emailOutput.innerHTML = localStorage.getItem("email");
contactOutput.innerHTML = localStorage.getItem("contact");
