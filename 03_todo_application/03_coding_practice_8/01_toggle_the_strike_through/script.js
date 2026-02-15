let checkboxElement = document.getElementById("checkbox");
let checkboxLabelElement = document.getElementById("checkboxLabel");

checkboxElement.onclick = function() {
    checkboxLabelElement.classList.toggle("checked");
};