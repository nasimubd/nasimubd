
document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById('loginButton');
    var logoutButton = document.getElementById('logoutButton');
    var loginModal = document.getElementById('loginModal');
    var closeModal = document.getElementById('closeModal');
    var submitLogin = document.getElementById('submitLogin');

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    // When the user clicks the login button, open the modal 
    loginButton.onclick = function () {
        loginModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function () {
        loginModal.style.display = "none";
    }

    // Form validation function
    function validateForm() {
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Please enter your name.");
            return false;
        }

        if (email === "") {
            alert("Please enter your email.");
            return false;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    // When the user clicks the submit button in the login form, validate the form
    submitLogin.onclick = function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            loginModal.style.display = "none";
            loginButton.style.display = "none";
            logoutButton.style.display = "block";
        }
    }

    // When the user clicks the logout button, simulate logout
    logoutButton.onclick = function () {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }
});
