// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
    } else {
        // Default to light mode if no preference saved or it's explicitly 'light-mode'
        body.classList.remove('dark-mode'); // Ensure dark-mode is not present
    }

    themeToggle.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Save the current theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });
});

// --- Slideshow Logic ---
    let slideIndex = 1; // Start with the first slide

    // Function to display slides
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        // Loop around if we go past the last or first slide
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove 'active-dot' class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }

        // Display the current slide and mark the active dot
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active-dot";
    }

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    // Initialize the slideshow when the page loads
    // Check if slideshow elements exist before trying to show them
    if (document.getElementsByClassName("mySlides").length > 0) {
        showSlides(slideIndex);
    }

    // Optional: Auto-play the slideshow
    // You can uncomment the line below if you want it to auto-advance
    // setInterval(() => plusSlides(1), 5000); // Change image every 5 seconds

