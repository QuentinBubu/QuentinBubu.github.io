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
