console.log("Day 1 Task Loaded");

const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  document.body.classList.toggle("nav-open");
});

// Auto close when link clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    document.body.classList.remove("nav-open");
  });
});
