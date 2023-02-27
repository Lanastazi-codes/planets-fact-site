const body = document.querySelector("body");

let meteorNumber = 3;
for (let i = 1; i <= meteorNumber; i++) {
    body.innerHTML += `<div class="meteor-${i}"></div>`;
}

const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navLink = document.querySelector(".nav__link");
const planetInfo = document.getElementById("planet-info");
const overviewContent = document.querySelector(".overview-content");
const planetMenu = document.querySelector(".planet-menu");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

//?mobile burger
burger.addEventListener("click", () => {
    nav.classList.contains("active")
        ? nav.classList.remove("active")
        : nav.classList.add("active");
    burger.classList.contains("active")
        ? burger.classList.remove("active")
        : burger.classList.add("active");
    burger.classList.contains("active")
        ? planetMenu.classList.add("hovered")
        : planetMenu.classList.remove("hovered");
    burger.classList.contains("active")
        ? document.querySelector(".container").classList.add("hovered")
        : document.querySelector(".container").classList.remove("hovered");
});

// ? Planet menu
const overviewBtn = document.querySelector(".planet-menu__overview");
const overviewBtnId = document.getElementById("planet-menu__overview");

const structureBtn = document.querySelector(".planet-menu__structure");
const structureBtnId = document.getElementById("planet-menu__structure");
const structureContent = document.querySelector(".structure-content");

const surfaceBtn = document.querySelector(".planet-menu__surface");
const surfaceBtnId = document.getElementById("planet-menu__surface");
const surfaceContent = document.querySelector(".surface-content");

const dash = document.querySelectorAll(".planet-menu__item-dash");
const menuItems = document.querySelectorAll(".planet-menu__item");
let planetPic = document.querySelector(".planet-menu__pic");

let surfacePic = document.querySelector(".planet-menu__surface-pic");
let planetPicChild = planetPic.firstElementChild;

let textButtonsWrapper = document.getElementById("text-buttons-wrapper");
let contentText = document.querySelector(".content__text");

const mainHeading = document.getElementById("heading");
let heading = mainHeading.innerText.toLowerCase();

let sourceWrapper = document.getElementById("source");
let textWrapper = document.getElementById("text-wrapper");
const sourceLink = document.querySelector(".source__link");

// !

function checkPlanet() {
    let size;
    console.log(heading);
    //big screen
    if (heading === "mercury" && window.innerWidth >= 1301) {
        size = 290;
        return size;
    } else if (heading === "venus" && window.innerWidth >= 1301) {
        size = 400;
        return size;
    } else if (heading === "earth" && window.innerWidth >= 1301) {
        size = 450;
        return size;
    } else if (heading === "mars" && window.innerWidth >= 1301) {
        size = 336;
        return size;
    } else if (heading === "jupiter" && window.innerWidth >= 1301) {
        size = 582;
        return size;
    } else if (heading === "saturn" && window.innerWidth >= 1301) {
        size = 580;
        return size;
    } else if (heading === "uranus" && window.innerWidth >= 1301) {
        size = 458;
        return size;
    } else if (heading === "neptune" && window.innerWidth >= 1301) {
        size = 450;
        return size;
    }

    //tablet
    if (heading === "mercury" && window.innerWidth >= 670) {
        size = 184;
        return size;
    } else if (heading === "venus" && window.innerWidth >= 670) {
        size = 253;
        return size;
    } else if (heading === "earth" && window.innerWidth >= 670) {
        size = 285;
        return size;
    } else if (heading === "mars" && window.innerWidth >= 670) {
        size = 213;
        return size;
    } else if (heading === "jupiter" && window.innerWidth >= 670) {
        size = 369;
        return size;
    } else if (heading === "saturn" && window.innerWidth >= 670) {
        size = 370;
        return size;
    } else if (heading === "uranus" && window.innerWidth >= 670) {
        size = 290;
        return size;
    } else if (heading === "neptune" && window.innerWidth >= 670) {
        size = 285;
        return size;
    }
}

function changePlanetSize() {
    let size = checkPlanet();
    console.log({ size });
    tl.fromTo(
        ".planet-menu__pic svg",
        { width: 70, height: 70 },
        { width: size, height: size, duration: 1 }
    );
}

function makeBeforeforSurface() {
    let before = document.createElement("div");
    before.className = "before";
    return before;
}
let before = makeBeforeforSurface();

window.onload = () => {
    if (window.innerWidth >= 670) {
        changePlanetSize();
    } else if (window.innerWidth < 670) {
        let size =
            getComputedStyle(planetPicChild).getPropertyValue(
                "--svgWidthHeigth"
            );
        tl.fromTo(
            ".planet-menu__pic svg",
            { width: 70, height: 70 },
            { width: size, height: size, duration: 1 }
        );
    }
};
//! laptop
if (window.innerWidth >= 1025) {
    textButtonsWrapper.appendChild(mainHeading);
    textButtonsWrapper.appendChild(sourceWrapper);
}
//! Tablet

//? adding text to structure, surface and overview buttons
if (window.innerWidth >= 670) {
    document.getElementById("planet-menu__structure").innerHTML =
        "Internal Structure";
    document.getElementById("planet-menu__surface").innerHTML =
        "Surface Geology";
    //? overview button clicked tablet
    overviewBtnId.addEventListener("click", () => {
        overviewBtnId.classList.add("active");
        overviewBtnId.classList.add("tablet");
        structureBtnId.classList.remove("active");
        structureBtnId.classList.remove("tablet");
        surfaceBtnId.classList.remove("active");
        surfaceBtnId.classList.remove("tablet");
        before.remove();

        if (heading === "mercury") {
            contentText.innerHTML = `Mercury is the smallest planet in the Solar System
                            and the closest to the Sun. Its orbit around the Sun
                            takes 87.97 Earth days, the shortest of all the
                            Sun's planets. Mercury is one of four terrestrial
                            planets in the Solar System, and is a rocky body
                            like Earth.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Mercury_(planet)";
            planetPicChild.innerHTML = `
                <svg
                        class="mercury"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 290 290"
                        width="290"
                        height="290"
                    >
                        <defs>
                            <circle id="a" cx="145" cy="145" r="145" />
                            <circle id="c" cx="145" cy="145" r="145" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="145"
                                cy="145"
                                r="145"
                                fill="#DEF4FC"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#B1D5E2"
                                fill-rule="nonzero"
                                d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#d)"
                                opacity=".078"
                                d="M146 0h145v290H146z"
                            />
                        </g>
                    </svg>
                `;
            console.log("Overview clicked mercury page");
        } else if (heading === "venus") {
            contentText.innerHTML = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Venus";
            planetPicChild.innerHTML = `
            <svg
                        class="venus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 400 400"
                        width="400"
                        height="400"
                    >
                        <defs>
                            <circle id="a" cx="200" cy="200" r="200" />
                            <circle id="c" cx="200" cy="200" r="200" />
                            <circle id="e" cx="200" cy="200" r="200" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="200"
                                cy="200"
                                r="200"
                                fill="#F7CC7F"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FFE6AE"
                                fill-rule="nonzero"
                                d="M310 311c6.627 0 12 5.373 12 12s-5.373 12-12 12H189l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H79c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-20-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-19v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h80c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h1c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12H120c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.627 0 12-5.373 12-12s-5.373-12-12-12H59c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-173 96c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h76zm326-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h41zM-9.5 167c6.627 0 12 5.373 12 12s-5.373 12-12 12h-44c-6.627 0-12-5.373-12-12s5.373-12 12-12h44zM278 119c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-139 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm158-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S222.604 70.727 229 70.99L229 71h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H40c-6.627 0-12-5.373-12-12s5.373-12 12-12h257zm3 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H88c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#E29F58"
                                fill-rule="nonzero"
                                d="M205 263c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM99 203c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h14c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H64v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm176 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H302c-6.627 0-12-5.373-12-12s5.373-12 12-12h101zm-368 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H15c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm313-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#f)"
                                opacity=".078"
                                d="M201-25h225v450H201z"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "earth") {
            contentText.innerHTML = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Earth";
            planetPicChild.innerHTML = `
            <svg
                        class="earth"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                            <circle id="k" cx="225" cy="225" r="225" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#545BFE"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M134 351c6.627 0 12-5.373 12-12s-5.373-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h-2c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h49c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h51c6.627 0 12 5.373 12 12s-5.373 12-12 12h-6v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01c6.627 0 12 5.373 12 12s-5.373 12-12 12h-27v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5zM49 183c6.627 0 12 5.373 12 12s-5.373 12-12 12H14c-6.627 0-12-5.373-12-12s5.373-12 12-12h35zm49-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm78-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-1v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99V63h7c6.627 0 12 5.373 12 12s-5.373 12-12 12h-69v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h5c6.627 0 12 5.373 12 12s-5.373 12-12 12H-1c-6.627 0-12-5.373-12-12s5.373-12 12-12H9c6.627 0 12-5.373 12-12S15.627 87 9 87h4C6.373 87 1 81.627 1 75s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12h-48c-6.627 0-12-5.373-12-12s5.373-12 12-12h205z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M390 327c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h-3c6.627 0 12-5.373 12-12s-5.373-12-12-12h-45c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12h-34c-6.627 0-12-5.373-12-12s5.373-12 12-12h26c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h56c6.627 0 12 5.373 12 12s-5.373 12-12 12l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h91c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h10c6.627 0 12 5.373 12 12s-5.373 12-12 12h-15l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h-2c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-36c-6.627 0-12-5.373-12-12s5.373-12 12-12h-4zm90-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-18-168c6.627 0 12 5.373 12 12s-5.373 12-12 12h-14c-6.627 0-12-5.373-12-12s5.373-12 12-12h14zm198-72c6.627 0 12 5.373 12 12s-5.373 12-12 12h-7v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h16c6.627 0 12 5.373 12 12s-5.373 12-12 12H495c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5c6.627 0 12-5.373 12-12s-5.373-12-12-12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h211zM359 87c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24zm38 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3c-6.627 0-12-5.373-12-12s5.373-12 12-12h3zm13-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M413 111c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM307 51c0-6.627-5.373-12-12-12H175c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-16c-6.627 0-12-5.373-12-12s5.373-12 12-12h62c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V15h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S357.604 62.727 364 62.99L364 63h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm231-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H318c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M97 363c0-6.627-5.373-12-12-12H17c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H95c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H81c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M349 459c0-6.627-5.373-12-12-12h-68c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12h-23c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#j)"
                            />
                            <mask id="l" fill="#fff">
                                <use xlink:href="#k" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#l)"
                                opacity=".078"
                                d="M225.484-25h250.484v500H225.484z"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "mars") {
            contentText.innerHTML = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Mars";
            planetPicChild.innerHTML = `
            <svg
                        class="mars"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 336 336"
                        width="336"
                        height="336"
                    >
                        <defs>
                            <circle id="a" cx="168" cy="168" r="168" />
                            <circle id="c" cx="168" cy="168" r="168" />
                            <circle id="e" cx="168" cy="168" r="168" />
                            <circle id="g" cx="168" cy="168" r="168" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="168"
                                cy="168"
                                r="168"
                                fill="#FF6A45"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S148.604 47.727 155 47.99V48H168c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#D04237"
                                fill-rule="nonzero"
                                d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#h)"
                                opacity=".078"
                                d="M169-16h184v368H169z"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "jupiter") {
            contentText.innerHTML = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Jupiter";
            planetPicChild.innerHTML = `
            <svg
                        class="jupiter"
                        viewBox="0 0 582 582"
                        width="582"
                        height="582"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="291" cy="291" r="291" fill="#ECAD7A" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M38 294c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12H38zm220 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zM53 390c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm287 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm264 12c0-6.627-5.373-12-12-12H426c-6.627 0-12 5.373-12 12s5.373 12 12 12h166c6.627 0 12-5.373 12-12zm-190-84c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12H462v-.01c-6.395-.262-11.5-5.53-11.5-11.99s5.105-11.728 11.5-11.99V318h24c6.627 0 12-5.373 12-12s-5.373-12-12-12H330c-6.627 0-12 5.373-12 12s5.373 12 12 12h84zm298-12c0-6.627-5.373-12-12-12H544c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12z"
                                fill="#F0D29F"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                d="M159 402c0-6.627-5.373-12-12-12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12z"
                                fill="#D86534"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M466 54c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H466zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H164c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H246zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-264 12c0-6.627 5.373-12 12-12H78c6.627 0 12 5.373 12 12s-5.373 12-12 12H-88c-6.627 0-12-5.373-12-12zM90 78c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12H42v-.01c6.395-.262 11.5-5.53 11.5-11.99S48.395 78.272 42 78.01V78H18c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H90zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12z"
                                fill="#DC8E61"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M624 438c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H624zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H322c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H404zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zM58 546c0-6.627 5.373-12 12-12h166c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12zm190-84c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12H0c-6.627 0-12-5.373-12-12s5.373-12 12-12h200v-.01c6.395-.262 11.5-5.53 11.5-11.99s-5.105-11.728-11.5-11.99V462h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-84zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H-38c-6.627 0-12-5.373-12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="e"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#e)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M177 222c6.627 0 12 5.373 12 12s-5.373 12-12 12h-10c-6.627 0-12 5.373-12 12s5.373 12 12 12h89c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10l-.001-.01c-6.395-.263-11.499-5.53-11.499-11.99s5.104-11.727 11.499-11.99L246 222h65c6.627 0 12-5.373 12-12s-5.373-12-12-12H112c-6.627 0-12 5.373-12 12s5.373 12 12 12h65zm-46 36c0-6.627-5.373-12-12-12H57c-6.627 0-12 5.373-12 12s5.373 12 12 12h62c6.627 0 12-5.373 12-12zM9 246c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12H9zm475 12c0-6.627-5.373-12-12-12H304c-6.627 0-12 5.373-12 12s5.373 12 12 12h168c6.627 0 12-5.373 12-12zm64-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12h28zm-35-36c0-6.627-5.373-12-12-12H359c-6.627 0-12 5.373-12 12s5.373 12 12 12h142c6.627 0 12-5.373 12-12zm86-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-50c-6.627 0-12-5.373-12-12s5.373-12 12-12h50zM52 210c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12s5.373 12 12 12h28c6.627 0 12-5.373 12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="f"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#f)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M291 0h292v582H291z"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "saturn") {
            contentText.innerHTML = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Saturn";
            planetPicChild.innerHTML = `
            <svg
                        class="saturn"
                        viewBox="0 0 668 668"
                        width="668"
                        height="668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.285 53.283c.113-.12.228-.24.345-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.049-24.049-61.757-148.848-191.653-278.745C248.001 160.205 123.202 74.399 99.153 98.448a11.74 11.74 0 00-.344.359L53.285 53.283zm56.563 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.242-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033-.117.118-.232.238-.343.36l-17.85-17.85z"
                            fill="#B87D43"
                        />
                        <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.285 0-16.971s12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.379c4.687 4.687 4.687 12.285 0 16.971-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0l141.422 141.421.007-.007c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.687 16.97 0l110.309 110.308c4.686 4.687 4.686 12.285 0 16.971s-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
                                fill="#ECB55A"
                            />
                        </g>
                        <g>
                            <mask
                                id="b"
                                maskUnits="userSpaceOnUse"
                                x="126"
                                y="110"
                                width="416"
                                height="416"
                            >
                                <circle cx="334" cy="318" r="208" fill="#fff" />
                            </mask>
                            <g mask="url(#b)">
                                <path
                                    opacity=".078"
                                    fill="#000"
                                    d="M334 110h209.089v416H334z"
                                />
                            </g>
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.284 53.285c-.12.112-.24.227-.357.345-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.344-.357l-45.523-45.524c-.112.122-.227.242-.344.359-24.05 24.05-148.848-61.756-278.745-191.653S74.399 123.202 98.449 99.152c.117-.117.237-.232.359-.344L53.284 53.285zm56.562 56.562c-22.886 22.886 58.76 141.637 182.361 265.238s242.352 205.247 265.238 182.36l-17.143-17.143c-.112.123-.226.243-.343.36-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.117-.117.237-.231.36-.343l-17.851-17.85z"
                            fill="#B87D43"
                        />
                    </svg>
            `;
        } else if (heading === "uranus") {
            contentText.innerHTML = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Uranus";
            planetPicChild.innerHTML = `
            <svg
                        class="uranus"
                        viewBox="0 0 458 458"
                        width="458"
                        height="458"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="229" cy="229" r="229" fill="#65F0D5" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M445.12-150c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V-8h-.01c-.262-6.395-5.53-11.5-11.99-11.5S397.392-14.395 397.13-8h-.01v160c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12V70zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V79c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V238c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V274h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V142c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V356c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#49CBC2"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M181.12-220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-156c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156zm0 220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-78h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01V82c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-257c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-30c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12V0zm96-205c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-73c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm0 287c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm12 264c-6.627 0-12-5.373-12-12V168c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v166c0 6.627-5.372 12-12 12zm-84-190c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-9c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v257c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V204h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01v24c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V72c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v84zm-12 298c-6.627 0-12-5.373-12-12V286c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156c0 6.627-5.372 12-12 12z"
                                fill="#50DECD"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M157.12-253c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-78h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01V49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V135c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V171h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V39c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V253c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#77FFF5"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M229 0h229v458H229z"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "neptune") {
            contentText.innerHTML = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Neptune";
            planetPicChild.innerHTML = `
            <svg
                        class="neptune"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#497EFA"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 262c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 118c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#d)"
                                opacity=".4"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 430c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                                opacity=".4"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#2255CA"
                                fill-rule="nonzero"
                                d="M148.177 274c0-6.627-5.372-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h79c6.628 0 12 5.373 12 12s-5.372 12-12 12h-3v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h3c6.628 0 12 5.373 12 12s-5.372 12-12 12h-61c-6.627 0-12-5.373-12-12s5.373-12 12-12h1c6.628 0 12-5.373 12-12z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#j)"
                                opacity=".078"
                                d="M225 11h215.354v428H225z"
                            />
                        </g>
                    </svg>
            `;
        }
    });
    //? structure button clicked tablet
    structureBtnId.addEventListener("click", () => {
        structureBtnId.classList.add("active");
        structureBtnId.classList.add("tablet");
        overviewBtnId.classList.remove("active");
        overviewBtnId.classList.remove("tablet");
        surfaceBtnId.classList.remove("active");
        surfaceBtnId.classList.remove("tablet");

        //mercury page
        if (heading === "mercury") {
            contentText.innerHTML = `Mercury appears to have a solid silicate crust and
                        mantle overlying a solid, iron sulfide outer core layer,
                        a deeper liquid core layer, and a solid inner core. The
                        planet's density is the second highest in the Solar
                        System at 5.427 g/cm3 , only slightly less than Earth's
                        density.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure";
            planetPicChild.innerHTML = `
                <svg
                        class="mercury"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 290 290"
                        width="290"
                        height="290"
                    >
                        <defs>
                            <circle id="a" cx="145" cy="145" r="145" />
                            <circle id="c" cx="145" cy="145" r="145" />
                            <path
                                id="e"
                                d="M0 0c76.768 0 139 62.232 139 139S76.768 278 0 278z"
                            />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="145"
                                cy="145"
                                r="145"
                                fill="#DEF4FC"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#B1D5E2"
                                fill-rule="nonzero"
                                d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#d)"
                                opacity=".078"
                                d="M146 0h145v290H146z"
                            />
                            <g transform="translate(146 6)">
                                <mask id="f" fill="#fff">
                                    <use xlink:href="#e" />
                                </mask>
                                <use fill="#7A939C" xlink:href="#e" />
                                <circle
                                    cx="1"
                                    cy="140"
                                    r="131"
                                    fill="#9AB2BB"
                                    mask="url(#f)"
                                />
                                <circle
                                    cx="1"
                                    cy="139"
                                    r="95"
                                    fill="#E8903F"
                                    mask="url(#f)"
                                />
                                <circle
                                    cx=".5"
                                    cy="139.5"
                                    r="41.5"
                                    fill="#FFEA87"
                                    mask="url(#f)"
                                />
                            </g>
                        </g>
                    </svg>
                    `;
            console.log("Structure clicked mercury page");
        } else if (heading === "venus") {
            contentText.innerHTML = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Venus#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="venus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 400 400"
                        width="400"
                        height="400"
                    >
                        <defs>
                            <circle id="a" cx="200" cy="200" r="200" />
                            <circle id="c" cx="200" cy="200" r="200" />
                            <circle id="e" cx="200" cy="200" r="200" />
                            <path
                                id="g"
                                d="M0 0c106.591 0 193 86.409 193 193S106.591 386 0 386z"
                            />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="200"
                                cy="200"
                                r="200"
                                fill="#F7CC7F"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FFE6AE"
                                fill-rule="nonzero"
                                d="M310 311c6.627 0 12 5.373 12 12s-5.373 12-12 12H189l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H79c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-20-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-19v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h80c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h1c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12H120c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.627 0 12-5.373 12-12s-5.373-12-12-12H59c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-173 96c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h76zm326-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h41zM-9.5 167c6.627 0 12 5.373 12 12s-5.373 12-12 12h-44c-6.627 0-12-5.373-12-12s5.373-12 12-12h44zM278 119c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-139 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm158-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S222.604 70.727 229 70.99L229 71h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H40c-6.627 0-12-5.373-12-12s5.373-12 12-12h257zm3 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H88c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#E29F58"
                                fill-rule="nonzero"
                                d="M205 263c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM99 203c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h14c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H64v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm176 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H302c-6.627 0-12-5.373-12-12s5.373-12 12-12h101zm-368 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H15c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm313-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#f)"
                                opacity=".078"
                                d="M201-25h225v450H201z"
                            />
                            <g transform="translate(201 7)">
                                <mask id="h" fill="#fff">
                                    <use xlink:href="#g" />
                                </mask>
                                <use fill="#C08240" xlink:href="#g" />
                                <circle
                                    cx="1"
                                    cy="194"
                                    r="185"
                                    fill="#A34D28"
                                    mask="url(#h)"
                                />
                                <circle
                                    cx="1"
                                    cy="193"
                                    r="83"
                                    fill="#FAD14C"
                                    mask="url(#h)"
                                />
                            </g>
                        </g>
                    </svg>
            `;
        } else if (heading === "earth") {
            contentText.innerHTML = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Earth#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="earth"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                            <circle id="k" cx="225" cy="225" r="225" />
                            <path
                                id="m"
                                d="M0 0c120.398 0 218 97.602 218 218S120.398 436 0 436z"
                            />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#545BFE"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M134 351c6.627 0 12-5.373 12-12s-5.373-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h-2c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h49c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h51c6.627 0 12 5.373 12 12s-5.373 12-12 12h-6v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01c6.627 0 12 5.373 12 12s-5.373 12-12 12h-27v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5zM49 183c6.627 0 12 5.373 12 12s-5.373 12-12 12H14c-6.627 0-12-5.373-12-12s5.373-12 12-12h35zm49-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm78-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-1v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99V63h7c6.627 0 12 5.373 12 12s-5.373 12-12 12h-69v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h5c6.627 0 12 5.373 12 12s-5.373 12-12 12H-1c-6.627 0-12-5.373-12-12s5.373-12 12-12H9c6.627 0 12-5.373 12-12S15.627 87 9 87h4C6.373 87 1 81.627 1 75s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12h-48c-6.627 0-12-5.373-12-12s5.373-12 12-12h205z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M390 327c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h-3c6.627 0 12-5.373 12-12s-5.373-12-12-12h-45c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12h-34c-6.627 0-12-5.373-12-12s5.373-12 12-12h26c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h56c6.627 0 12 5.373 12 12s-5.373 12-12 12l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h91c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h10c6.627 0 12 5.373 12 12s-5.373 12-12 12h-15l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h-2c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-36c-6.627 0-12-5.373-12-12s5.373-12 12-12h-4zm90-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-18-168c6.627 0 12 5.373 12 12s-5.373 12-12 12h-14c-6.627 0-12-5.373-12-12s5.373-12 12-12h14zm198-72c6.627 0 12 5.373 12 12s-5.373 12-12 12h-7v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h16c6.627 0 12 5.373 12 12s-5.373 12-12 12H495c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5c6.627 0 12-5.373 12-12s-5.373-12-12-12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h211zM359 87c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24zm38 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3c-6.627 0-12-5.373-12-12s5.373-12 12-12h3zm13-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M413 111c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM307 51c0-6.627-5.373-12-12-12H175c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-16c-6.627 0-12-5.373-12-12s5.373-12 12-12h62c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V15h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S357.604 62.727 364 62.99L364 63h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm231-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H318c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M97 363c0-6.627-5.373-12-12-12H17c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H95c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H81c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M349 459c0-6.627-5.373-12-12-12h-68c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12h-23c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#j)"
                            />
                            <mask id="l" fill="#fff">
                                <use xlink:href="#k" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#l)"
                                opacity=".078"
                                d="M225.484-25h250.484v500H225.484z"
                            />
                            <g transform="translate(225 7)">
                                <mask id="n" fill="#fff">
                                    <use xlink:href="#m" />
                                </mask>
                                <use fill="#2A2D80" xlink:href="#m" />
                                <circle
                                    cx="1.5"
                                    cy="219.5"
                                    r="208.5"
                                    fill="#952525"
                                    mask="url(#n)"
                                />
                                <circle
                                    cx="2"
                                    cy="218"
                                    r="178"
                                    fill="#E0592F"
                                    mask="url(#n)"
                                />
                                <circle
                                    cx="2"
                                    cy="218"
                                    r="107"
                                    fill="#F89035"
                                    mask="url(#n)"
                                />
                                <circle
                                    cx="1"
                                    cy="219"
                                    r="51"
                                    fill="#FFF1AA"
                                    mask="url(#n)"
                                />
                            </g>
                        </g>
                    </svg>
            `;
        } else if (heading === "mars") {
            contentText.innerHTML = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Mars#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="mars"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 336 336"
                        width="336"
                        height="336"
                    >
                        <defs>
                            <circle id="a" cx="168" cy="168" r="168" />
                            <circle id="c" cx="168" cy="168" r="168" />
                            <circle id="e" cx="168" cy="168" r="168" />
                            <circle id="g" cx="168" cy="168" r="168" />
                            <path
                                id="i"
                                d="M0 0c88.918 0 161 72.082 161 161S88.918 322 0 322z"
                            />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="168"
                                cy="168"
                                r="168"
                                fill="#FF6A45"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S148.604 47.727 155 47.99V48H168c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#D04237"
                                fill-rule="nonzero"
                                d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#h)"
                                opacity=".078"
                                d="M169-16h184v368H169z"
                            />
                            <g transform="translate(169 7)">
                                <mask id="j" fill="#fff">
                                    <use xlink:href="#i" />
                                </mask>
                                <use fill="#97271E" xlink:href="#i" />
                                <circle
                                    cx="1"
                                    cy="161"
                                    r="154"
                                    fill="#DC5D1C"
                                    mask="url(#j)"
                                />
                                <circle
                                    cx="1"
                                    cy="161"
                                    r="79"
                                    fill="#F8A053"
                                    mask="url(#j)"
                                />
                                <circle
                                    cx="1"
                                    cy="161"
                                    r="54"
                                    fill="#FFCA79"
                                    mask="url(#j)"
                                />
                                <circle
                                    cx="1"
                                    cy="162"
                                    r="40"
                                    fill="#FFF5C6"
                                    mask="url(#j)"
                                />
                            </g>
                        </g>
                    </svg>
            `;
        } else if (heading === "jupiter") {
            contentText.innerHTML = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Jupiter#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        id="jupiter-internal"
                        class="jupiter"
                        viewBox="0 0 582 582"
                        width="582"
                        height="582"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="291" cy="291" r="291" fill="#ECAD7A" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M38 294c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12H38zm220 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zM53 390c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm287 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm264 12c0-6.627-5.373-12-12-12H426c-6.627 0-12 5.373-12 12s5.373 12 12 12h166c6.627 0 12-5.373 12-12zm-190-84c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12H462v-.01c-6.395-.262-11.5-5.53-11.5-11.99s5.105-11.728 11.5-11.99V318h24c6.627 0 12-5.373 12-12s-5.373-12-12-12H330c-6.627 0-12 5.373-12 12s5.373 12 12 12h84zm298-12c0-6.627-5.373-12-12-12H544c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12z"
                                fill="#F0D29F"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                d="M159 402c0-6.627-5.373-12-12-12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12z"
                                fill="#D86534"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M466 54c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H466zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H164c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H246zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-264 12c0-6.627 5.373-12 12-12H78c6.627 0 12 5.373 12 12s-5.373 12-12 12H-88c-6.627 0-12-5.373-12-12zM90 78c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12H42v-.01c6.395-.262 11.5-5.53 11.5-11.99S48.395 78.272 42 78.01V78H18c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H90zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12z"
                                fill="#DC8E61"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M624 438c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H624zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H322c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H404zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zM58 546c0-6.627 5.373-12 12-12h166c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12zm190-84c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12H0c-6.627 0-12-5.373-12-12s5.373-12 12-12h200v-.01c6.395-.262 11.5-5.53 11.5-11.99s-5.105-11.728-11.5-11.99V462h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-84zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H-38c-6.627 0-12-5.373-12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="e"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#e)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M177 222c6.627 0 12 5.373 12 12s-5.373 12-12 12h-10c-6.627 0-12 5.373-12 12s5.373 12 12 12h89c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10l-.001-.01c-6.395-.263-11.499-5.53-11.499-11.99s5.104-11.727 11.499-11.99L246 222h65c6.627 0 12-5.373 12-12s-5.373-12-12-12H112c-6.627 0-12 5.373-12 12s5.373 12 12 12h65zm-46 36c0-6.627-5.373-12-12-12H57c-6.627 0-12 5.373-12 12s5.373 12 12 12h62c6.627 0 12-5.373 12-12zM9 246c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12H9zm475 12c0-6.627-5.373-12-12-12H304c-6.627 0-12 5.373-12 12s5.373 12 12 12h168c6.627 0 12-5.373 12-12zm64-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12h28zm-35-36c0-6.627-5.373-12-12-12H359c-6.627 0-12 5.373-12 12s5.373 12 12 12h142c6.627 0 12-5.373 12-12zm86-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-50c-6.627 0-12-5.373-12-12s5.373-12 12-12h50zM52 210c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12s5.373 12 12 12h28c6.627 0 12-5.373 12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="f"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#f)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M291 0h292v582H291z"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M291 577c157.953 0 286-128.047 286-286S448.953 5 291 5v572z"
                            fill="#A15C3E"
                        />
                        <mask
                            id="g"
                            maskUnits="userSpaceOnUse"
                            x="291"
                            y="5"
                            width="286"
                            height="572"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M291 577c157.953 0 286-128.047 286-286S448.953 5 291 5v572z"
                                fill="#fff"
                            />
                        </mask>
                        <g mask="url(#g)">
                            <circle
                                cx="291.5"
                                cy="291.5"
                                r="269.5"
                                fill="#F0D29F"
                            />
                            <circle
                                cx="292.5"
                                cy="291.5"
                                r="212.5"
                                fill="#E2BE81"
                            />
                            <circle
                                cx="292.5"
                                cy="291.5"
                                r="187.5"
                                fill="#D27140"
                            />
                            <circle cx="291" cy="291" r="42" fill="#565658" />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M118 366c-6.627 0-12 5.373-12 12s5.373 12 12 12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H118zm25 48c-6.627 0-12 5.373-12 12s5.373 12 12 12h76c6.627 0 12-5.373 12-12s-5.373-12-12-12h-76z"
                            fill="#D86534"
                        />
                    </svg>
            `;
        } else if (heading === "saturn") {
            contentText.innerHTML = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Saturn#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="saturn"
                        viewBox="0 0 668 668"
                        width="668"
                        height="668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.286 53.283c.112-.12.227-.24.344-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.05-24.049-61.756-148.848-191.653-278.745C248.001 160.205 123.203 74.399 99.153 98.448a11.51 11.51 0 00-.344.359L53.286 53.283zm56.562 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.243-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033a11.66 11.66 0 00-.343.36l-17.85-17.85z"
                            fill="#B87D43"
                        />
                        <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.284 0-16.971 4.686-4.686 12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.38c4.687 4.686 4.687 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0L206.615 252.6l.007-.008c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
                                fill="#ECB55A"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M334 110h209.089v416H334z"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M334 520c111.562 0 202-90.438 202-202s-90.438-202-202-202v404z"
                            fill="#9C4925"
                        />
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="334"
                            y="116"
                            width="202"
                            height="404"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M334 520c111.562 0 202-90.438 202-202s-90.438-202-202-202v404z"
                                fill="#fff"
                            />
                        </mask>
                        <g mask="url(#c)">
                            <circle cx="335" cy="318" r="114" fill="#E09B7F" />
                            <circle
                                cx="334.5"
                                cy="318.5"
                                r="34.5"
                                fill="#FEC"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.284 53.285a14 14 0 00-.357.345c-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.345-.357l-45.524-45.524c-.112.122-.227.242-.344.359-24.049 24.05-148.848-61.756-278.745-191.653C160.206 248 74.4 123.202 98.449 99.152c.118-.117.237-.232.359-.344L53.284 53.285zm56.563 56.562c-22.886 22.886 58.759 141.637 182.36 265.238 123.601 123.601 242.352 205.246 265.238 182.36l-17.143-17.143a9.717 9.717 0 01-.343.36c-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.118-.117.237-.231.36-.343l-17.85-17.85z"
                            fill="#B87D43"
                        />
                    </svg>
            `;
        } else if (heading === "uranus") {
            contentText.innerHTML = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Uranus#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="uranus"
                        viewBox="0 0 458 458"
                        width="458"
                        height="458"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="229" cy="229" r="229" fill="#65F0D5" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M445.12-150c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V-8h-.01c-.262-6.395-5.53-11.5-11.99-11.5S397.392-14.395 397.13-8h-.01v160c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12V70zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V79c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V238c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V274h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V142c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V356c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#49CBC2"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M181.12-220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-156c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156zm0 220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-78h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01V82c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-257c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-30c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12V0zm96-205c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-73c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm0 287c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm12 264c-6.627 0-12-5.373-12-12V168c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v166c0 6.627-5.372 12-12 12zm-84-190c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-9c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v257c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V204h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01v24c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V72c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v84zm-12 298c-6.627 0-12-5.373-12-12V286c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156c0 6.627-5.372 12-12 12z"
                                fill="#50DECD"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M157.12-253c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-78h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01V49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V135c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V171h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V39c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V253c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#77FFF5"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M229 0h229v458H229z"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M229 450c122.055 0 221-98.945 221-221S351.055 8 229 8v442z"
                            fill="#138B83"
                        />
                        <mask
                            id="e"
                            maskUnits="userSpaceOnUse"
                            x="229"
                            y="8"
                            width="221"
                            height="442"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M229 450c122.055 0 221-98.945 221-221S351.055 8 229 8v442z"
                                fill="#fff"
                            />
                        </mask>
                        <g mask="url(#e)">
                            <circle cx="230" cy="229" r="145" fill="#1BB9AE" />
                            <circle
                                cx="228.5"
                                cy="229.5"
                                r="32.5"
                                fill="#06504C"
                            />
                        </g>
                    </svg>
            `;
        } else if (heading === "neptune") {
            contentText.innerHTML = `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Neptune#Internal_structure";
            planetPicChild.innerHTML = `
            <svg
                        class="neptune"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                            <path
                                id="k"
                                d="M0 0c120.398 0 218 97.602 218 218S120.398 436 0 436z"
                            />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#497EFA"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 262c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 118c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#d)"
                                opacity=".4"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 430c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                                opacity=".4"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#2255CA"
                                fill-rule="nonzero"
                                d="M148.177 274c0-6.627-5.372-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h79c6.628 0 12 5.373 12 12s-5.372 12-12 12h-3v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h3c6.628 0 12 5.373 12 12s-5.372 12-12 12h-61c-6.627 0-12-5.373-12-12s5.373-12 12-12h1c6.628 0 12-5.373 12-12z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#j)"
                                opacity=".078"
                                d="M225 11h215.354v428H225z"
                            />
                            <g transform="translate(225 7)">
                                <mask id="l" fill="#fff">
                                    <use xlink:href="#k" />
                                </mask>
                                <use fill="#94D5FF" xlink:href="#k" />
                                <circle
                                    cy="218"
                                    r="211"
                                    fill="#2959C9"
                                    mask="url(#l)"
                                />
                                <circle
                                    cy="218"
                                    r="147"
                                    fill="#6593FF"
                                    mask="url(#l)"
                                />
                                <circle
                                    cy="218"
                                    r="82"
                                    fill="#4A7AE9"
                                    mask="url(#l)"
                                />
                                <circle
                                    cy="218"
                                    r="32"
                                    fill="#042570"
                                    mask="url(#l)"
                                />
                            </g>
                        </g>
                    </svg>
            `;
        }
        before.remove();
    });
    //? surface button clicked tablet
    surfaceBtnId.addEventListener("click", () => {
        // function makeBeforeforSurface() {
        //     let before = document.createElement("div");
        //     before.className = "before";
        //     return before;
        // }
        surfaceBtnId.classList.add("active");
        surfaceBtnId.classList.add("tablet");
        structureBtnId.classList.remove("active");
        structureBtnId.classList.remove("tablet");
        overviewBtnId.classList.remove("active");
        overviewBtnId.classList.remove("tablet");
        //mercury page
        if (heading === "mercury") {
            contentText.innerHTML = `Mercury's surface is similar in appearance to that of the
                    Moon, showing extensive mare-like plains and heavy
                    cratering, indicating that it has been geologically inactive
                    for billions of years. It is more heterogeneous than either
                    Mars's or the Moon’s.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology";
            planetPicChild.innerHTML = `
                <svg
                        class="mercury"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 290 290"
                        width="290"
                        height="290"
                    >
                        <defs>
                            <circle id="a" cx="145" cy="145" r="145" />
                            <circle id="c" cx="145" cy="145" r="145" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="145"
                                cy="145"
                                r="145"
                                fill="#DEF4FC"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#B1D5E2"
                                fill-rule="nonzero"
                                d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#d)"
                                opacity=".078"
                                d="M146 0h145v290H146z"
                            />
                        </g>
                    </svg>
                `;
            before = makeBeforeforSurface();
            before.style.backgroundImage =
                "url('./assets/geology-mercury.png')";
            planetPic.appendChild(before);
        } else if (heading === "venus") {
            contentText.innerHTML = `Much of the Venusian surface appears to have been shaped by
                    volcanic activity. Venus has several times as many volcanoes
                    as Earth, and it has 167 large volcanoes that are over 100
                    km (60 mi) across. The only volcanic complex of this size on
                    Earth is the Big Island of Hawaii.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Venus#Surface_geology";
            planetPicChild.innerHTML = `
            <svg
                        class="venus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 400 400"
                        width="400"
                        height="400"
                    >
                        <defs>
                            <circle id="a" cx="200" cy="200" r="200" />
                            <circle id="c" cx="200" cy="200" r="200" />
                            <circle id="e" cx="200" cy="200" r="200" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="200"
                                cy="200"
                                r="200"
                                fill="#F7CC7F"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FFE6AE"
                                fill-rule="nonzero"
                                d="M310 311c6.627 0 12 5.373 12 12s-5.373 12-12 12H189l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H79c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-20-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-19v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h80c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h1c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12H120c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.627 0 12-5.373 12-12s-5.373-12-12-12H59c-6.627 0-12-5.373-12-12s5.373-12 12-12h231zm-173 96c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h76zm326-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h41zM-9.5 167c6.627 0 12 5.373 12 12s-5.373 12-12 12h-44c-6.627 0-12-5.373-12-12s5.373-12 12-12h44zM278 119c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-139 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm158-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S222.604 70.727 229 70.99L229 71h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12s-5.373-12-12-12H40c-6.627 0-12-5.373-12-12s5.373-12 12-12h257zm3 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H88c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#E29F58"
                                fill-rule="nonzero"
                                d="M205 263c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM99 203c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h14c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H64v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm176 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H302c-6.627 0-12-5.373-12-12s5.373-12 12-12h101zm-368 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H15c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm313-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#f)"
                                opacity=".078"
                                d="M201-25h225v450H201z"
                            />
                        </g>
                    </svg>
                    `;
            before = makeBeforeforSurface();
            before.style.backgroundImage = "url('./assets/geology-venus.png')";
            planetPic.appendChild(before);
        } else if (heading === "earth") {
            contentText.innerHTML = `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`;
            sourceLink.href = "";
            planetPicChild.innerHTML = `
            <svg
                        class="earth"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                            <circle id="k" cx="225" cy="225" r="225" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#545BFE"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M134 351c6.627 0 12-5.373 12-12s-5.373-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h-2c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h49c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h51c6.627 0 12 5.373 12 12s-5.373 12-12 12h-6v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01c6.627 0 12 5.373 12 12s-5.373 12-12 12h-27v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5zM49 183c6.627 0 12 5.373 12 12s-5.373 12-12 12H14c-6.627 0-12-5.373-12-12s5.373-12 12-12h35zm49-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm78-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-1v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99V63h7c6.627 0 12 5.373 12 12s-5.373 12-12 12h-69v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h5c6.627 0 12 5.373 12 12s-5.373 12-12 12H-1c-6.627 0-12-5.373-12-12s5.373-12 12-12H9c6.627 0 12-5.373 12-12S15.627 87 9 87h4C6.373 87 1 81.627 1 75s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12h-48c-6.627 0-12-5.373-12-12s5.373-12 12-12h205z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#4FCDF9"
                                fill-rule="nonzero"
                                d="M390 327c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h-3c6.627 0 12-5.373 12-12s-5.373-12-12-12h-45c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12h-34c-6.627 0-12-5.373-12-12s5.373-12 12-12h26c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h56c6.627 0 12 5.373 12 12s-5.373 12-12 12l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h91c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h10c6.627 0 12 5.373 12 12s-5.373 12-12 12h-15l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h-2c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-36c-6.627 0-12-5.373-12-12s5.373-12 12-12h-4zm90-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-18-168c6.627 0 12 5.373 12 12s-5.373 12-12 12h-14c-6.627 0-12-5.373-12-12s5.373-12 12-12h14zm198-72c6.627 0 12 5.373 12 12s-5.373 12-12 12h-7v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h16c6.627 0 12 5.373 12 12s-5.373 12-12 12H495c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5c6.627 0 12-5.373 12-12s-5.373-12-12-12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h211zM359 87c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24zm38 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3c-6.627 0-12-5.373-12-12s5.373-12 12-12h3zm13-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M413 111c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM307 51c0-6.627-5.373-12-12-12H175c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-16c-6.627 0-12-5.373-12-12s5.373-12 12-12h62c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V15h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S357.604 62.727 364 62.99L364 63h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm231-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H318c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M97 363c0-6.627-5.373-12-12-12H17c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H95c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H81c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#FFF"
                                fill-rule="nonzero"
                                d="M349 459c0-6.627-5.373-12-12-12h-68c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12h-23c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
                                mask="url(#j)"
                            />
                            <mask id="l" fill="#fff">
                                <use xlink:href="#k" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#l)"
                                opacity=".078"
                                d="M225.484-25h250.484v500H225.484z"
                            />
                        </g>
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage = "url('./assets/geology-earth.png')";
            planetPic.appendChild(before);
        } else if (heading === "mars") {
            contentText.innerHTML = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Mars#Surface_geology";
            planetPicChild.innerHTML = `
            <svg
                        class="mars"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 336 336"
                        width="336"
                        height="336"
                    >
                        <defs>
                            <circle id="a" cx="168" cy="168" r="168" />
                            <circle id="c" cx="168" cy="168" r="168" />
                            <circle id="e" cx="168" cy="168" r="168" />
                            <circle id="g" cx="168" cy="168" r="168" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="168"
                                cy="168"
                                r="168"
                                fill="#FF6A45"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99S148.604 47.727 155 47.99V48H168c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#FF9B6B"
                                fill-rule="nonzero"
                                d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
                                mask="url(#d)"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#D04237"
                                fill-rule="nonzero"
                                d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
                                mask="url(#f)"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#h)"
                                opacity=".078"
                                d="M169-16h184v368H169z"
                            />
                        </g>
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage = "url('./assets/geology-mars.png')";
            planetPic.appendChild(before);
        } else if (heading === "jupiter") {
            contentText.innerHTML = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices";
            planetPicChild.innerHTML = `
            <svg
                        class="jupiter"
                        viewBox="0 0 582 582"
                        width="582"
                        height="582"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="291" cy="291" r="291" fill="#ECAD7A" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M38 294c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12H38zm220 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zM53 390c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm287 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm264 12c0-6.627-5.373-12-12-12H426c-6.627 0-12 5.373-12 12s5.373 12 12 12h166c6.627 0 12-5.373 12-12zm-190-84c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12H462v-.01c-6.395-.262-11.5-5.53-11.5-11.99s5.105-11.728 11.5-11.99V318h24c6.627 0 12-5.373 12-12s-5.373-12-12-12H330c-6.627 0-12 5.373-12 12s5.373 12 12 12h84zm298-12c0-6.627-5.373-12-12-12H544c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12z"
                                fill="#F0D29F"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                d="M159 402c0-6.627-5.373-12-12-12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12z"
                                fill="#D86534"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M466 54c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H466zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H164c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H246zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-264 12c0-6.627 5.373-12 12-12H78c6.627 0 12 5.373 12 12s-5.373 12-12 12H-88c-6.627 0-12-5.373-12-12zM90 78c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12H42v-.01c6.395-.262 11.5-5.53 11.5-11.99S48.395 78.272 42 78.01V78H18c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H90zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12z"
                                fill="#DC8E61"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M624 438c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H624zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H322c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H404zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zM58 546c0-6.627 5.373-12 12-12h166c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12zm190-84c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12H0c-6.627 0-12-5.373-12-12s5.373-12 12-12h200v-.01c6.395-.262 11.5-5.53 11.5-11.99s-5.105-11.728-11.5-11.99V462h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-84zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H-38c-6.627 0-12-5.373-12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="e"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#e)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M177 222c6.627 0 12 5.373 12 12s-5.373 12-12 12h-10c-6.627 0-12 5.373-12 12s5.373 12 12 12h89c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10l-.001-.01c-6.395-.263-11.499-5.53-11.499-11.99s5.104-11.727 11.499-11.99L246 222h65c6.627 0 12-5.373 12-12s-5.373-12-12-12H112c-6.627 0-12 5.373-12 12s5.373 12 12 12h65zm-46 36c0-6.627-5.373-12-12-12H57c-6.627 0-12 5.373-12 12s5.373 12 12 12h62c6.627 0 12-5.373 12-12zM9 246c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12H9zm475 12c0-6.627-5.373-12-12-12H304c-6.627 0-12 5.373-12 12s5.373 12 12 12h168c6.627 0 12-5.373 12-12zm64-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12h28zm-35-36c0-6.627-5.373-12-12-12H359c-6.627 0-12 5.373-12 12s5.373 12 12 12h142c6.627 0 12-5.373 12-12zm86-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-50c-6.627 0-12-5.373-12-12s5.373-12 12-12h50zM52 210c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12s5.373 12 12 12h28c6.627 0 12-5.373 12-12z"
                                fill="#D89D6D"
                            />
                        </g>
                        <mask
                            id="f"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="582"
                            height="582"
                        >
                            <circle cx="291" cy="291" r="291" fill="#fff" />
                        </mask>
                        <g mask="url(#f)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M291 0h292v582H291z"
                            />
                        </g>
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage =
                "url('./assets/geology-jupiter.png')";
            planetPic.appendChild(before);
        } else if (heading === "saturn") {
            contentText.innerHTML = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `;
            sourceLink.href = "https://en.wikipedia.org/wiki/Saturn#Atmosphere";
            planetPicChild.innerHTML = `
            <svg
                        class="saturn"
                        viewBox="0 0 668 668"
                        width="668"
                        height="668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.285 53.283c.113-.12.228-.24.345-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.049-24.049-61.757-148.848-191.653-278.745C248.001 160.205 123.202 74.399 99.153 98.448a11.74 11.74 0 00-.344.359L53.285 53.283zm56.563 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.242-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033-.117.118-.232.238-.343.36l-17.85-17.85z"
                            fill="#B87D43"
                        />
                        <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.285 0-16.971s12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.379c4.687 4.687 4.687 12.285 0 16.971-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0l141.422 141.421.007-.007c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.687 16.97 0l110.309 110.308c4.686 4.687 4.686 12.285 0 16.971s-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
                                fill="#ECB55A"
                            />
                        </g>
                        <g>
                            <mask
                                id="b"
                                maskUnits="userSpaceOnUse"
                                x="126"
                                y="110"
                                width="416"
                                height="416"
                            >
                                <circle cx="334" cy="318" r="208" fill="#fff" />
                            </mask>
                            <g mask="url(#b)">
                                <path
                                    opacity=".078"
                                    fill="#000"
                                    d="M334 110h209.089v416H334z"
                                />
                            </g>
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.284 53.285c-.12.112-.24.227-.357.345-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.344-.357l-45.523-45.524c-.112.122-.227.242-.344.359-24.05 24.05-148.848-61.756-278.745-191.653S74.399 123.202 98.449 99.152c.117-.117.237-.232.359-.344L53.284 53.285zm56.562 56.562c-22.886 22.886 58.76 141.637 182.361 265.238s242.352 205.247 265.238 182.36l-17.143-17.143c-.112.123-.226.243-.343.36-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.117-.117.237-.231.36-.343l-17.851-17.85z"
                            fill="#B87D43"
                        />
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage = "url('./assets/geology-saturn.png')";
            planetPic.appendChild(before);
        } else if (heading === "uranus") {
            contentText.innerHTML = `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`;
            sourceLink.href = "https://en.wikipedia.org/wiki/Uranus#Atmosphere";
            planetPicChild.innerHTML = `
            <svg
                        class="uranus"
                        viewBox="0 0 458 458"
                        width="458"
                        height="458"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="229" cy="229" r="229" fill="#65F0D5" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M445.12-150c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V-8h-.01c-.262-6.395-5.53-11.5-11.99-11.5S397.392-14.395 397.13-8h-.01v160c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12V70zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V79c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V238c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V274h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V142c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V356c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#49CBC2"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M181.12-220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-156c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156zm0 220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-78h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01V82c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-257c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-30c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12V0zm96-205c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-73c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm0 287c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm12 264c-6.627 0-12-5.373-12-12V168c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v166c0 6.627-5.372 12-12 12zm-84-190c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-9c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v257c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V204h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01v24c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V72c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v84zm-12 298c-6.627 0-12-5.373-12-12V286c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156c0 6.627-5.372 12-12 12z"
                                fill="#50DECD"
                            />
                        </g>
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#c)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M157.12-253c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-78h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01V49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V135c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V171h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V39c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V253c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
                                fill="#77FFF5"
                            />
                        </g>
                        <mask
                            id="d"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="458"
                            height="458"
                        >
                            <circle cx="229" cy="229" r="229" fill="#fff" />
                        </mask>
                        <g mask="url(#d)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M229 0h229v458H229z"
                            />
                        </g>
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage = "url('./assets/geology-uranus.png')";
            planetPic.appendChild(before);
        } else if (heading === "neptune") {
            contentText.innerHTML = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`;
            sourceLink.href =
                "https://en.wikipedia.org/wiki/Neptune#Atmosphere";
            planetPicChild.innerHTML = `
            <svg
                        class="neptune"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 450 450"
                        width="450"
                        height="450"
                    >
                        <defs>
                            <circle id="a" cx="225" cy="225" r="225" />
                            <circle id="c" cx="225" cy="225" r="225" />
                            <circle id="e" cx="225" cy="225" r="225" />
                            <circle id="g" cx="225" cy="225" r="225" />
                            <circle id="i" cx="225" cy="225" r="225" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <circle
                                cx="225"
                                cy="225"
                                r="225"
                                fill="#497EFA"
                                fill-rule="nonzero"
                            />
                            <mask id="b" fill="#fff">
                                <use xlink:href="#a" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 262c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#b)"
                            />
                            <mask id="d" fill="#fff">
                                <use xlink:href="#c" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 118c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V70h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#d)"
                                opacity=".4"
                            />
                            <mask id="f" fill="#fff">
                                <use xlink:href="#e" />
                            </mask>
                            <path
                                fill="#356CEE"
                                fill-rule="nonzero"
                                d="M317.177 430c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm-287 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm539 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-166c-6.627 0-12-5.373-12-12s5.373-12 12-12h166zm-334-96c6.628 0 12 5.373 12 12s-5.372 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.628 0 12-5.373 12-12s-5.372-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm168 36c0-6.627-5.372-12-12-12h-84c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.628 0 12 5.373 12 12s-5.372 12-12 12h-24v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h200c6.628 0 12 5.373 12 12s-5.372 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12h9c6.628 0 12-5.373 12-12zm-388-36c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zm662 0c6.628 0 12 5.373 12 12s-5.372 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
                                mask="url(#f)"
                                opacity=".4"
                            />
                            <mask id="h" fill="#fff">
                                <use xlink:href="#g" />
                            </mask>
                            <path
                                fill="#2255CA"
                                fill-rule="nonzero"
                                d="M148.177 274c0-6.627-5.372-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h79c6.628 0 12 5.373 12 12s-5.372 12-12 12h-3v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h3c6.628 0 12 5.373 12 12s-5.372 12-12 12h-61c-6.627 0-12-5.373-12-12s5.373-12 12-12h1c6.628 0 12-5.373 12-12z"
                                mask="url(#h)"
                            />
                            <mask id="j" fill="#fff">
                                <use xlink:href="#i" />
                            </mask>
                            <path
                                fill="#000"
                                fill-rule="nonzero"
                                mask="url(#j)"
                                opacity=".078"
                                d="M225 11h215.354v428H225z"
                            />
                        </g>
                    </svg>
            `;
            before = makeBeforeforSurface();
            before.style.backgroundImage =
                "url('./assets/geology-neptune.png')";
            planetPic.appendChild(before);
        }
    });
}

// !
overviewBtn.addEventListener("click", () => {
    // if (heading === "saturn" && window.innerWidth < 670) {
    //     contentText.innerHTML = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;
    //     sourceLink.href = "https://en.wikipedia.org/wiki/Saturn";
    //     planetPicChild.innerHTML = `
    //         <svg
    //                     class="saturn"
    //                     viewBox="0 0 668 668"
    //                     width="668"
    //                     height="668"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                     <path
    //                         fill-rule="evenodd"
    //                         clip-rule="evenodd"
    //                         d="M53.285 53.283c.113-.12.228-.24.345-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.049-24.049-61.757-148.848-191.653-278.745C248.001 160.205 123.202 74.399 99.153 98.448a11.74 11.74 0 00-.344.359L53.285 53.283zm56.563 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.242-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033-.117.118-.232.238-.343.36l-17.85-17.85z"
    //                         fill="#B87D43"
    //                     />
    //                     <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
    //                     <mask
    //                         id="a"
    //                         maskUnits="userSpaceOnUse"
    //                         x="126"
    //                         y="110"
    //                         width="416"
    //                         height="416"
    //                     >
    //                         <circle cx="334" cy="318" r="208" fill="#fff" />
    //                     </mask>
    //                     <g mask="url(#a)">
    //                         <path
    //                             fill-rule="evenodd"
    //                             clip-rule="evenodd"
    //                             d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.285 0-16.971s12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.379c4.687 4.687 4.687 12.285 0 16.971-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0l141.422 141.421.007-.007c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.687 16.97 0l110.309 110.308c4.686 4.687 4.686 12.285 0 16.971s-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
    //                             fill="#ECB55A"
    //                         />
    //                     </g>
    //                     <g>
    //                         <mask
    //                             id="b"
    //                             maskUnits="userSpaceOnUse"
    //                             x="126"
    //                             y="110"
    //                             width="416"
    //                             height="416"
    //                         >
    //                             <circle cx="334" cy="318" r="208" fill="#fff" />
    //                         </mask>
    //                         <g mask="url(#b)">
    //                             <path
    //                                 opacity=".078"
    //                                 fill="#000"
    //                                 d="M334 110h209.089v416H334z"
    //                             />
    //                         </g>
    //                     </g>
    //                     <path
    //                         fill-rule="evenodd"
    //                         clip-rule="evenodd"
    //                         d="M53.284 53.285c-.12.112-.24.227-.357.345-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.344-.357l-45.523-45.524c-.112.122-.227.242-.344.359-24.05 24.05-148.848-61.756-278.745-191.653S74.399 123.202 98.449 99.152c.117-.117.237-.232.359-.344L53.284 53.285zm56.562 56.562c-22.886 22.886 58.76 141.637 182.361 265.238s242.352 205.247 265.238 182.36l-17.143-17.143c-.112.123-.226.243-.343.36-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.117-.117.237-.231.36-.343l-17.851-17.85z"
    //                         fill="#B87D43"
    //                     />
    //                 </svg>
    //         `;
    // }
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

//!
structureBtn.addEventListener("click", () => {
    if (heading === "saturn" && window.innerWidth < 670) {
        overviewContent.classList.add("active");
        structureContent.classList.add("d-non");
        surfaceContent.classList.add("d-non");

        dash[1].classList.add("active");
        dash[0].classList.remove("active");
        dash[2].classList.remove("active");
        dash[0].classList.add("hidden");
        dash[2].classList.add("hidden");

        menuItems[1].classList.add("active");
        menuItems[0].classList.remove("active");
        menuItems[2].classList.remove("active");
        contentText.innerHTML = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`;
        sourceLink.href =
            "https://en.wikipedia.org/wiki/Saturn#Internal_structure";
        planetPicChild.innerHTML = `
            <svg
                        class="saturn"
                        viewBox="0 0 668 668"
                        width="668"
                        height="668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.286 53.283c.112-.12.227-.24.344-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.05-24.049-61.756-148.848-191.653-278.745C248.001 160.205 123.203 74.399 99.153 98.448a11.51 11.51 0 00-.344.359L53.286 53.283zm56.562 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.243-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033a11.66 11.66 0 00-.343.36l-17.85-17.85z"
                            fill="#B87D43"
                        />
                        <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.284 0-16.971 4.686-4.686 12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.38c4.687 4.686 4.687 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0L206.615 252.6l.007-.008c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
                                fill="#ECB55A"
                            />
                        </g>
                        <mask
                            id="b"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                opacity=".078"
                                fill="#000"
                                d="M334 110h209.089v416H334z"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M334 520c111.562 0 202-90.438 202-202s-90.438-202-202-202v404z"
                            fill="#9C4925"
                        />
                        <mask
                            id="c"
                            maskUnits="userSpaceOnUse"
                            x="334"
                            y="116"
                            width="202"
                            height="404"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M334 520c111.562 0 202-90.438 202-202s-90.438-202-202-202v404z"
                                fill="#fff"
                            />
                        </mask>
                        <g mask="url(#c)">
                            <circle cx="335" cy="318" r="114" fill="#E09B7F" />
                            <circle
                                cx="334.5"
                                cy="318.5"
                                r="34.5"
                                fill="#FEC"
                            />
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.284 53.285a14 14 0 00-.357.345c-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.345-.357l-45.524-45.524c-.112.122-.227.242-.344.359-24.049 24.05-148.848-61.756-278.745-191.653C160.206 248 74.4 123.202 98.449 99.152c.118-.117.237-.232.359-.344L53.284 53.285zm56.563 56.562c-22.886 22.886 58.759 141.637 182.36 265.238 123.601 123.601 242.352 205.246 265.238 182.36l-17.143-17.143a9.717 9.717 0 01-.343.36c-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.118-.117.237-.231.36-.343l-17.85-17.85z"
                            fill="#B87D43"
                        />
                    </svg>
            `;
    } else {
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
    }
});

// !
surfaceBtn.addEventListener("click", () => {
    if (heading === "saturn" && window.innerWidth < 670) {
        surfaceContent.classList.add("d-non");
        structureContent.classList.add("d-non");
        overviewContent.classList.add("active");
        overviewContent.classList.add("planet-menu__surface-pic-saturn");

        dash[2].classList.add("active");
        dash[1].classList.remove("active");
        dash[0].classList.remove("active");
        dash[1].classList.add("hidden");
        dash[0].classList.add("hidden");

        menuItems[2].classList.add("active");
        menuItems[1].classList.remove("active");
        menuItems[0].classList.remove("active");
        contentText.innerHTML = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `;
        sourceLink.href = "https://en.wikipedia.org/wiki/Saturn#Atmosphere";
        planetPicChild.innerHTML = `
            <svg
                        class="saturn"
                        viewBox="0 0 668 668"
                        width="668"
                        height="668"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.285 53.283c.113-.12.228-.24.345-.357 28.705-28.705 177.658 73.709 332.696 228.747 155.038 155.038 257.452 303.991 228.747 332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344 24.049-24.049-61.757-148.848-191.653-278.745C248.001 160.205 123.202 74.399 99.153 98.448a11.74 11.74 0 00-.344.359L53.285 53.283zm56.563 56.563c22.886-22.886 141.637 58.759 265.238 182.36 123.601 123.601 205.246 242.352 182.36 265.238l-17.143-17.143c.123-.111.242-.226.36-.343 21.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033-.117.118-.232.238-.343.36l-17.85-17.85z"
                            fill="#B87D43"
                        />
                        <circle cx="334" cy="318" r="208" fill="#FCCB6B" />
                        <mask
                            id="a"
                            maskUnits="userSpaceOnUse"
                            x="126"
                            y="110"
                            width="416"
                            height="416"
                        >
                            <circle cx="334" cy="318" r="208" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M540.369 518.472c-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97l110.308 110.309c4.687 4.686 12.285 4.686 16.971 0s4.686-12.284 0-16.971L540.369 518.472zM384.806 362.908c-4.687-4.686-12.285-4.686-16.971 0s-4.686 12.284 0 16.971l55.154 55.154-.007.007c4.337 4.708 4.222 12.042-.346 16.61-4.568 4.568-11.903 4.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l181.727 181.727c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971l-34.648-34.648c-4.686-4.687-4.686-12.285 0-16.971s12.284-4.686 16.971 0l21.213 21.213c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284 0-16.97L384.806 362.908zm77.074 212.839c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.686-4.687 4.686-12.285 0-16.971l-51.619-51.619zM258.941 372.808c-4.687-4.687-12.285-4.687-16.971 0-4.686 4.686-4.686 12.284 0 16.97l51.619 51.619c4.686 4.686 12.284 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.971l-51.618-51.618zM63.779 194.617c4.687-4.687 12.284-4.687 16.97 0l117.38 117.379c4.687 4.687 4.687 12.285 0 16.971-4.686 4.686-12.284 4.686-16.97 0l-117.38-117.38c-4.686-4.686-4.686-12.284 0-16.97zm193.747 74.953c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.686-4.686 12.284 0 16.971l6.364 6.364c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.971 0L48.223 128.149c-4.687-4.687-4.687-12.285 0-16.971 4.686-4.686 12.284-4.686 16.97 0l141.422 141.421.007-.007c4.707 4.337 12.042 4.222 16.61-.346 4.568-4.568 4.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.686 12.284-4.687 16.97 0l110.309 110.308c4.686 4.687 4.686 12.285 0 16.971s-12.284 4.686-16.971 0l-59.397-59.397zM55.294 50.367c4.686-4.686 12.284-4.686 16.97 0l110.309 110.309c4.686 4.686 4.686 12.284 0 16.97-4.686 4.686-12.284 4.686-16.97 0L55.293 67.338c-4.685-4.687-4.685-12.285 0-16.971z"
                                fill="#ECB55A"
                            />
                        </g>
                        <g>
                            <mask
                                id="b"
                                maskUnits="userSpaceOnUse"
                                x="126"
                                y="110"
                                width="416"
                                height="416"
                            >
                                <circle cx="334" cy="318" r="208" fill="#fff" />
                            </mask>
                            <g mask="url(#b)">
                                <path
                                    opacity=".078"
                                    fill="#000"
                                    d="M334 110h209.089v416H334z"
                                />
                            </g>
                        </g>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M53.284 53.285c-.12.112-.24.227-.357.345-28.705 28.704 73.709 177.657 228.747 332.695C436.712 541.363 585.665 643.777 614.37 615.072c.117-.117.232-.236.344-.357l-45.523-45.524c-.112.122-.227.242-.344.359-24.05 24.05-148.848-61.756-278.745-191.653S74.399 123.202 98.449 99.152c.117-.117.237-.232.359-.344L53.284 53.285zm56.562 56.562c-22.886 22.886 58.76 141.637 182.361 265.238s242.352 205.247 265.238 182.36l-17.143-17.143c-.112.123-.226.243-.343.36-21.14 21.14-130.647-54.091-244.589-168.033C181.428 258.687 106.197 149.18 127.337 128.04c.117-.117.237-.231.36-.343l-17.851-17.85z"
                            fill="#B87D43"
                        />
                    </svg>
            `;
    } else {
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
    }
});
