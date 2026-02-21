// DOM Elements
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

// LocalStorage Get
function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;


// Save Button
saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};


// Checkbox toggle
function onTodoStatusChanged(labelId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}


// Delete Todo
function onDeleteTodo(todoId) {

    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    let deleteIndex = todoList.findIndex(function(eachTodo) {
        return "todo" + eachTodo.uniqueNo === todoId;
    });

    todoList.splice(deleteIndex, 1);

    localStorage.setItem("todoList", JSON.stringify(todoList));
}


// Create Todo UI
function createAndAppendTodo(todo) {

    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    // LI
    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    // Checkbox
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChanged(labelId);
    };
    todoElement.appendChild(inputElement);

    // Label
    let labelElement = document.createElement("label");
    labelElement.textContent = todo.text;
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    todoElement.appendChild(labelElement);

    // Delete Icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "ml-3");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    todoElement.appendChild(deleteIcon);
}


// Initial Render
for (let todo of todoList) {
    createAndAppendTodo(todo);
}


// Add Todo
function onAddTodo() {

    let userInput = document.getElementById("todoUserInput");
    let text = userInput.value;

    if (text === "") {
        alert("Enter todo");
        return;
    }

    todosCount++;

    let newTodo = {
        text: text,
        uniqueNo: todosCount
    };

    todoList.push(newTodo);

    localStorage.setItem("todoList", JSON.stringify(todoList));

    createAndAppendTodo(newTodo);

    userInput.value = "";
}