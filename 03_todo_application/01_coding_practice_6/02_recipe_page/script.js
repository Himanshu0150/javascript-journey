let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

// Title
let titleElement = document.getElementById("recipeTitle");
titleElement.textContent = recipeObj.title;

// Image
let recipeImgElement = document.getElementById("recipeImg");
recipeImgElement.src = recipeObj.imgSrc;

// Ingredients
let recipeIngredientsElement = document.getElementById("recipeIngredients");

for (let ingredient of recipeObj.ingredients) {
    let liElement = document.createElement("li");
    liElement.textContent = ingredient;
    liElement.classList.add("color-white", "font-family-roboto");
    recipeIngredientsElement.appendChild(liElement);
}