let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageWidth = 200;
imageElement.style.width = imageWidth + "px";
imageWidthElement.textContent = imageWidth + "px";

function increment() {
    if (imageWidth >= 300) {
        warningMessageElement.textContent = "Too big. Decrease the size of the image.";
    } else {
        imageWidth = imageWidth + 5;
        imageElement.style.width = imageWidth + "px";
        imageWidthElement.textContent = imageWidth + "px";
        warningMessageElement.textContent = "";
    }
}

function decrement() {
    if (imageWidth <= 100) {
        warningMessageElement.textContent = "Can't Visble. Increase the size of the image.";
    } else {
        imageWidth = imageWidth - 5;
        imageElement.style.width = imageWidth + "px";
        imageWidthElement.textContent = imageWidth + "px";
        warningMessageElement.textContent = "";
    }
}