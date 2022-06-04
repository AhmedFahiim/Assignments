let myTask = document.querySelector(".text");
let submitButton = document.querySelector(".add");
let tasksHolder = document.querySelector(".list");

// adding the task
submitButton.onclick = function (e) {
  e.preventDefault();
  if (myTask.value.length != 0) {
    addTask();
  }
};

// div creating function
function addTask() {
  let newDiv = document.createElement("div");
  newDiv.textContent = myTask.value;
  tasksHolder.append(newDiv);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newDiv.append(deleteButton);
  // delete the task
  deleteButton.onclick = function () {
    deleteButton.remove();
    newDiv.remove();
  };
}
