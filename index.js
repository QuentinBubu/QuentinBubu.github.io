function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var pageY = window.pageYOffset;

function pageYCheck()
{
  while (true)
  {
    console.log("[", pageY, "] = pageY");
    wait(2000);
  }
}

let below = false;
window.onscroll = () => {

  const Ypos = window.pageYOffset;

  if(Ypos > 315 && !below) {

    below = true;
    console.log('Navbar inpage down');
    // var element = document.getElementById("second");
    document.getElementById("second").id = 'second-display';
    // element.classList.add("second-display");

  } else if(Ypos < 315 && below) {

    below = false;
    console.log('Navbar inpage up');
    document.getElementById("second-display").id = 'second';
    // element.classList.remove("second-display");

  }

}

let valueRefresh = window.scrollY/-600;
if (valueRefresh != 0) {
  document.body.style.overflowY = "scroll";
}

window.addEventListener('scroll' , function(){
  let value = 1 + window.scrollY/-600;
  header.style.opacity = value;
  let valueVariant = value-1;
  header.style.transform = "translateY("+valueVariant+"em)";
})

function overflowY() {
  document.body.style.overflowY = "scroll";
}

var topOffset = document.getElementById('top').offsetTop;

console.log("offsetTop #top [", topOffset, "]");

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

function turnHeaderFirstImage(){
  document.getElementById('header_first_image').classList.add('turn-header-first-image');
}

var open = 0;

function versionInfosDisplay(){
  if (open == 0){
    document.getElementById('ver_inf').classList.add('ver-inf-display');
    document.querySelector('main').classList.add('blur');
    document.querySelector('header').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
    open = 1;
  }
  else{
    document.getElementById('ver_inf').classList.remove('ver-inf-display');
    document.querySelector('main').classList.remove('blur');
    document.querySelector('header').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
    open = 0;
  }
}

function verOn(element_id){
  document.getElementById(element_id).innerHTML = "Changelog";
}

function verOut(element_id){
  document.getElementById(element_id).innerHTML = "v.3.0.0";
}