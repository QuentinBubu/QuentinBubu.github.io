let currentVersion = "4.0.0.0";
let updateIndicator = document.getElementById('home_header_infos_span');

var requestURL = 'https://version.act-feed.repl.co/qb-io/qb-io.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let jsonObjVersion = request.response;
    let latestVersion = jsonObjVersion['version'];
    if (currentVersion === latestVersion){
        updateIndicator.innerHTML = 'Pas de pull request en attente.';
    }
    else if (currentVersion !== latestVersion){
        updateIndicator.innerHTML = '<span style="background: red;">Pull request en attente.</span>';
    }
}