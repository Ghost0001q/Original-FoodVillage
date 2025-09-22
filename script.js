const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");

  if (hamburger.classList.contains("open")) {
    hamburger.innerHTML = '<i class="fa-solid fa-times"></i>'; // X icon
  } else {
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';  // Hamburger icon
  }
});
