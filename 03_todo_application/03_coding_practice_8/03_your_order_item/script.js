let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let orderItemElement = document.getElementById("orderItem");

function onCancelOrder(orderId) {
    let orderElement = document.getElementById(orderId);
    orderElement.remove();
}


function createAndAppend(item) {

    let itemId = "item" + item.uniqueNo;
    let button = "button" + item.uniqueNo;

    let foodItemNameElement = document.createElement("li");
    foodItemNameElement.textContent = item.itemName;
    foodItemNameElement.classList.add(
        "foodItemName",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "mb-3"
    );
    foodItemNameElement.id = itemId;
    orderItemElement.appendChild(foodItemNameElement);


    let cancelBtnElement = document.createElement("button");
    cancelBtnElement.textContent = "Cancel";
    cancelBtnElement.classList.add("btn", "btn-danger", "btn-sm");
    cancelBtnElement.id = button;
    foodItemNameElement.appendChild(cancelBtnElement);

    cancelBtnElement.onclick = function() {
        onCancelOrder(itemId);
    };

}


for (let item of itemList) {
    createAndAppend(item);
}