// iTyped
ityped.init(document.querySelector("#p-1 > h1"), {
    strings: ["Portfolio de Quentin Bubu", "Scroller pour découvrir!"],
    typeSpeed: 100,
    backDelay: 1000,
    cursorChar: "_",
});

// Page scroll
const arrowUp = document.querySelector("#arrow-up > svg"),
    arrowDown = document.querySelector("#arrow-down > svg");

arrowUp.addEventListener("click", () => {
    scrollAddY(-1);
});

arrowDown.addEventListener("click", () => {
    scrollAddY(1);
});

window.addEventListener("load", function () {
    arrowUp.style.display = (window.scrollY === 0 ? "none" : "block")
    arrowDown.style.display = (window.innerHeight + window.scrollY >= document.body.offsetHeight ? "none" : "block")
});

window.addEventListener("scroll", function () {
    arrowUp.style.display = (window.scrollY === 0 ? "none" : "block")
    arrowDown.style.display = (window.innerHeight + window.scrollY >= document.body.offsetHeight ? "none" : "block")
});

function scrollAddY(direction) {
    const winHeight = window.innerHeight,
        scroll = window.pageYOffset || document.documentElement.scrollTop;
    let goTo = Math.round(scroll / winHeight) * winHeight + direction * winHeight;
    window.scrollTo({ top: goTo, behavior: "smooth" });
}

// Diapo / disposition
const arrowRight = document.querySelector("#p-2-arrow-right"),
    arrowLeft = document.querySelector("#p-2-arrow-left"),
    diapos =  document.querySelectorAll(".langage"),
    disposition = document.querySelector("#p-2-disposition"),
    langageContainner = document.querySelector("#p-2-langage-container")

let currentDiapo = 0,
    dispo = 0

arrowRight.addEventListener("click", () => { diapo(1) })
arrowLeft.addEventListener("click", () => { diapo(-1) })
disposition.addEventListener("click", () => {changeDisposition()})

diapos.forEach((e, i) => {
    e.querySelector("img").addEventListener("click", () => {
        currentDiapo = 0
        changeDisposition()
        diapo(i)
        currentDiapo = i
    })
})

function diapo(direction) {
    let show;

    if (currentDiapo + direction < 0) {
        show = diapos.length - 1
    } else if (currentDiapo + direction > diapos.length - 1) {
        show = 0
    } else {
        show = currentDiapo + direction
    }

    diapos[currentDiapo].classList.toggle('current')
    diapos[show].classList.toggle('current')
    currentDiapo = show
}

function changeDisposition () {
    diapos[currentDiapo].classList.toggle('current')
    langageContainner.classList.toggle("container-grid")
    if (dispo === 0) {
        display = "none"
        dispo = 1
    } else {
        display = "block"
        dispo = 0
    }
    arrowRight.style.display = display
    arrowLeft.style.display = display
    diapos.forEach((e) => {
        e.querySelector("figcaption").style.display = display
    })
}