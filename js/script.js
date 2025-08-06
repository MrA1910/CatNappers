document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.3
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 👈 fade out on exit
      }
    });
  }, observerOptions);

  faders.forEach(fadeSection => {
    fadeObserver.observe(fadeSection);
  });
});


function toggleLanguageMenu() {
  const menu = document.getElementById("lang-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function setLanguage(code) {
  document.getElementById("lang-label").textContent = code;
  document.getElementById("lang-menu").style.display = "none";

  // You can add more behavior here, like swapping text
  console.log("Language changed to:", code);
}

// Close menu if clicked outside
document.addEventListener("click", function (e) {
  const menu = document.getElementById("lang-menu");
  const selector = document.querySelector(".language-selector");

  if (!selector.contains(e.target)) {
    menu.style.display = "none";
  }
});

const scrollRow = document.querySelector('.destination-scroll-row');
const cardWidth = 250 + 20; // width + margin/padding
const cardsPerSlide = 4;
const totalCards = document.querySelectorAll('.destination-card').length;

let currentIndex = 0;
let direction = 1;

function slideCards() {
  const maxIndex = Math.ceil(totalCards / cardsPerSlide) - 1;

  scrollRow.style.transform = `translateX(-${currentIndex * 100}%)`;

  if (currentIndex === maxIndex) direction = -1;
  if (currentIndex === 0) direction = 1;

  currentIndex += direction;
}

setInterval(slideCards, 4000);

function toggleFavorite(el) {
    el.classList.toggle("favorited");
    el.textContent = el.classList.contains("favorited") ? "♥" : "♡";
  }

