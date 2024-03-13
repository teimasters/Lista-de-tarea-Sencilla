function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.className = "task-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function() {
            toggleTaskStatus(this);
        };

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Eliminar";
        deleteButton.onclick = function() {
            deleteTask(this);
        };

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput.value + " "));
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Por favor ingrese una tarea.");
    }
}

function toggleTaskStatus(checkbox) {
    var taskItem = checkbox.parentNode;
    if (checkbox.checked) {
        taskItem.style.textDecoration = "line-through";
    } else {
        taskItem.style.textDecoration = "none";
    }
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
