let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

let storageKey = "userInput";

saveBtn.onclick = function() {
    localStorage.setItem(storageKey, msg.value);
};

clearBtn.onclick = function() {
    msg.value = "";
    localStorage.removeItem(storageKey);
};