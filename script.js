console.log("script.js is connected.");

let diapoCanvas = document.getElementById('diaporama_canvas');
let diapo1 = document.getElementById('diapo1');
let diapo2 = document.getElementById('diapo2');
let diapo3 = document.getElementById('diapo3');
let cornerBtnBar = document.getElementById('corner_btn_bar');
let cornerBtn1 = document.getElementById('corner_btn_1');
let cornerBtn2 = document.getElementById('corner_btn_2');
let cornerBtn3 = document.getElementById('corner_btn_3');
let cornerBtnSeparator1 = document.getElementById('corner_btn_separator_1');
let cornerBtnSeparator2 = document.getElementById('corner_btn_separator_2');
let menuBurgerAlpha = document.getElementById('burger_menu_alpha');
let menuBurger = document.getElementById('burger_menu');
let diapoMark = 1;
let changelogBtn = document.getElementById('changelog_btn');
let aboutBtn = document.getElementById('about_btn');
let infosChangelog = document.getElementById('infos_changelog');
let infosAbout = document.getElementById('infos_about');
let changelogCloseBtn = document.getElementById('changelog_close_btn');
let aboutCloseBtn = document.getElementById('about_close_btn');

let transitionTime = .5;
cornerBtn2.onclick = function(){
    if (diapoMark === 1){
        diapoMark = 2;
        diapo1.style = `transform: scale(0); opacity: 0; transition: ${transitionTime}s;`;
        diapo2.style = `transform: scale(1); opacity: 1; transition: ${transitionTime}s;`;
    }else{
        diapoMark = 3;
        diapo2.style = `transform: scale(0); opacity: 0; transition: ${transitionTime}s;`;
        diapo3.style = `transform: scale(1); opacity: 1; transition: ${transitionTime}s;`;
    }
}

cornerBtn1.onclick = function(){
    if (diapoMark === 3){
        diapoMark = 2;
        diapo3.style = `transform: scale(0); opacity: 0; transition: ${transitionTime}s;`;
        diapo2.style = `transform: scale(1); opacity: 1; transition: ${transitionTime}s;`;
    }else{
        diapoMark = 1;
        diapo2.style = `transform: scale(0); opacity: 0; transition: ${transitionTime}s;`;
        diapo1.style = `transform: scale(1); opacity: 1; transition: ${transitionTime}s;`;
    }
}

let cornerBtn3Clicked = false;
cornerBtn3.onclick = function(){
    if (cornerBtn3Clicked === false){
        menuBurgerAlpha.classList.add('burger-menu-alpha-open');
        menuBurgerAlpha.classList.remove('burger-menu-alpha-close');
        menuBurgerAlpha.style = 'z-index: 85; transition: 0s;';
        menuBurger.classList.toggle('burger-menu-toggle');
        diapoCanvas.classList.add('diaporama-canvas-slide-open');
        diapoCanvas.classList.remove('diaporama-canvas-slide-close');
        cornerBtnBar.style = 'width: 70px;';
        cornerBtn1.classList.toggle('display-none');
        cornerBtn2.classList.toggle('display-none');
        cornerBtnSeparator1.classList.toggle('display-none');
        cornerBtnSeparator2.classList.toggle('display-none');
        cornerBtn3Clicked = true;
    } else {
        menuBurgerAlpha.classList.remove('burger-menu-alpha-open');
        menuBurgerAlpha.classList.add('burger-menu-alpha-close');
        menuBurgerAlpha.style = 'z-index: -1; transition: .3s;';
        menuBurger.classList.toggle('burger-menu-toggle');
        diapoCanvas.classList.remove('diaporama-canvas-slide-open');
        diapoCanvas.classList.add('diaporama-canvas-slide-close');
        cornerBtnBar.style = 'width: auto;';
        cornerBtn1.classList.toggle('display-none');
        cornerBtn2.classList.toggle('display-none');
        cornerBtnSeparator1.classList.toggle('display-none');
        cornerBtnSeparator2.classList.toggle('display-none');
        cornerBtn3Clicked = false;
    }
}

changelogBtn.onclick = function(){
    infosChangelog.style = "transform: translateX(-100%); transition: .5s;";
}

aboutBtn.onclick = function(){
    infosAbout.style = "transform: translateX(-100%); transition: .5s;";
}

changelogCloseBtn.onclick = function(){
    infosChangelog.style = "transform: translateX(0%); transition: .5s;";
}

aboutCloseBtn.onclick = function(){
    infosAbout.style = "transform: translateX(0%); transition: .5s;";
}

let happyBirthday = true;
let noHappyBirthday = 0;
let noEnglishCardinalNumbersIndicator = noHappyBirthday;
let sentence = 0;
let englishCardinalNumbersIndicator = "";

if (happyBirthday === true){
    setInterval("happybir()", 1000);
}

function happybir(){
    noHappyBirthday++;
    noEnglishCardinalNumbersIndicator++;
    if (noEnglishCardinalNumbersIndicator === 1) {
        englishCardinalNumbersIndicator = "st";
    } else if (noEnglishCardinalNumbersIndicator === 2) {
        englishCardinalNumbersIndicator = "nd";
    } else if (noEnglishCardinalNumbersIndicator === 3) {
        englishCardinalNumbersIndicator = "rd";
    } else {
        englishCardinalNumbersIndicator = "th";
    }
    if (noEnglishCardinalNumbersIndicator === 10) {
        noEnglishCardinalNumbersIndicator = 0;
        sentence++;
        if (sentence === 1){
            console.log("> Cet algorithme m'a pris beaucoup de temps ! 🥱");
        } else if (sentence === 2) {
            console.log("> Houlà, je préfère le C#! 😥");
        } else if (sentence === 3) {
            console.log("> A votre avis, combien y aura-t-il de phrases à la fin de l'année ? 🤔");
        } else if (sentence === 4) {
            console.log("> ✨ Liens utiles ✨\nGitHub - https://github.com/QuentinBubu\nInstagram - https://www.instagram.com/Quentin_bubu/\nTwitter - https://twitter.com/BubuQuentin\nAdresse mail - quentinbubu.dev@gmail.com");
        } else if (sentence === 5) {
            console.log("[information] Les \"happy birthday!\" seront retirés lors de la prochaine MàJ. 😏");
        } else if (sentence === 6) {
            console.log("> Pour vous recompenser de votre incroyable courage, je vous offre le code de mon crypteur (comme je suis le seul à l'avoir 🤣) !\nRead the bin - https://bin.readthedocs.fr/ientha.cs");
        } else {
            console.log("[information] Vous pouvez partir, toutes les phrases ont été affichées. 😅");
        }
    }
    console.log(noHappyBirthday + englishCardinalNumbersIndicator + " happy birthday!");
}