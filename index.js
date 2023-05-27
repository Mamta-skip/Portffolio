const mobileNavbarButton = document.querySelector(".mobile-navbar-button");
const header = document.querySelector(".header");

const toggleNavbar = () => {
    header.classList.toggle("active");
}

mobileNavbarButton.addEventListener("click", toggleNavbar);