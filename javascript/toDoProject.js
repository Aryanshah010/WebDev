let taskInput = document.querySelector("#taskInput");
let addtaskbtn = document.querySelector("#addtaskbtn");
let taskList = document.querySelector("#taskList");

function addTask() {
  let task = taskInput.value.trim();
  if (task === "") return;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = 10 + "px";

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = " " + task;

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "❌";
  deletebtn.classList.add("dltbtn");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deletebtn);
  taskList.appendChild(li);

  taskInput.value = "";

  checkbox.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deletebtn.addEventListener("click", () => {
    li.remove();
  });
}

addtaskbtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

//Global elements (like the input box, “Add Task” button) already exist in the HTML when the page loads.
// 👉 Their event listeners can be attached outside in the main script:
// Dynamic elements (like the checkbox ✅, ❌ delete button, and <li> list items) are created later in JavaScript each time you add a task.
// 👉 These don’t exist at page load, so you can’t attach event listeners globally.
// That’s why we add their listeners inside the addTask() function, right after creating them.
