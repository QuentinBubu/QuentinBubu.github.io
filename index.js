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

// Project Box.
function pbOne(){
  document.getElementById('pbd_one').classList.add('pbd-display');
}
function pbTwo(){
  document.getElementById('pbd_two').classList.add('pbd-display');
}
function pbThree(){
  document.getElementById('pbd_three').classList.add('pbd-display');
}
function pbFour(){
  document.getElementById('pbd_four').classList.add('pbd-display');
}
function pbFive(){
  document.getElementById('pbd_five').classList.add('pbd-display');
}
function pbSix(){
  document.getElementById('pbd_six').classList.add('pbd-display');
}

function pbOneOut(){
  document.getElementById('pbd_one').classList.remove('pbd-display');
}
function pbTwoOut(){
  document.getElementById('pbd_two').classList.remove('pbd-display');
}
function pbThreeOut(){
  document.getElementById('pbd_three').classList.remove('pbd-display');
}
function pbFourOut(){
  document.getElementById('pbd_four').classList.remove('pbd-display');
}
function pbFiveOut(){
  document.getElementById('pbd_five').classList.remove('pbd-display');
}
function pbSixOut(){
  document.getElementById('pbd_six').classList.remove('pbd-display');
}
// endsection

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

function infosAboutVersionInfosBtn(){
  document.getElementById('die_infos').innerHTML = "[Version actuelle] Clickez pour ouvrir le change log.";
  document.getElementById('displayInfosElement').style.marginBottom = "25px";
}
function infosAboutScrollBtn(){
  document.getElementById('die_infos').innerHTML = "[Scroll] Clickez pour scroller et découvrir le contenu.";
  document.getElementById('displayInfosElement').style.marginBottom = "25px";
}

function infosAboutNone(){
  document.getElementById('die_infos').innerHTML = "";
  document.getElementById('displayInfosElement').style.marginBottom = "-25px";
}

// Section.
let retracta = 0;
function retract(section_id) {
    document.getElementById(section_id).classList.toggle("display-none");
}
