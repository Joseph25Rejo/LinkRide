// Modal Functionality
const modal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');

// Open modal function
function openModal() {
    modal.style.display = 'block';
}

// Close modal when 'x' is clicked
closeModal.onclick = function () {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Event listener for the login/signup button
document.getElementById('authBtn').addEventListener('click', openModal);

// Toggle between login and signup forms
document.getElementById('showSignup').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

// Carousel Functionality
const routeSlider = document.querySelector('.route-list-slider');
let slideIndex = 0;

function moveSlide(direction) {
    const routeCards = document.querySelectorAll('.route-card');
    const cardWidth = routeCards[0].offsetWidth + 20; // Adjust for margin
    const maxTranslate = -(cardWidth * (routeCards.length - 1));

    slideIndex += direction;
    const translateValue = Math.max(maxTranslate, Math.min(0, -cardWidth * slideIndex));
    routeSlider.style.transform = `translateX(${translateValue}px)`;
}
async function createTrip() {
    const driverId = document.getElementById('driverId').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const availableSeats = document.getElementById('availableSeats').value;

    const response = await fetch('/api/trips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ driverId, departure, destination, date, availableSeats }),
    });

    if (response.ok) {
        const trip = await response.json();
        loadTrips(); // Refresh the trips list after creating a new trip
    } else {
        console.error('Error creating trip:', response.statusText);
    }
}

async function loadTrips() {
    const response = await fetch('/api/trips');
    const trips = await response.json();
    const tripsList = document.getElementById('trips');
    tripsList.innerHTML = '';

    trips.forEach(trip => {
        const li = document.createElement('li');
        li.textContent = `Trip from ${trip.departure} to ${trip.destination} on ${trip.date} with ${trip.availableSeats} seats available.`;
        tripsList.appendChild(li);
    });

    // Show the trips list and hide the trip form
    document.getElementById('trips-list').style.display = 'block';
    document.getElementById('trip-form').style.display = 'none';
}

// Load trips on page load
window.onload = loadTrips;