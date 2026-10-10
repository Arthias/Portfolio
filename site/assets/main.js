// Signature move fallback for sibling-index() stagger animation
if (typeof CSS !== "undefined" && CSS.supports && !CSS.supports("animation-delay: calc(sibling-index() * 0.1s)")) {
  const bio = document.getElementById("bio");
  if (bio) {
    [...bio.children].forEach((el, index) => {
      el.style.setProperty("--sibling-index", index + 1);
    });
  }
}
