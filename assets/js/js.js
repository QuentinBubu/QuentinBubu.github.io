const root = document.documentElement;
const theme = document.querySelector("#theme");

const bgColor = window.getComputedStyle(root, null).getPropertyValue("--bgColor");
const textColor = window.getComputedStyle(root, null).getPropertyValue("--textColor");

theme.addEventListener("click", function() {
    if (window.getComputedStyle(root, null).getPropertyValue("--bgColor") === "white") {
        root.style.setProperty("--bgColor", bgColor);
        root.style.setProperty("--textColor", textColor);
    } else {
        root.style.setProperty("--bgColor", "white");
        root.style.setProperty("--textColor", "black");
    }
});