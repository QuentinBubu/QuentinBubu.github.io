let form = document.querySelector("#form");
let form_selection = document.querySelector("#form-selection");
let selection = document.querySelector("#selection");
let tbody = document.querySelector("#tbody");
let score = document.querySelector("#score");
let data;
const save = document.querySelector("#save");
const load = document.querySelector("#load");
const selectInput = document.querySelector("#selectInput");
const startTest = document.querySelector("#startTest");
const returnButton = document.querySelector("#return");
const verify = document.querySelector("#verify");

const preset = {
    t1: "",
};

save.addEventListener("click", function () {
    let final = "";
    const verbs = document.querySelectorAll(".choose:checked");
    verbs.forEach((element) => {
        final += element.getAttribute("value") + "/";
    });
    final = final.slice(0, -1);
    let hiddenElement = document.createElement("a");
    hiddenElement.href = "data:attachment/text," + encodeURI(final);
    hiddenElement.target = "_blank";
    hiddenElement.download = "voc.data";
    hiddenElement.click();
});

load.addEventListener("change", () => {
    const reader = new FileReader();
    const file = load.files[0];
    reader.addEventListener("load", function (event) {
        element = event.target.result;
        loadVerbs(element);
    });
    reader.readAsText(file);
});

function loadVerbs(verbs) {
        element.split("/").forEach((element) => {
            element = element.replace(" ", "-");
            let input = document.querySelector(`#${element}`);
            input.setAttribute("checked", true);
        });
}

window.addEventListener("load", async function () { // words selection generation
    try {
        await (await fetch("./assets/voc2.json"))
            .json()
            .then(function (donnees) {
                data = donnees;
                for (const key of Object.entries(data)) {
                    let input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("class", "choose");
                    input.setAttribute("value", key[0]);
                    input.setAttribute("id", key[0].replace(" ", "-"));
                    selection.appendChild(input);

                    let label = document.createElement("label");
                    label.setAttribute("for", key[0].replace(" ", "-"));
                    label.innerHTML = key[0];
                    selection.appendChild(label);
                }
            });
    } catch (errors) {
        console.log(errors);
    }

    if (window.location.search.substring(1) != "") {
        let url = new URL(window.location);
        ps = url.searchParams.get("preset");
        loadVerbs(preset[ps]);
    }
});

startTest.addEventListener("click", function () {
    form.style.display = "block";
    save.style.display = "none";
    document.querySelector("label[for=load]").style.display = "none";
    form_selection.style.display = "none";

    const liste = document.querySelectorAll(".choose:checked");
    let listOfVerbs = [];

    liste.forEach((element) => {
        listOfVerbs.push(element.getAttribute("value"));
    });

    listOfVerbs = listOfVerbs.sort(() => Math.random() - 0.5);

    listOfVerbs.forEach((element) => {

        let tr = document.createElement("tr");
        tr.setAttribute("data-word", element);
        tbody.appendChild(tr);
        let lastTr = document.querySelector("#tbody > tr:last-child");

        let td1 = document.createElement("td");
        td1.setAttribute("class", "blue");
        td1.textContent = element;

        let td2 = document.createElement('td');
        td2.setAttribute("contenteditable", true);

        lastTr.appendChild(td1)
        lastTr.appendChild(td2)
    });
});

verify.addEventListener("click", function () {
    if (verify.innerText === "Vérifier") {
        const lines = document.querySelectorAll("#tbody > tr");
        let nb_points = 0;
        let nb_word = 0;
        lines.forEach((element) => {
            const td = element.querySelectorAll("td");
            const word = element.getAttribute("data-word");
            const saisie = td[1].textContent.toLowerCase();

            if (saisie === data[word]) {
                nb_points += 1;
            } else {
                td[1].innerHTML = `
                    <p class="red">${td[1].textContent}</p>
                    <p class="green">${data[word]}</p>
                `;
            }

            td.forEach((element) => {
                if (element.hasAttribute("data-pass")) return;
                element.removeAttribute("contenteditable");
                const form = element.getAttribute("data-verbs");
                if (form === "Traduction") {
                    element.innerHTML = `${element.innerHTML} <img src="./assets/pronunciation.svg" data-lang="fr" data-verb="${data[word]}" class="pronunciation">`;
                } else {
                    element.innerHTML = `${element.innerHTML} <img src="./assets/pronunciation.svg" data-lang="en" data-verb="${data[word]}" class="pronunciation">`;
                }
            });
            nb_word++;
        });

        score.textContent = `Score: ${nb_points} / ${nb_word}`;
        refresh();
    } else {
        menu();
    }
});

selectInput.addEventListener("click", function () {
    const input = document.querySelectorAll("input");
    if (selectInput.innerText === "Tout sélectionner") {
        input.forEach((element) => {
            element.setAttribute("checked", true);
        });
        selectInput.innerText = "Tout désélectionner";
    } else {
        input.forEach((element) => {
            element.removeAttribute("checked");
        });
        selectInput.innerText = "Tout sélectionner";
    }
});

returnButton.addEventListener("click", menu);

function menu() {
    form.style.display = "none";
    save.style.display = "inline-block";
    document.querySelector("label[for=load]").style.display = "inline-block";
    form_selection.style.display = "block";
    let tr = document.querySelectorAll("tr[data-word]");
    tr.forEach((element) => {
        element.remove();
    });
    score.innerText = "Score:";
    verify.innerText = "Vérifier";
}

function refresh() {
    let allVoices = document.querySelectorAll(".pronunciation");
    allVoices.forEach((element) => {
        element.addEventListener("click", function () {
            if (element.getAttribute("data-lang") === "fr") {
                responsiveVoice.speak(
                    element.getAttribute("data-verb"),
                    "French Female"
                );
            } else {
                responsiveVoice.speak(element.getAttribute("data-verb"));
            }
        });
    });
    verify.innerText = "Retour";
}
