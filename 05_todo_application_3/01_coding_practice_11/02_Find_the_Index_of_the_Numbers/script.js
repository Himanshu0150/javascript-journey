let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");


function findIndexOfNumber() {
    let inputValue = Number(userInput.value);

    let itemIndex = numbers.findIndex(function(eachItem) {
        return eachItem === inputValue;
    });

    indexOfNumber.textContent = itemIndex;
}


findBtn.onclick = function() {
    findIndexOfNumber();
}