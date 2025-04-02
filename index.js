function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("li");
    newTask.textContent = taskText;

    newTask.addEventListener("click", function () {
        this.classList.toggle("completed");
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
}
