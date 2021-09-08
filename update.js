console.log("update.js is connected.");

let currentVersion = "4.0.0.0";
let notif = document.getElementById('notif');
let notifDisplayTimeIndicator = document.getElementById('notif_display_time_indicator');

var requestURL = 'https://went-lab.github.io/json-hosting/version.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let jsonObjVersion = request.response;
    let latestVersion = jsonObjVersion['qbio'];
    if (currentVersion !== latestVersion){
        console.log("An update is available.");
        notif.classList.add('notif-open');
        notifDisplayTimeIndicator.classList.add('notif-display-time-indicator-open');
    }
    else if (currentVersion === latestVersion){
        console.log("The website is up to date.");
    }
}

function updateAvailable(){
    notif.classList.add('notif-open');
    notifDisplayTimeIndicator.classList.add('notif-display-time-indicator-open');
}