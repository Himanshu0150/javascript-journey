let counterValue = document.getElementById("counterValue");

let storedValue = localStorage.getItem("clickCount");

if (storedValue === null) {
    localStorage.setItem("clickCount", 0);
    counterValue.textContent = 0;
} else {
    counterValue.textContent = storedValue;
}

function incrementBtn() {
    let previousCounterValue = counterValue.textContent;
    let updateCounterValue = parseInt(previousCounterValue) + 1;
    counterValue.textContent = updateCounterValue;

    localStorage.setItem("clickCount", updateCounterValue);
}