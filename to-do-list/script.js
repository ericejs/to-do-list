const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#task-input");
const taskButton = document.querySelector("#task-button");
const themeToggle = document.querySelector("#theme-toggle");


function changeTheme() {
  const darkTheme = document.body.classList.toggle("dark-theme");
}

themeToggle.addEventListener("click", changeTheme);

function createTask() {

  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.className = "task-item";
    newTask.textContent = taskInput.value.trim();

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "×";

    taskList.appendChild(newTask);
    newTask.appendChild(deleteButton);
    taskInput.focus();
    taskInput.value = '';

    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

  }

}

taskButton.addEventListener( "click", createTask );
form.addEventListener("submit", event => {
  event.preventDefault();
});
