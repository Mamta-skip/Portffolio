const mobileNavbarButton = document.querySelector(".mobile-navbar-button");
const header = document.querySelector(".header");

const toggleNavbar = () => {
    header.classList.toggle("active");
}

mobileNavbarButton.addEventListener("click", toggleNavbar);

/*js for linking cv */
document.getElementById("myButton").addEventListener("click", function() {
  window.location.href = "cv.docx";
});






// js for back to top button starts here
//Get the button
var backToTopBtn = document.getElementById("buttonTopArrow");

// show the button, when scrolled down 40px from the top 
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
//scroll to the top, when clicked on the button, 
backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}