'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  if (!header || !backTopBtn) return;

  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  header.classList.toggle("active", currentScrollY >= 100);
  header.classList.toggle("header-hidden", isScrollingDown && currentScrollY >= 120);
  backTopBtn.classList.toggle("active", currentScrollY >= 100);

  lastScrollY = currentScrollY;
});
