let titleHeadingElement = document.getElementById("titleHeading");
titleHeadingElement.textContent = "Add To Cart";

let myCartItemTitleElement = document.getElementById("myCartItemTitle");
myCartItemTitleElement.textContent = "My Cart items";

let cartItemsContainerElement = document.getElementById("cartItemsContainer");
cartItemsContainerElement.classList.add("list-unstyled");

function onAddCart() {
    let cartItemTextInputElement = document.getElementById("cartItemTextInput");
    let cartItemTextInputValue = cartItemTextInputElement.value;

    let listItem = document.createElement("li");
    listItem.textContent = cartItemTextInputValue;
    cartItemsContainerElement.appendChild(listItem);

}