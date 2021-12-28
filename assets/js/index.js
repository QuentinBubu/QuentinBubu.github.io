// iTyped
ityped.init(document.querySelector("#p-1 > h1"), {
    strings: ["Portfolio de Quentin Bubu", "Scroller pour défiler!"],
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
    let goTo = Math.floor(scroll / winHeight) * winHeight + direction * winHeight;
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
    if (dispo === 0) {
        diapos[currentDiapo].classList.remove('current')
        arrowRight.style.display = "none"
        arrowLeft.style.display = "none"
        diapos.forEach((e) => {
            e.querySelector("figcaption").style.display = "none"
        })
        langageContainner.classList.add("container-grid")
        dispo = 1
    } else {
        diapos[currentDiapo].classList.add('current')
        arrowRight.style.display = "block"
        arrowLeft.style.display = "block"
        diapos.forEach((e) => {
            e.querySelector("figcaption").style.display = "block"
        })
        langageContainner.classList.remove("container-grid")
        dispo = 0
    }
}