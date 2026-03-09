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
    message = "Success: Project saved!";
    icon = "✔";
  } else {
    message = "Error: Failed to fetch data.";
    icon = "⚠";
  }

  // 🔥 Updated Design Structure
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">${icon}</div>
      <span>${message}</span>
    </div>
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

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

let touched = {
  name: false,
  email: false,
  message: false
};

// Name Validation
function validateName() {
  const value = nameInput.value.trim();
  if (value.length < 3) {
    if (touched.name) {
      nameError.textContent = "Name must be at least 3 characters.";
      nameInput.classList.add("error");
      nameInput.classList.remove("success");
    }
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
    nameInput.classList.add("success");
    return true;
  }
}

// Email Validation
function validateEmail() {
  const value = emailInput.value.trim();
  const validFormat = value.includes("@") && value.includes(".");
  
  if (!validFormat) {
    if (touched.email) {
      emailError.textContent = "Enter a valid email address.";
      emailInput.classList.add("error");
      emailInput.classList.remove("success");
    }
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    return true;
  }
}

// Message Validation
function validateMessage() {
  const value = messageInput.value.trim();
  
  if (value === "") {
    if (touched.message) {
      messageError.textContent = "Message cannot be empty.";
      messageInput.classList.add("error");
      messageInput.classList.remove("success");
    }
    return false;
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("error");
    messageInput.classList.add("success");
    return true;
  }
}

// Enable / Disable Button
function checkFormValidity() {
  const isValid =
    validateName() &&
    validateEmail() &&
    validateMessage();

  submitBtn.disabled = !isValid;
}

// Input Events
nameInput.addEventListener("input", () => {
  touched.name = true;
  validateName();
  checkFormValidity();
});

emailInput.addEventListener("input", () => {
  touched.email = true;
  validateEmail();
  checkFormValidity();
});

messageInput.addEventListener("input", () => {
  touched.message = true;
  validateMessage();
  checkFormValidity();
});

// Prevent default submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

const backToTopBtn = document.getElementById("backToTopBtn");

let isVisible = false;

window.addEventListener("scroll", () => {

  if (window.scrollY > 500 && !isVisible) {
    backToTopBtn.classList.add("show-btn");
    isVisible = true;
  }

  if (window.scrollY <= 500 && isVisible) {
    backToTopBtn.classList.remove("show-btn");
    isVisible = false;
  }

});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if(menuToggle && navMenu){
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  }

});
