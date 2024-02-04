class Task {
  getAll(author) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter(
      (task) => task.author.login === author.login
    );
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

document.addEventListener("DOMContentLoaded", () => {
  let root = document.querySelector(".uncompleted-tasks");

  const currentUser = localStorage.getItem("currentUser");

  if (currentUser === null) {
    document.location.href = "/auth.html";
  }

  const author = JSON.parse(currentUser);
  const tasks = task.getAll(author);
  let html = "";

  tasks.forEach((task) => {
    if (!task.isCompleted) {
      html += `<li id="${task.id}"><input type='checkbox'/> ${task.description}</li>`;
    }
  });

  root.innerHTML = html;
});
