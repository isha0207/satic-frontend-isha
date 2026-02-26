console.log("Day 1 Task Loaded");
<script>
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll(".nav-links a");
  const body = document.body;

  hamburger.addEventListener("click", () => {
    body.classList.toggle("nav-open");

    // Scroll Lock (Handled via JS as required)
    if (body.classList.contains("nav-open")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });

  // Auto Close on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      body.style.overflow = "auto";
    });
  });
</script>
