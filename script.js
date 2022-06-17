"use strict";

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav__link");
const linkaction = function () {
  navMenu.classList.remove("show__menu");
};
navLink.forEach((n) => n.addEventListener("click", linkaction));

const newLocal = "true";
// home swiper
let homeSwiper = new Swiper(".home__swiper", {
  spaceBetween: 30,
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
