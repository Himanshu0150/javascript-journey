let groceryList = [
    "Apples",
    "Boost Drink",
    "Butterscotch Ice Cream",
    "Tomato Ketchup",
    "Dairy Milk Chocolates",
    "Pasta"
];

let groceryListContainerElement = document.getElementById("groceryListContainer");
groceryListContainerElement.style.backgroundColor = "#03254c";
groceryListContainerElement.classList.add("min-vh-100", "p-5");


let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("text-white", "text-center", "mb-4");
groceryListContainerElement.appendChild(headingElement);

let listElement = document.createElement("ul");
listElement.classList.add("rounded-lg", "py-8", "px-12", "list-disc");
listElement.style.backgroundColor = "#f5f9fd";

for (let item of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("list-group-item");
    listElement.appendChild(listItem);
}

groceryListContainerElement.appendChild(listElement);