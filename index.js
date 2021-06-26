const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let pageY = window.pageYOffset;

let below = false;
window.onscroll = () => {
    let Ypos = window.pageYOffset;

    if (Ypos > 315 && !below) {
        below = true;
        document.querySelector("#second").id = "second-display";
    } else if (Ypos < 315 && below) {
        below = false;
        console.log("Navbar inpage up");
        document.querySelector("#second-display").id = "second";
    }
};

let valueRefresh = window.scrollY / -600;
if (valueRefresh !== 0) {
    document.body.style.overflowY = "scroll";
}

window.addEventListener("scroll", function () {
    let value = 1 + window.scrollY / -600;
    header.style.opacity = value;
    let valueletiant = value - 1;
    header.style.transform = "translateY(" + valueletiant + "em)";
});

let topOffset = document.querySelector("#top").offsetTop;

document.querySelectorAll('.project-box').forEach((element) => {
    element.addEventListener('mouseover', function (card) {
        (card.target.classList.contains('project-box') ? card.target.querySelector('.project-box-discover').classList.add('pbd-display') : 0);
    }, false);
    element.addEventListener('mouseleave', function (card) {
        (card.target.classList.contains('project-box') ? card.target.querySelector('.project-box-discover').classList.remove('pbd-display') : 0);
    }, false);
}, false)


function turnHeaderFirstImage() {
    document
        .querySelector("#header_first_image")
        .classList.add("turn-header-first-image");
}

let open = 0;

function versionInfosDisplay() {
    if (open == 0) {
        document.querySelector("#ver_inf").classList.add("ver-inf-display");
        document.querySelector("main").classList.add("blur");
        document.querySelector("header").classList.add("blur");
        document.querySelector("footer").classList.add("blur");
        open = 1;
    } else {
        document.querySelector("#ver_inf").classList.remove("ver-inf-display");
        document.querySelector("main").classList.remove("blur");
        document.querySelector("header").classList.remove("blur");
        document.querySelector("footer").classList.remove("blur");
        open = 0;
    }
}

let sneakPeek = 0;

function changelogTitle() {
    if (sneakPeek == 0) {
        document.querySelector("#changelog").classList.add("slide-out");
        document.querySelector("#sneak_peek").classList.remove("slide-out");
        sneakPeek = 1;
    } else {
        document.querySelector("#sneak_peek").classList.add("slide-out");
        document.querySelector("#changelog").classList.remove("slide-out");
        sneakPeek = 0;
    }
}

function infosAboutVersionInfosBtn() {
    document.querySelector("#die_infos").innerHTML =
        "[Version actuelle] Clickez pour ouvrir le change log.";
    document.querySelector("#displayInfosElement").style.marginBottom = "25px";
}
function infosAboutScrollBtn() {
    document.querySelector("#die_infos").innerHTML =
        "[Scroll] Clickez pour scroller et découvrir le contenu.";
    document.querySelector("#displayInfosElement").style.marginBottom = "25px";
}

function infosAboutNone() {
    document.querySelector("#die_infos").innerHTML = "";
    document.querySelector("#displayInfosElement").style.marginBottom = "-25px";
}

// Section.
let retracta = 0;
function retract(section_id) {
    document.getElementById(section_id).classList.toggle("display-none");
}
