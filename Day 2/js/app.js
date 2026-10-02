/*=== EDUTRACK STUDENT PORTAL REGISTRATION DAY 2 ===*/

const registrationForm = document.getElementID("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementID("name").value.trim();

    const surname = document.getElementID("surname").value.trim();

    const studentID = document.getElementID("studentID").value.trim();

    const email = document.getElementID("email").value.trim();

    const username = document.getElementID("username").value.trim();

    const password = document.getElementID("password").value.trim();

    const confirmPassword = document.getElementID("confirmPassword").value.trim();

    // validate empty fields

    if (name === "" || surname === "" || studentID === "" || email === "" || username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all required fields. Fields cannot be blank.");
        return;
    }

    /*===PASSWORD VALIDATION===*/

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return;
    }

    /*===REGISTRATION SUCCESS MESSAGE===*/

    alert("Registration successful! Welcome to the Edutrack Student Portal.");
})