let tasks = [];

function addTask(text) {
  let task = {
    todo: text,
    completed: false,
  };
  tasks.push(task);
  console.log(`Added the task: ${text}`);
}

function toggleStatus(index) {
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
    console.log(
      `Toggled: ${tasks[index].todo} to ${
        tasks[index].completed ? "completed" : "Pending"
      }`
    );
  } else {
    console.log("Task not found");
  }
}

function deleteTask(index) {
  if (tasks[index]) {
    console.log(`Deleted Task: ${tasks[index].todo}`);
    tasks.splice(index, 1);
  } else {
    console.log("Task not found");
  }
}

function updateTask(index, change) {
  if (tasks[index]) {
    console.log(`Updated ${tasks[index].todo} to ${change}`);
    tasks[index].todo = change;
  } else {
    console.log("Task not found");
  }
}

function showTask(filter = "all") {
  console.log("Your Tasks:");
  tasks.forEach((t, i) => {
    if (
      filter === "all" ||
      (filter === "completed" && t.completed) ||
      (filter === "pending" && !t.completed)
    ) {
      console.log(`${i + 1}. [${t.completed ? "✅" : "⛌"}] ${t.todo}`);
    }
  });
}
