const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value 
        .trim()

    // validate empty fields

    if (username === "" || password === "") {
        alert("Please enter both a valid username and password. Fields cannot be blank.");
        return;
    }

    // Authentication will be implemented using IndexedDB in later developement stages

    alert("Login validation successful. Welcome back student!")
});