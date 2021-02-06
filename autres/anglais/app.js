let form = document.querySelector("#form");
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
const values = {
    0: "Base verbale",
    1: "Prétérit",
    2: "Participe passé",
    3: "Traduction",
};
const subject = [
    ["Première pers. sing.", "I"],
    ["Seconde pers. sing.", "You"],
    ["Troisième pers. sing.", ["He", "She", "It"]],
    ["Première pers. plur.", "We"],
    ["Seconde pers. plur.", "You"],
    ["Troisième pers. plur.", "They"],
];
const mode = ["affirmative", "négative", "interrogative"];

save.addEventListener("click", function () {
    let final = "";
    const sentences = document.querySelectorAll(".sentences:checked");
    sentences.forEach((element) => {
        final += element.getAttribute("value") + "/";
    });
    final = final.slice(0, -1) + "|";

    const verbs = document.querySelectorAll(".choose:checked");
    verbs.forEach((element) => {
        final += element.getAttribute("value") + "/";
    });
    final = final.slice(0, -1);
    let hiddenElement = document.createElement("a");
    hiddenElement.href = "data:attachment/text," + encodeURI(final);
    hiddenElement.target = "_blank";
    hiddenElement.download = "verbs.data";
    hiddenElement.click();
});

load.addEventListener("change", () => {
    const reader = new FileReader();
    const file = load.files[0];
    reader.addEventListener("load", function (event) {
        element = event.target.result;
        element = element.split("|");
        element.forEach((element) => {
            element.split("/").forEach((element) => {
                element = element.replace(' ', '-');
                let input = document.querySelector(`#${element}`);
                input.setAttribute("checked", true);
            });
        });
    });
    reader.readAsText(file);
});

window.addEventListener("load", async function () {
    try {
        await (await fetch("./assets/irregular.json"))
            .json()
            .then(function (donnees) {
                data = donnees;
                for (const key of Object.entries(data)) {
                    let label = document.createElement("label");
                    label.setAttribute("for", key[0].replace(' ', '-'));
                    label.innerHTML = key[0];
                    selection.appendChild(label);

                    let input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("class", "choose");
                    input.setAttribute("value", key[0]);
                    input.setAttribute("id", key[0].replace(' ', '-'));
                    selection.appendChild(input);
                }
            });
    } catch (errors) {
        console.log(errors);
    }
});

startTest.addEventListener("click", function () {
    form.style.display = "block";
    save.style.display = "none";
    document.querySelector("label[for=load]").style.display = "none";
    selection.style.display = "none";

    const liste = document.querySelectorAll(".choose:checked");
    const sentences = document.querySelectorAll(".sentences:checked");
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
                if (typeof data[element][values[i]] === "string") {
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

        if (sentences.length !== 0) {
            temps = [];
            sentences.forEach((element) => {
                temps.push(element.getAttribute("value"));
            });
            temps_tr =
                temps[Math.floor(Math.random() * Math.floor(temps.length))];
            subject_tr =
                subject[
                    Math.floor(Math.random() * Math.floor(subject.length))
                ][0];
            mode_tr = mode[Math.floor(Math.random() * Math.floor(mode.length))];

            lastTr.setAttribute("data-temps", temps_tr);
            lastTr.setAttribute("data-subject", subject_tr);
            lastTr.setAttribute("data-mode", mode_tr);

            let td = document.createElement("td");
            td.innerText = `${subject_tr} ${mode_tr} ${temps_tr}`;
            td.setAttribute("data-pass", true);
            lastTr.appendChild(td);

            td = document.createElement("td");
            td.setAttribute("data-pass", true);
            td.setAttribute("contenteditable", true);
            lastTr.appendChild(td);
        }
    });
});

verify.addEventListener("click", function () {
    if (verify.innerText === "Vérifier") {
        const lines = document.querySelectorAll("#tbody > tr");
        let nb_points = 0;
        let nb_word = 0;
        lines.forEach((element) => {
            let error = false;
            const td = element.querySelectorAll("td");
            const word = element.getAttribute("data-word");
            td.forEach((element) => {
                if (element.hasAttribute("data-pass")) return;
                element.removeAttribute("contenteditable");
                const form = element.getAttribute("data-verbs");
                const reponse = element.innerText.toLowerCase();
                if (typeof data[word][form] === "string") {
                    if (reponse !== data[word][form]) {
                        element.innerHTML = `
                                            <p class="red">${reponse}</p>
                                            <p class="green">${data[word][form]}</p>
                                            `;
                        error = true;
                    }
                } else {
                    let reponseSplit = reponse.split(", ");
                    if (
                        !reponseSplit.includes(data[word][form][1]) &&
                        !reponseSplit.includes(data[word][form][2])
                    ) {
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

            if (
                element.hasAttribute("data-temps") &&
                element.hasAttribute("data-subject") &&
                element.hasAttribute("data-mode")
            ) {
                nb_word++;
                const reponse = verify_sentences(element);
                if (reponse === true) {
                    nb_points++;
                } else {
                    let saisie = element.querySelector("td:last-child");
                    saisie.innerHTML = `
                                            <p class="red">${saisie.textContent}</p>
                                            <p class="green">${reponse}</p>
                                        `;
                }
            }
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
    selection.style.display = "grid";
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

function verify_sentences(element) {
    const temps_tr = element.getAttribute("data-temps");
    const subject_tr = element.getAttribute("data-subject");
    const mode_tr = element.getAttribute("data-mode");
    const verb_tr = element.getAttribute("data-word");
    const text_tr = element.querySelector("td:last-child").textContent;

    let sentence = new MakeSentence(
        text_tr,
        temps_tr,
        subject_tr,
        mode_tr,
        verb_tr
    ).sentence;
    sentence = sentence.toLowerCase();
    if (text_tr.toLowerCase().includes(sentence)) {
        return true;
    } else {
        if (sentence.match(/ i /)) {
            const sentence_split = sentence.split(" i ");
            sentence = `${sentence_split[0]} I ${sentence_split[1]}`;
        }
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
}

class MakeSentence {
    constructor(text, temps, subject, mode, verb) {
        this.text = text;
        this.temps = temps;
        this.subject = subject;
        this.mode = mode;
        this.verb = verb;
        this.old = {
            temps: this.temps,
            subject: this.subject,
            mode: this.mode,
            verb: this.verb,
        };
        this.call();
        return {
            sentence: this.final,
        };
    }

    call() {
        this.f_verb();
        this.f_auxiliaire();
        this.f_negative();
        this.f_subject();
        this.make();
    }

    f_verb() {
        if (this.temps === "present-perfect" || this.temps === "past-perfect") {
            this.verb = data[this.verb]["Participe passé"];
        } else if (this.temps === "prétérit") {
            if (this.mode === "affirmative") {
                this.verb = data[this.verb]["Prétérit"];
            } else {
                this.verb = data[this.verb]["Base verbale"];
            }
        }
    }

    f_auxiliaire() {
        if (this.temps === "prétérit") {
            if (this.mode === "négative" || this.mode === "interrogative") {
                this.auxiliaire = "did";
            } else {
                this.auxiliaire = "";
            }
        } else if (this.temps === "present-perfect") {
            if (this.subject === subject[2][0]) {
                this.auxiliaire = "has";
            } else {
                this.auxiliaire = "have";
            }
        } else if (this.temps === "past-perfect") {
            this.auxiliaire = "had";
        }
    }

    f_negative() {
        if (this.mode === "négative") {
            this.mode = "not";
        }
    }

    f_subject() {
        subject.forEach((element) => {
            if (element[0].toLowerCase() === this.subject.toLowerCase()) {
                this.subject = element[1];
            }
            if (Array.isArray(this.subject)) {
                if ((this.text.match(/s?he|it/gi) || []).length === 1) {
                    this.subject = this.text.match(/s?he|it/gi)[0];
                } else {
                    this.subject = "he";
                }
                console.log(this.text);
            }
        });
    }

    make() {
        if (this.old["mode"] === "affirmative") {
            this.final = `${this.subject} ${this.auxiliaire} ${this.verb}`;
        } else if (this.old["mode"] === "négative") {
            this.final = `${this.subject} ${this.auxiliaire} ${this.mode} ${this.verb}`;
        } else if (this.old["mode"] === "interrogative") {
            this.final = `${this.auxiliaire} ${this.subject} ${this.verb}?`;
        }
    }
}
