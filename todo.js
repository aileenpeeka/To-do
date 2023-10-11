document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    document.getElementById("add").addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

    // Add event listener for Enter key
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            document.getElementById("add").click();
        }
    });
});
