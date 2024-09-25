// Google Maps initialization
function initMap() {
    // The location (coordinates of a specific place)
    const location = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco, CA

    // Creating a map centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });

    // Adding a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Form handling code from the previous example

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }

    displayMessage('Thank you for your message. We will get back to you shortly!', 'success');
    form.reset();
});

function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
}
