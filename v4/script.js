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