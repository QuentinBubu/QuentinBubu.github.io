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