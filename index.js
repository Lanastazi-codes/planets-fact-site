const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const heading = document.querySelector("h2");

const overviewContent = document.querySelector(".overview-content");
const planetMenu = document.querySelector(".planet-menu");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".container", { y: "50%" }, { y: "0%", duration: 1 }, "-=1"); //delay after duration
// tl.to('.container', {y: '-50%', duration: 1})

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
const overviewBtn = document.querySelector(".planet-menu__overview");

const structureBtn = document.querySelector(".planet-menu__structure");
const structureContent = document.querySelector(".structure-content");
console.log(structureBtn);

const surfaceBtn = document.querySelector(".planet-menu__surface");
const surfaceContent = document.querySelector(".surface-content");

const dash = document.querySelectorAll(".planet-menu__item-dash");
const menuItems = document.querySelectorAll(".planet-menu__item");
console.log(dash[0]);
// !
structureBtn.addEventListener("click", () => {
    tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".container", { y: "50%" }, { y: "0%", duration: 1 }, "-=1");
    structureContent.classList.add("active");
    overviewContent.classList.remove("active");
    surfaceContent.classList.remove("active");
    overviewContent.classList.add("d-non");
    surfaceContent.classList.add("d-non");

    dash[1].classList.add("active");
    dash[0].classList.remove("active");
    dash[2].classList.remove("active");
    dash[0].classList.add("hidden");
    dash[2].classList.add("hidden");

    menuItems[1].classList.add("active");
    menuItems[0].classList.remove("active");
    menuItems[2].classList.remove("active");
});
// !
overviewBtn.addEventListener("click", () => {
    tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".container", { y: "50%" }, { y: "0%", duration: 1 }, "-=1");
    overviewContent.classList.add("active");
    structureContent.classList.remove("active");
    surfaceContent.classList.remove("active");
    structureContent.classList.add("d-non");
    surfaceContent.classList.add("d-non");

    dash[0].classList.add("active");
    dash[1].classList.remove("active");
    dash[2].classList.remove("active");
    dash[1].classList.add("hidden");
    dash[2].classList.add("hidden");

    menuItems[0].classList.add("active");
    menuItems[1].classList.remove("active");
    menuItems[2].classList.remove("active");
});
// !
surfaceBtn.addEventListener("click", () => {
    tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".container", { y: "50%" }, { y: "0%", duration: 1 }, "-=1");
    surfaceContent.classList.add("active");
    structureContent.classList.remove("active");
    overviewContent.classList.remove("active");
    structureContent.classList.add("d-non");
    overviewContent.classList.add("d-non");

    dash[2].classList.add("active");
    dash[1].classList.remove("active");
    dash[0].classList.remove("active");
    dash[1].classList.add("hidden");
    dash[0].classList.add("hidden");

    menuItems[2].classList.add("active");
    menuItems[1].classList.remove("active");
    menuItems[0].classList.remove("active");
});
