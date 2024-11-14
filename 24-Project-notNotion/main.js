const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items");

hamburger.addEventListener("click", event => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

