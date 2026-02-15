let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

function aboutButton() {
    aboutTabEl.style.display = "block";
    timeToVisitTabEl.style.display = "none";
    attractionsTabEl.style.display = "none";

    aboutButtonEl.classList.add("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
}

function timeToVisitButton() {
    aboutTabEl.style.display = "none";
    timeToVisitTabEl.style.display = "block";
    attractionsTabEl.style.display = "none";

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.add("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
}

function attractionsButton() {
    aboutTabEl.style.display = "none";
    timeToVisitTabEl.style.display = "none";
    attractionsTabEl.style.display = "block";

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.add("selected-button");
}