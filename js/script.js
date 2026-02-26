console.log("Navbar Working");

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
  });
});
