let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerEl = document.getElementById("bgContainer");

function button() {
    let randomIndex = Math.floor(Math.random() * bgColorsArray.length);
    let randomColor = bgColorsArray[randomIndex];
    bgContainerEl.style.backgroundColor = randomColor;
}