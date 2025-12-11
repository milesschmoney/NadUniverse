// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ACCORDION LOGIC
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
