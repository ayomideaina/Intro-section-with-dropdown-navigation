const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("droplinks");
const headerButtons = document.querySelector(".header-button");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    headerButtons.classList.toggle("active");
});
