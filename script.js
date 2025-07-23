document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 500,
    once: true
  });

  // Smart navbar hide on scroll
  let lastScrollY = window.scrollY;
  const navbar = document.getElementById("mainNavbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Highlight the active nav link based on the current URL
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
  const hero = document.querySelector(".gallery-hero");
    const heading = document.getElementById("galleryHeading");

    const slides = [
      {
        image: "assets/images/hero.webp",
        title: "Photo Gallery"
      },
      {
        image: "assets/images/sample2.jpg",
        title: "Video Gallery"
      },
      {
        image: "assets/images/sample3.jpg",
        title: "Cinematic Moments"
      }
    ];

    let index = 0;

    setInterval(() => {
      index = (index + 1) % slides.length;
      hero.style.backgroundImage = `url('${slides[index].image}')`;
      heading.textContent = slides[index].title;
    }, 10000); // Change every 10 seconds
});
