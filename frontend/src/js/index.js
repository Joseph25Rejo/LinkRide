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

// Enhanced Carousel Functionality
let currentPosition = 0;
const slider = document.querySelector('.route-list-slider');
const cards = document.querySelectorAll('.route-card');
const cardWidth = 320; // 300px card width + 20px gap
let visibleCards = Math.floor(slider.offsetWidth / cardWidth);
let maxPosition = (cards.length - visibleCards) * cardWidth;

function moveSlide(direction) {
    // Calculate new position
    const newPosition = currentPosition + (direction * cardWidth);
    
    // Check boundaries
    if (newPosition < 0 || newPosition > maxPosition) {
        return;
    }
    
    // Update position
    currentPosition = newPosition;
    slider.style.transform = `translateX(-${currentPosition}px)`;
    
    // Update button states
    updateButtonStates();
}

function updateButtonStates() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    // Disable left button if at start
    leftBtn.disabled = currentPosition === 0;
    leftBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
    
    // Disable right button if at end
    rightBtn.disabled = currentPosition >= maxPosition;
    rightBtn.style.opacity = currentPosition >= maxPosition ? '0.5' : '1';
}

// Touch support for carousel
let touchStartX = 0;
let touchEndX = 0;

if (slider) {
    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swiped left
            moveSlide(1);
        } else {
            // Swiped right
            moveSlide(-1);
        }
    }
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

// Initialize carousel and load trips on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    if (slider) {
        updateButtonStates();
        
        // Add resize handler to update carousel state when window is resized
        window.addEventListener('resize', () => {
            // Recalculate visible cards
            const newVisibleCards = Math.floor(slider.offsetWidth / cardWidth);
            const newMaxPosition = (cards.length - newVisibleCards) * cardWidth;
            
            // If current position is beyond new max, adjust it
            if (currentPosition > newMaxPosition) {
                currentPosition = newMaxPosition;
                slider.style.transform = `translateX(-${currentPosition}px)`;
            }
            
            updateButtonStates();
        });
    }

    // Load trips
    loadTrips();
});