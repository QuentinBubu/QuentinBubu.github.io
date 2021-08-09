console.log("script.js is connected.");

let diapo1 = document.getElementById('diapo1');
let diapo2 = document.getElementById('diapo2');
let cornerBtn1 = document.getElementById('corner_btn_1');
let cornerBtn2 = document.getElementById('corner_btn_2');

let transitionTime = .5;
cornerBtn2.onclick = function(){
    diapo1.style = `transform: scale(0); transition: ${transitionTime}s;`;
    diapo2.style = `transform: scale(1); transition: ${transitionTime}s;`;
}

cornerBtn1.onclick = function(){
    diapo1.style = `transform: scale(1); transition: ${transitionTime}s;`;
    diapo2.style = `transform: scale(0); transition: ${transitionTime}s;`;
}