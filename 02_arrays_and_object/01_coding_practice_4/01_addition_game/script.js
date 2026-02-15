let firstNumberEl = document.getElementById("firstNumber");
let firstNumber = Math.ceil(Math.random() * 100);
firstNumberEl.textContent = firstNumber;

let secondNumberEl = document.getElementById("secondNumber");
let secondNumber = Math.ceil(Math.random() * 100);
secondNumberEl.textContent = secondNumber;

let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");


function checkButton() {
    let userInputValue = parseInt(userInputEl.value);
    if (userInputValue === (firstNumber + secondNumber)) {
        gameResultEl.textContent = "Congratulations! You got it right.";
        gameResultEl.style.backgroundColor = "#028a0f";
    } else {
        gameResultEl.textContent = "Please Try Again.";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
}

function restartButton() {
    firstNumber = Math.ceil(Math.random() * 100);
    secondNumber = Math.ceil(Math.random() * 100);

    firstNumberEl.textContent = firstNumber;
    secondNumberEl.textContent = secondNumber;

    userInputEl.value = "";
    gameResultEl.textContent = "";
    gameResultEl.style.backgroundColor = "transparent";
}