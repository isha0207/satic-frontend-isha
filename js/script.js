document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("navMenu");

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

});
