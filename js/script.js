document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("navMenu");

  menuBtn.addEventListener("onclick", function () {
    nav.classList.toggle("active");
  });

});
