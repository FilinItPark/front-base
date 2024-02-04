class Authorization {
  authorize(login, password) {
    const usersInJson = localStorage.getItem("users");
    if (usersInJson === null) {
      throw new Error("хэшмапа нету в JSON");
    }

    const users = JSON.parse(usersInJson);
    const intermediate = users.filter((user) => {
      return user.login === login && user.password === password;
    });
    const authorizedUser = intermediate.length > 0 ? intermediate[0] : null;

    if (authorizedUser !== null) {
      const currentUser = localStorage.setItem(
        "currentUser",
        JSON.stringify(authorizedUser)
      );
      return;
    }

    throw new Error("Нет пользователя с таким логином и паролем");
  }
}

const authorizer = new Authorization();

document.querySelector(".auth").addEventListener("click", (event) => {
  event.preventDefault();

  const login = document.querySelector("#login").value;
  const password = document.querySelector("#password").value;

  try {
    authorizer.authorize(login, password);
    document.location.href = "/tasks.html";
  } catch (error) {
    alert(error.message);
  }
});
