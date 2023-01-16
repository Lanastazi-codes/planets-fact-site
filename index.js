const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const heading = document.querySelector("h2");

const overviewContent = document.querySelector(".overview-content");
const planetMenu = document.querySelector(".planet-menu");

burger.addEventListener("click", () => {
    nav.classList.contains("active")
        ? nav.classList.remove("active")
        : nav.classList.add("active");
    burger.classList.contains("active")
        ? burger.classList.remove("active")
        : burger.classList.add("active");
    burger.classList.contains("active")
        ? overviewContent.classList.add("hovered")
        : overviewContent.classList.remove("hovered");
    burger.classList.contains("active")
        ? planetMenu.classList.add("hovered")
        : planetMenu.classList.remove("hovered");
});

const openNav = () => {
    burger.classList.toggle("active");
};
