let arr = [1, 7, 3, 1, 0, 20, 77];

localStorage.setItem("myArray", JSON.stringify(arr));

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

function handleSplice() {

    if (startIndexInput.value === "") {
        alert("Please enter the start index");
        return;
    }

    let startIndex = parseInt(startIndexInput.value);
    let deleteCount = parseInt(deleteCountInput.value);
    let itemToAdd = itemToAddInput.value;

    let storedArr = JSON.parse(localStorage.getItem("myArray"));

    if (itemToAdd === "") {
        storedArr.splice(startIndex, deleteCount);
    } else {
        storedArr.splice(startIndex, deleteCount, itemToAdd);
    }

    localStorage.setItem("myArray", JSON.stringify(storedArr));

    updatedArray.textContent = JSON.stringify(storedArr);
}

spliceBtn.onclick = function() {
    handleSplice();
};