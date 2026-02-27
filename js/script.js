document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

});
