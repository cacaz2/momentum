const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);


function onLoginSubmit (event) {
    event.preventDefault();
    localStorage.setItem("username",loginInput.value);
    const username = localStorage.getItem("username");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    paintGreeting(username)
}

function paintGreeting (username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}