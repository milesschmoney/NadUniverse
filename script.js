// =======================
// NadUniverse Interactivity
// =======================

// Select all doctrine togglers
const togglers = document.querySelectorAll(".doctrine-toggler");

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    const content = toggler.nextElementSibling;

    // toggle visibility
    if (content.style.display === "block") {
      content.style.display = "none";
      toggler.textContent = toggler.textContent.replace("▼", "▶");
    } else {
      content.style.display = "block";
      toggler.textContent = toggler.textContent.replace("▶", "▼");
    }
  });
});
