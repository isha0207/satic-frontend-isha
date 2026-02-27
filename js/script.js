document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });

  } else {
    console.log("Menu button or nav not found");
  }

});
