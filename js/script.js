document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  // Show the current slide based on index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  // Initial display
  showSlide(currentIndex);

  // Go to previous slide
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // Wrap to last slide
    }
    showSlide(currentIndex);
  });

  // Go to next slide
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Wrap to first slide
    }
    showSlide(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  // Show the current slide based on index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  // Initial display
  showSlide(currentIndex);

  // Go to previous slide
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // Wrap to last slide
    }
    showSlide(currentIndex);
  });

  // Go to next slide
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Wrap to first slide
    }
    showSlide(currentIndex);
  });

  // Auto-play: move to the next slide every 5 seconds
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Wrap back to the first slide
    }
    showSlide(currentIndex);
  }, 5000);
});

