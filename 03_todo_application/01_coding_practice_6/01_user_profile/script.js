let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let imgContainerElement = document.getElementById("imgContainer");

let imgElement = document.createElement("img");
imgElement.src = profileDetails.imgSrc;
imgContainerElement.appendChild(imgElement);

let nameElement = document.createElement("h1");
nameElement.textContent = profileDetails.name;
imgContainerElement.appendChild(nameElement);

let ageElement = document.createElement("p");
ageElement.textContent = "Age:" + profileDetails.age;
imgContainerElement.appendChild(ageElement);