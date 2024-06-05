
function Validation(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    $('#messageError').text("");

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = $('#message').val();

    let isValid = true;

    // Name validation
    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email address.";
        isValid = false;
    }

    // Message validation using jQuery
    if (message.trim() === "") {
        $('#messageError').text("Message is required.");
        isValid = false;
    }

    // If all fields are valid, proceed with form submission or further processing
    if (isValid) {
        // Code to handle form submission or further processing
        alert("Form submitted successfully!");
    }
}



//validation for the form
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Form validation
    if (!name || !email) {
        alert('Please enter your name and email.');
        return; // Exit the function if validation fails
    }

    // Store user info in session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);

    // Redirect to index.html
    window.location.href = 'premimum_index.html';
}

function isUserLoggedIn() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');

    return name && email;
}

// Check if the user is logged in when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (isUserLoggedIn()) {
        const loginLink = document.getElementById('login-link');
        loginLink.parentNode.removeChild(loginLink);
    }
});






















// function handleLogin(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();

//     // Form validation
//     if (!name || !email) {
//         alert('Please enter your name and email.');
//         return; // Exit the function if validation fails
//     }

//     // Store user info in session storage
//     sessionStorage.setItem('name', name);
//     sessionStorage.setItem('email', email);

//     // Redirect to index.html
//     window.location.href = 'premimum_index.html';
// }


