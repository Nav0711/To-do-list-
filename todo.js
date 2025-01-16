const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");

        li.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => li.remove());

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }
}
