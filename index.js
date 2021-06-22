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

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
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