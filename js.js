// =======================
// Safe DOM References
// =======================
const menuOpenButton = document.querySelector(".bar");
const menuCloseButton = document.querySelector(".menu-close");
const darkModeToggle = document.getElementById("darkModeToggle");
const scrollProgress = document.getElementById("scrollProgress");
const typewriterElement = document.getElementById("typewriter");

// =======================
// Mobile Menu Toggle
// =======================
if (menuOpenButton && menuCloseButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
  });

  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
}

// =======================
// Dark Mode with Persistence
// =======================
if (darkModeToggle) {
  // Apply saved preference
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });
}

// =======================
// Scroll Progress Bar (optimized with rAF)
// =======================
if (scrollProgress) {
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// =======================
// Typewriter Effect (with backspace effect)
// =======================
if (typewriterElement) {
  const text = "Welcome to Our Store!";
  let i = 0;
  let typing = true;
  const speed = 100;   // Typing speed
  const pause = 1200;  // Pause before deleting

  function typeWriter() {
    if (typing) {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        typing = false;
        setTimeout(typeWriter, pause);
      }
    } else {
      if (i > 0) {
        typewriterElement.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typeWriter, speed / 2);
      } else {
        typing = true;
        setTimeout(typeWriter, pause / 2);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);
}

// =======================
// ScrollReveal Animations
// =======================
const revealFromLeft = { distance: "100px", origin: "left", duration: 1000 };
const revealFromBottom = { distance: "100px", origin: "bottom", duration: 1000 };
const revealFromRight = { distance: "80px", origin: "right", duration: 1000 };

if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".new", { ...revealFromLeft, interval: 300 });
  ScrollReveal().reveal(".category-label", { ...revealFromBottom, interval: 300 });
  ScrollReveal().reveal(".img-one", { ...revealFromLeft });
  ScrollReveal().reveal(".img-two", { ...revealFromBottom, delay: 400 });
  ScrollReveal().reveal(".main-info", { ...revealFromRight, delay: 400 });
}
