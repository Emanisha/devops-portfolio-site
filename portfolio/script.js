
document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Network Engineer", "Cloud Specialist", "Cybersecurity Enthusiast"];
  let index = 0, charIndex = 0, current = "", isDeleting = false;
  const typedText = document.querySelector(".typed-text");
  function typeLoop() {
    const full = roles[index];
    current = isDeleting ? full.substring(0, --charIndex) : full.substring(0, ++charIndex);
    typedText.textContent = current;
    if (!isDeleting && charIndex === full.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeLoop, 500);
    } else {
      setTimeout(typeLoop, isDeleting ? 50 : 100);
    }
  }
  if (typedText) typeLoop();
});
