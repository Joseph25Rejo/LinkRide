// Navigation scroll behavior
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Carousel functionality
const slider = document.querySelector('.route-list-slider');
const cards = document.querySelectorAll('.route-card');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;
const cardWidth = 300 + 32; // card width + margin

leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

rightBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Join Carpool button functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Join Carpool') {
            // Add confirmation dialog
            const confirmed = confirm('Would you like to join this carpool?');
            if (confirmed) {
                e.target.textContent = 'Joined';
                e.target.style.backgroundColor = '#45a049';
            }
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-card, .route-card').forEach(el => {
    observer.observe(el);
});