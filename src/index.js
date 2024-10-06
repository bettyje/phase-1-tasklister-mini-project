
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementBsId("task-list");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskDescription = document.getElementById("new-task-description").value;
      const priority = document.getElementById("priority").value;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      if (priority === "high") {
          taskItem.style.color = "red";
      } else if (priority === "medium") {
          taskItem.style.color = "blue";
      } else {
          taskItem.style.color = "green";
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
          taskList.removeChild(taskItem);
      };

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      form.reset();
  });
});


