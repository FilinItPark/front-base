class Registration {
  saveToDB(login, password, fio, age) {
    if (this.checkExists(login)) {
      throw new Error("Такой пользователь уже есть");
    }

    const user = {
      login,
      password,
      fio,
      age,
    };

    const usersInJson = localStorage.getItem("users");
    let users;
    if (usersInJson !== null) {
      users = JSON.parse(usersInJson);
      users.push(user);
    } else {
      users = [];
      users.push(user);
    }
    const newUsersInJson = JSON.stringify(users);
    localStorage.setItem("users", newUsersInJson);
  }

  checkExists(login) {
    const usersInJson = localStorage.getItem("users");
    let users;
    if (usersInJson !== null) {
      users = JSON.parse(usersInJson);
    }

    return users && users.filter((user) => user.login === login).length > 0;
  }
}

const registration = new Registration();

document.querySelector(".signup").addEventListener("click", (event) => {
  event.preventDefault();

  const login = document.querySelector("#login").value;
  const password = document.querySelector("#password").value;
  const fio = document.querySelector("#fio").value;
  const age = document.querySelector("#age").value;

  try {
    registration.saveToDB(login, password, fio, age);
    document.location.href = "/tasks.html";
  } catch (error) {
    alert(error.message);
  }
});
