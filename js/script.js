console.log("Day 4 Navbar Loaded");

const hamburger = document.querySelector(".hamburger");
const body = document.body;
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
  });
});
