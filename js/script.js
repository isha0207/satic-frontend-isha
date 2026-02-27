document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  toggleBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      toggleBtn.innerHTML = "✖";
    } else {
      toggleBtn.innerHTML = "☰";
    }

  });

});

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a search term.");
  } else {
    console.log("Searching for: " + value);
  }
});
