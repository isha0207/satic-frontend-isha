console.log("Day 1 Task Loaded");
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle navigation visibility
    navLinks.classList.toggle('active');
    
    // Optional: Animate hamburger bars to an 'X'
    hamburger.classList.toggle('toggle');
});
