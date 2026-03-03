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

function createToast(type) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  let message = "";
  let icon = "";

  if (type === "success") {
    message = "Action completed successfully!";
    icon = "✔";
  } else {
    message = "Something went wrong!";
    icon = "⚠";
  }

  toast.innerHTML = `
    <span>${icon} ${message}</span>
    <button class="close-btn">×</button>
  `;

  container.appendChild(toast);

  // Animation trigger
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Manual close
  const closeButton = toast.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    removeToast(toast);
  });

  // Auto dismiss after 3 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 3000);
}

function removeToast(toast) {
  toast.classList.remove("show");

  setTimeout(() => {
    toast.remove(); // DOM CLEANUP
  }, 400);
}
