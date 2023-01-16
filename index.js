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

// ? Planet menu
const overview = document.querySelector(".planet-menu__overview");
const structure = document.querySelector("planet-menu__structure");
const surface = document.querySelector(".planet-menu__surface");

overview.addEventListener("click", () => {
    overview.classList.contains("hovered")
        ? overview.classList.remove("hovered")
        : overview.classList.add("hovered") &&
          structure.classList.remove("hovered") &&
          surface.classList.remove("hovered");
});
structure.addEventListener("click", () => {
    structure.classList.contains("hovered")
        ? structure.classList.remove("hovered")
        : structure.classList.add("hovered") &&
          overview.classList.remove("hovered") &&
          surface.classList.remove("hovered");
});
surface.addEventListener("click", () => {
    surface.classList.contains("hovered")
        ? surface.classList.remove("hovered")
        : surface.classList.add("hovered") &&
          structure.classList.remove("hovered") &&
          overview.classList.remove("hovered");
});

console.log(surface);
