document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  // Toggle menu
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("show");
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

});
