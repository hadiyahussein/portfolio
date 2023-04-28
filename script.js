
// Hamburger Menu Animation
const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.social-link');
  const navLinks = document.querySelectorAll('.social-link a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Hamburger Animation
    burger.classList.toggle('toggle');

    const lines = burger.querySelectorAll('.line');
    lines.forEach((line) => {
      line.classList.toggle('toggle');
    });
  });
};

// Scroll Animation
const boxes = document.querySelectorAll('.box');
const checkBoxes = () => {
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
};

// Event listeners
window.addEventListener('scroll', checkBoxes);
checkBoxes();
navSlide();
