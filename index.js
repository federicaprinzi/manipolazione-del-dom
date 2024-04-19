const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    const taskItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    taskItem.innerText = taskValue;

    taskItem.appendChild(checkbox);

    const taskList = document.getElementById("taskList");
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
};

const addButton = document.querySelector("button");
addButton.onclick = addProduct;
