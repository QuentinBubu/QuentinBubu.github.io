let nav_appli_li = document.querySelector('header > div:last-child > nav > ul > li:nth-child(4)');
let nav_appli_span = document.querySelector('header > div:last-child > nav > ul > li > label ~ a > span');

nav_appli_li.addEventListener('mouseover', () => {
    nav_appli_span.classList.remove('fa-angle-down');
    nav_appli_span.classList.add('fa-angle-up');
});

nav_appli_li.addEventListener('mouseleave', () => {
    nav_appli_span.classList.remove('fa-angle-up');
    nav_appli_span.classList.add('fa-angle-down');
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

window.addEventListener('load', function() {
    let all = document.querySelectorAll('main > *');
    all.forEach(element => {
        setTimeout(function() {
            element.style.visibility = "visible";
            element.animate(
                [
                    {
                        transform: 'translateX(-100%)'
                    },
                    {
                        transform: 'translateX(0%)'
                    }
                ], {
                duration: 500,
                animationFillMode: 'forwards'
                }
            );
        }, 500);
    });
});