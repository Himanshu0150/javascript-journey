let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let errorMsg = document.getElementById("errorMsg");
let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");

function getRandomFontSize() {
    return Math.floor(Math.random() * 20) + 15 + "px";
}


for (let word of wordCloud) {
    let spanEl = document.createElement("span");
    spanEl.textContent = word;
    spanEl.style.fontSize = getRandomFontSize();
    spanEl.style.margin = "20px";
    wordsContainer.appendChild(spanEl);
}


function onAddBtn() {
    let userInputValue = userInput.value;

    if (userInputValue === "") {
        errorMsg.textContent = "Please enter a word";
        return;
    }

    errorMsg.textContent = "";

    wordCloud.push(userInputValue);

    let spanEl = document.createElement("span");
    spanEl.textContent = userInputValue;
    spanEl.style.fontSize = getRandomFontSize();
    spanEl.style.margin = "20px";
    wordsContainer.appendChild(spanEl);
    userInput.value = "";
}

addBtn.onclick = onAddBtn;