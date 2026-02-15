let addBtnElement = document.getElementById("addBtn");
let titleInputElement = document.getElementById("titleInput");
let reviewTextareaElement = document.getElementById("reviewTextarea");
let reviewsContainerElement = document.getElementById("reviewsContainer");

addBtnElement.onclick = function() {
    let userTitleValue = titleInputElement.value;
    localStorage.setItem("userTitleValue", userTitleValue);

    let userReviewValue = reviewTextareaElement.value;
    localStorage.setItem("userReviewValue", userReviewValue);

    // Create review div
    let reviewDiv = document.createElement("div");

    // Create title element
    let titleEl = document.createElement("h4");
    titleEl.textContent = userTitleValue;

    // Create review element
    let reviewEl = document.createElement("p");
    reviewEl.textContent = userReviewValue;

    // Append elements
    reviewDiv.appendChild(titleEl);
    reviewDiv.appendChild(reviewEl);

    // Add to reviews container
    reviewsContainerElement.appendChild(reviewDiv);

    // Clear input fields
    titleInputElement.value = "";
    reviewTextareaElement.value = "";
};


// Load stored Title
let storedUserTitleValue = localStorage.getItem("userTitleValue");

if (storedUserTitleValue === null) {
    titleInputElement.value = "";
} else {
    titleInputElement.value = storedUserTitleValue;
}


// Load stored Review
let storedUserReviewValue = localStorage.getItem("userReviewValue");

if (storedUserReviewValue === null) {
    reviewTextareaElement.value = "";
} else {
    reviewTextareaElement.value = storedUserReviewValue;
}