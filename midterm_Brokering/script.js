// Select all text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Create an Intersection Observer to detect when text boxes are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the background image from data attribute
            const bgImage = entry.target.getAttribute('data-bg');
            // Change the body's background image
            document.body.style.backgroundImage = `url(${bgImage})`;
            document.body.style.backgroundSize = 'cover'; // Cover the entire background
            document.body.style.backgroundPosition = 'center'; // Center the background image
        }
    });
});

// Observe each text box
textBoxes.forEach(textBox => {
    observer.observe(textBox);
});
