let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];

let person = {
    name: "Rahul",
    age: 25,
    gender: "Male"
};

let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed"
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed"
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed"
    }
];

// Containers
let bikeContainer = document.getElementById("bikeContainer");
let personContainer = document.getElementById("personContainer");
let todoContainer = document.getElementById("todoContainer");

// Store in localStorage
localStorage.setItem("bikeDetails", JSON.stringify(bikes));
localStorage.setItem("personDetails", JSON.stringify(person));
localStorage.setItem("todoDetails", JSON.stringify(todos));

// Get from localStorage
let bikeData = localStorage.getItem("bikeDetails");
let personData = localStorage.getItem("personDetails");
let todoData = localStorage.getItem("todoDetails");

// Show on UI
bikeContainer.textContent = bikeData;
personContainer.textContent = personData;
todoContainer.textContent = todoData;