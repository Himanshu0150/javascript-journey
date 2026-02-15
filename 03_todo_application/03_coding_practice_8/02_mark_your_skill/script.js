let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillsContainerElement = document.getElementById("skillsContainer");
let skillsListContainerElement = document.getElementById("skillsListContainer");

function createAndAppendList(skill) {

    let skillListElement = document.createElement("li");
    skillListElement.classList.add("d-flex", "flex-row");
    skillListElement.id = "list" + skill.uniqueNo;
    skillsListContainerElement.appendChild(skillListElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkbox" + skill.uniqueNo;
    skillListElement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.textContent = skill.skillName;
    labelElement.classList.add("checkbox-label");
    labelElement.setAttribute("for", inputElement.id);
    labelElement.id = "label" + skill.uniqueNo;
    skillListElement.appendChild(labelElement);

    inputElement.onclick = function() {
        if (inputElement.checked === true) {
            labelElement.classList.add("checked");
        } else {
            labelElement.classList.remove("checked");
        }
    };


}


for (let skill of skillList) {
    createAndAppendList(skill);
}