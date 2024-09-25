// Get form and message display elements
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Function to validate email format using regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Check if any fields are empty
    if (!name || !email || !subject || !message) {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (AJAX request or similar can go here)
    displayMessage('Thank you for your message. We will get back to you shortly!', 'success');

    // Clear form after submission
    form.reset();
});

// Function to display messages
function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type; // Apply success or error class based on type
}
