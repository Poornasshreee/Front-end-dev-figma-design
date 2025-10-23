// Add interactivity to the IRIS portal

// Navigation buttons
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(`Navigating to ${this.textContent}`);
    });
});

// Sidebar buttons
const sidebarButtons = document.querySelectorAll('.sidebar-btn');
sidebarButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(`Opening ${this.textContent}`);
    });
});

// Info cards
const infoCards = document.querySelectorAll('.card');
infoCards.forEach(card => {
    card.addEventListener('click', function() {
        console.log('Card clicked');
    });
});

// Action cards
const actionCards = document.querySelectorAll('.action-card:not(.icon-only)');
actionCards.forEach(card => {
    card.addEventListener('click', function() {
        console.log('Action card clicked');
    });
});

// Profile buttons
const profileButtons = document.querySelectorAll('.profile-btn');
profileButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Profile clicked');
    });
});

// Logout button
const logoutButtons = document.querySelectorAll('.logout-btn');
logoutButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('LOG OUT')) {
            console.log('Logging out...');
            // Add logout functionality here
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        console.log(`Searching for: ${this.value}`);
        // Add search functionality here
    }
});

// Event cards
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('click', function() {
        console.log('Event card clicked');
    });
});

// Attendance section
const attendanceSection = document.querySelector('.attendance-section');
attendanceSection.addEventListener('click', function() {
    console.log('Opening attendance details');
});

// Add ripple effect on click
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all clickable elements
const clickableElements = document.querySelectorAll('.card, .action-card, .nav-btn, .sidebar-btn, .profile-btn, .logout-btn');
clickableElements.forEach(element => {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
});

console.log('IRIS Portal loaded successfully!');

