/*let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset || document.documentElement.scrollTop,
        winHeight = window.innerHeight;

    if (scroll > lastScrollTop + 10) {
        let goTo = Math.floor(scroll / winHeight) + winHeight
        window.scrollTo({top: goTo, behavior: 'smooth'})
    } else if (scroll < lastScrollTop - 10) {
        let goTo = Math.floor(scroll / winHeight) - winHeight
        window.scrollTo({top: goTo, behavior: 'smooth'})
    }
    lastScrollTop = scroll <= 0 ? 0 : scroll;
});
*/