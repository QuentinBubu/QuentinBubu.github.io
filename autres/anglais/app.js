let form = document.querySelector("#form");
let selection = document.querySelector("#selection");
let tbody = document.querySelector("#tbody");
let score = document.querySelector("#score");
const selectInput = document.querySelector("#selectInput");
const startTest = document.querySelector("#startTest");
const returnButton = document.querySelector("#return");
const verify = document.querySelector("#verify");
let data;

const values = {
    0: "Base verbale",
    1: "Prétérit",
    2: "Participe passé",
    3: "Traduction",
};

window.addEventListener("load", async function () {
    try {
        await (await fetch("./assets/irregular.json"))
            .json()
            .then(function (donnees) {
                data = donnees;
                for (const key of Object.entries(data).reverse()) {
                    let label = document.createElement("label");
                    label.setAttribute("for", key[0]);
                    label.innerHTML = key[0];
                    selection.appendChild(label);

                    let input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("class", "choose");
                    input.setAttribute("value", key[0]);
                    input.setAttribute("id", key[0]);
                    selection.appendChild(input);
                }
            });
    } catch (errors) {
        console.log(errors);
    }
});

startTest.addEventListener("click", function () {
    form.style.display = "block";
    selection.style.display = "none";

    const liste = document.querySelectorAll(".choose:checked");
    let listOfVerbs = [];

    liste.forEach((element) => {
        listOfVerbs.push(element.getAttribute("value"));
    });

    listOfVerbs = listOfVerbs.sort(() => Math.random() - 0.5);

    listOfVerbs.forEach((element) => {
        const random = Math.floor(Math.random() * Math.floor(4));

        let tr = document.createElement("tr");
        tr.setAttribute("data-word", element);
        tbody.appendChild(tr);
        let lastTr = document.querySelector("#tbody > tr:last-child");

        for (let i = 0; i < 4; i++) {
            let td = document.createElement("td");
            td.setAttribute("data-verbs", values[i]);
            if (i === random) {
            td.setAttribute("class", "blue");
                if (typeof(data[element][values[i]]) === "string") {
                    td.innerHTML = data[element][values[i]];
                } else {
                    td.innerHTML = `${data[element][values[i]][1]}, ${
                        data[element][values[i]][2]
                    }`;
                }
            } else {
                td.setAttribute("contenteditable", true);
            }
            lastTr.appendChild(td);
        }
    });
});

verify.addEventListener("click", function () {
    if (verify.textContent === "Vérifier") {
        const lines = document.querySelectorAll("#tbody > tr");
        let nb_points = 0;
        let nb_word = 0;
        lines.forEach((element) => {
            let error = false;
            const td = element.querySelectorAll("td");
            const word = element.getAttribute("data-word");
            td.forEach((element) => {
                element.removeAttribute("contenteditable");
                const form = element.getAttribute("data-verbs");
                const reponse = element.textContent.toLowerCase();
                if (typeof(data[word][form]) === "string") {
                    if (reponse !== data[word][form]) {
                        element.innerHTML = `
                                            <p class="red">${reponse}</p>
                                            <p class="green">${data[word][form]}</p>
                                            `;
                        error = true;
                    }
                } else {
                    let reponseSplit = reponse.split(', ');
                    if (!reponseSplit.includes(data[word][form][1]) && !reponseSplit.includes(data[word][form][2])) {
                        element.innerHTML = `
                                            <p class="red">${reponse}</p>
                                            <p class="green">${data[word][form][1]}, ${data[word][form][2]}</p>
                                            `;
                        error = true;
                    }
                }
                if (form === "Traduction") {
                    element.innerHTML = `${element.innerHTML} <img src="./assets/pronunciation.svg" data-lang="fr" data-verb="${data[word][form]}" class="pronunciation">`;
                } else {
                    element.innerHTML = `${element.innerHTML} <img src="./assets/pronunciation.svg" data-lang="en" data-verb="${data[word][form]}" class="pronunciation">`;
                }
            });
            if (error === false) {
                nb_points++;
            }
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
    if (selectInput.textContent === "Tout sélectionner") {
        input.forEach((element) => {
            element.setAttribute("checked", true);
        });
        selectInput.textContent = "Tout désélectionner";
    } else {
        input.forEach((element) => {
            element.removeAttribute("checked");
        });
        selectInput.textContent = "Tout sélectionner";
    }
});

returnButton.addEventListener("click", menu);

function menu() {
    form.style.display = "none";
    selection.style.display = "grid";
    let tr = document.querySelectorAll("tr[data-word]");
    tr.forEach((element) => {
        element.remove();
    });
    score.textContent = "Score:";
    verify.textContent = "Vérifier";
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
    verify.textContent = "Retour";
}
