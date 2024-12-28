document.getElementById('driver-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const carModel = document.getElementById('car-model').value;
    const seats = document.getElementById('seats').value;
    const departure = document.getElementById('departure').value;
    const departureTime = document.getElementById('departure-time').value;

    // Simple validation check (can be expanded as needed)
    if (!name || !email || !phone || !carModel || !seats || !departure || !departureTime) {
        alert('Please fill in all fields.');
        return;
    }

    // For now, just log the form data to the console (You can send this to a server later)
    console.log('Carpool Driver Registered:', { name, email, phone, carModel, seats, departure, departureTime });

    // Show a success message (or send data to backend)
    alert('Thank you for registering as a carpool driver!');
});
