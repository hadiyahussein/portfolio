// Define professions and typing speed
const professions = ["Hadiya <3", "a Front-end Developer", "a Ux Designer", "a Web Designer", "a Graphic Designer"];
const speed = 100;

// Initialize profession index, profession element, and profession text
let professionIndex = 0;
const professionElement = document.getElementById("profession");
let professionText = "";

// Function to type the profession
function typeProfession() {
  const profession = professions[professionIndex];
  let index = 0;

  const typeInterval = setInterval(() => {
    professionText += profession.charAt(index);
    professionElement.textContent = professionText;
    index++;

    if (index === profession.length) {
      clearInterval(typeInterval);
      setTimeout(eraseProfession, 1500);
    }
  }, speed);
}

// Function to erase the profession
function eraseProfession() {
  let index = professionText.length;

  const eraseInterval = setInterval(() => {
    professionText = professionText.slice(0, -1);
    professionElement.textContent = professionText;
    index--;

    if (index === 0) {
      clearInterval(eraseInterval);
      professionIndex = (professionIndex + 1) % professions.length;
      setTimeout(typeProfession, 1000);
    }
  }, speed);
}

// Scroll Animation
function checkBoxes() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = (window.innerHeight / 5) * 4;
  let allBoxesRevealed = true;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
      allBoxesRevealed = false;
    }
  });

  if (allBoxesRevealed) {
    window.removeEventListener('scroll', checkBoxes);
  }
}

// Hamburger Menu Animation
const navSlide = (() => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.social-link');
  const navLinks = document.querySelectorAll('.social-link a');
  const lines = burger.querySelectorAll('.line');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation ? '' : `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
    });

    // Hamburger Animation
    burger.classList.toggle('toggle');
    lines.forEach((line) => {
      line.classList.toggle('toggle');
    });
  });
})();

// Check if the page is the home page and load the profession typing
window.onload = function() {
  checkBoxes();
  window.addEventListener('scroll', checkBoxes);

  // Check if the page is the home page and load the profession typing
  if (window.location.pathname === 'https://hadiyahussein.com') {
    typeProfession();
  }
};
