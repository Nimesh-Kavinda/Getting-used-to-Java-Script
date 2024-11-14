const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items");

hamburger.addEventListener("click", event => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

const newsLetterButton = document.querySelectorAll(".newsletter");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

newsLetterButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("show");
    });
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});