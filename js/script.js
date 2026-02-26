console.log("Day 4 Navbar Loaded");

const hamburger = document.querySelector(".hamburger");
const body = document.body;
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  body.classList.toggle("nav-open");

  // Scroll Lock
  if (body.classList.contains("nav-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// Auto Close
links.forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    body.style.overflow = "auto";
  });
});
