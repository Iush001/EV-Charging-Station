document.getElementById('pairingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const vehicleId = document.getElementById('vehicleId').value;
    const connectionType = document.getElementById('connectionType').value;

    // Simulate a pairing attempt
    if (vehicleId && connectionType) {
        alert(`Attempting to pair with vehicle ID: ${vehicleId} via ${connectionType}...`);
        document.getElementById('errorMsg').innerText = '';
        // Redirect to success page
        window.location.href = 'success.html';
    } else {
        document.getElementById('errorMsg').innerText = 'Please provide valid inputs.';
    }
});

// Functionality for the Pair Connect button
document.getElementById('pairConnectButton').addEventListener('click', function() {
    alert('Pair Connect button clicked! You will be redirected.');
    // Redirect to success page after alert
    setTimeout(function() {
        window.location.href = 'success.html';
    }, 2000); // Redirects after 2 seconds
});
