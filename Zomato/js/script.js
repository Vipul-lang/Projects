// Add animation on page load for the header
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.style.transform = 'translateY(-100px)';
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'all 0.5s ease-out';
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }, 300);
});

// Add search input focus animation
const searchInput = document.querySelector('input');
searchInput.addEventListener('focus', () => {
    searchInput.style.transition = 'border-color 0.3s';
    searchInput.style.borderColor = '#ff4d4d';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.borderColor = '#e60000';
});

// Smooth scroll for the header links
const headerLinks = document.querySelectorAll('ul li a');
headerLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
