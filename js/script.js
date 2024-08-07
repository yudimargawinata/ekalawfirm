// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("show");
});
