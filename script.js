// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Custom cursor tracker JavaScript

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.highlight-card', {
    delay: 300,
    distance: '30px',
    origin: 'bottom',
    duration: 800,
    interval: 200
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// ScrollReveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200
});

// Hero section animations
sr.reveal('.hero-title', { delay: 500 });
sr.reveal('.hero-subtitle', { delay: 700 });
sr.reveal('.hero-cta', { delay: 900 });

// Projects section animations
sr.reveal('.section-title', { delay: 500 });
sr.reveal('.projects-grid', { delay: 700 });

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Gallery Modal Functions
function openGallery() {
    const galleryModal = document.getElementById('galleryModal');
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    document.body.classList.add('modal-open'); // Add class to body when modal is open
    addGalleryItemClickListeners(); // Add click listeners when modal opens
}

function closeGallery() {
    const galleryModal = document.getElementById('galleryModal');
     // Check if in single image view
    if (galleryModal.classList.contains('single-view')) {
        galleryModal.classList.remove('single-view'); // Go back to grid view
        // Optionally clear the single image src
        const singleImg = galleryModal.querySelector('.single-image-view img');
        if (singleImg) singleImg.src = '';
    } else {
        // Close the entire modal if in grid view
        galleryModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        document.body.classList.remove('modal-open'); // Remove class from body when modal is closed
        removeGalleryItemClickListeners(); // Remove click listeners when modal closes
    }
}

// Close gallery when clicking outside modal
window.addEventListener('click', (event) => {
    const galleryModal = document.getElementById('galleryModal');
    // Only close the whole modal if clicking the modal backdrop and not in single view
    if (event.target === galleryModal && !galleryModal.classList.contains('single-view')) {
        closeGallery();
    }
});

// Close gallery with Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeGallery();
    }
});

// Add and remove click listeners for gallery items
let galleryItemClickListenersAdded = false;

function handleGalleryItemClick(event) {
    const clickedItem = event.currentTarget; // Use currentTarget to get the gallery-item div
    const imageSrc = clickedItem.querySelector('img').src; // Get the image source
    const galleryModal = document.getElementById('galleryModal');
    const singleImageView = galleryModal.querySelector('.single-image-view');
    const singleImg = singleImageView.querySelector('img');

    // Set the source of the single image and show the single view
    singleImg.src = imageSrc;
    galleryModal.classList.add('single-view');

    // Remove 'clicked' class from any other previously clicked items (not strictly needed for this new view, but good cleanup)
    document.querySelectorAll('.gallery-item.clicked').forEach(item => {
        item.classList.remove('clicked');
    });
     // Add clicked class to the item that was just opened (optional, for highlighting)
    clickedItem.classList.add('clicked');
}

function addGalleryItemClickListeners() {
    if (!galleryItemClickListenersAdded) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', handleGalleryItemClick);
        });

        // Add click listener to the single image view to close it
        const galleryModal = document.getElementById('galleryModal');
        const singleImageView = galleryModal.querySelector('.single-image-view');
        singleImageView.addEventListener('click', closeGallery); // Click single view to go back to grid

        galleryItemClickListenersAdded = true;
    }
}

function removeGalleryItemClickListeners() {
     const galleryItems = document.querySelectorAll('.gallery-item');
     galleryItems.forEach(item => {
         item.removeEventListener('click', handleGalleryItemClick);
         item.classList.remove('clicked'); // Also remove clicked class when modal closes
     });
     
     // Remove click listener from the single image view
     const galleryModal = document.getElementById('galleryModal');
     const singleImageView = galleryModal.querySelector('.single-image-view');
     singleImageView.removeEventListener('click', closeGallery);

     galleryItemClickListenersAdded = false;
} 
