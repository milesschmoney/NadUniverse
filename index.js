// Reveal / Hide Doctrine Text
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle("hidden");
  });
});
