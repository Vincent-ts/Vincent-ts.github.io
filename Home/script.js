let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.project-slideshow .slides img');
    const currentSlideIndicator = document.getElementById('current-slide');
    const totalSlidesIndicator = document.getElementById('total-slides');
  
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
  
    // Update current slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
    // Add 'active' class to the new slide
    slides[currentSlide].classList.add('active');
  
    // Update the indicator
    currentSlideIndicator.textContent = currentSlide + 1; // Slide number starts at 1
  }

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.project-slideshow .slides img');
    const totalSlidesIndicator = document.getElementById('total-slides');
  
    // Show the first slide
    if (slides.length > 0) slides[0].classList.add('active');
  
    // Set the total number of slides
    totalSlidesIndicator.textContent = slides.length;
  });
let autoPlayInterval = setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds
const slideshow = document.querySelector('.project-slideshow');
slideshow.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
slideshow.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => changeSlide(1), 5000);
});
