class Task {
  create(description, author) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = { id: Date.now(), description, author, isCompleted: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getAll(author) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter((task) => task.author === author);
    return filteredTasks;
  }
  completeTask(taskId, author) {
    const tasks = this.getAll(author);

    const index = tasks.findIndex((task) => task.id === taskId);
    const task = tasks.filter((task) => task.id === taskId) || null;

    if (task === null) {
      throw new Error("Задачи с таким id нет");
    }

    task.isCompleted = true;

    tasks.splice(index, 1, task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

const task = new Task();

document.querySelector("#btn-create-task").addEventListener("click", (e) => {
  e.preventDefault();

  const taskDescription = document.querySelector("#newTask").value;

  const currentUser = localStorage.getItem("currentUser");

  if (currentUser === null) {
    document.location.href = "/auth.html";
  }

  task.create(taskDescription, JSON.parse(currentUser));
});

document.addEventListener("DOMContentLoaded", () => {
  let root = document.querySelector(".completed-tasks");

  const tasks = task.getAll();
  let html = "";

  tasks.forEach((task) => {
    if (task.isCompleted) {
      html += `<li>${task.description}</li>`;
    }
  });

  if (html === "") html = "Выполненных задач еще нет";
  root.innerHTML = html;
});
