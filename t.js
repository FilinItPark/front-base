/* let a = "Hello";
a = 5.323232;
let b = "c";


number
string
symbol
object
boolean
undefined
null

console.log(a);

let c = null;
let d = undefined;
console.log(c == d);
console.log(c === d);
// console.log(Math.max());
// console.log(Math.min());
console.log(c);

const log = console.log;

console.log(d);

a = [1, 2, "dsadsada"];
log(a);

for (let i = 0; i < a.length; i++) {
  log(a[i]);
}

a.forEach((el) => {
  log(el);
});

for (let el of a) {
  log(el);
}

a.push(5);
log(a[0]);
// log(a);

const dsdsadsa = {
  name: "dsadsa",
  age: 5,
  log: function () {
    log(this.name);
  },
  print: () => {
    log(this);
  },
  tasks: ["dsadas", "dsddff", "cccc"],
};

function dsadasds() {
  log(this);
}
dsadasds();
// dsdsadsa.log();

dsdsadsa.print();

let user = new (function () {
  this.name = "dasdas";
  this.age = 2332231;
})().age;

log(user);

const puk = () => {
  log(this);
};

puk();
class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = "token";
  }

  doSomething() {
    setTimeout(() => {
      this.numbers.forEach((number) => {
        //Cannot read property 'forEach' of undefined
        console.log(number);
        console.log(this.token);
      });
    }, 100);
  }p=
}
let service = new Service();
service.doSomething();
 */

/* console.log(document.querySelector(".container"));
console.log(document.querySelectorAll(".card"));

const container = document.querySelector(".container");

let a = document.createElement("div").innerText("<b>я новый див!</b>");
document.body.append(a);

const name = "Ivan"; */
/* 
container.innerHTML = `
<h1>Я люблю Россию! ${name}</h1>
`;
 */

// отправить форму на сервер

const nameInput = document.querySelector("#name");
const hideBtn = document.querySelector("#hide");
const ageInput = document.querySelector("#age");
const passwordInput = document.querySelector("#password");
// hideBtn.classList.add("hidden");
hideBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    hideBtn.innerText = "Скрыть пароль";
  } else {
    passwordInput.type = "password";
    hideBtn.innerText = "Показать пароль";
  }
});

document.querySelector("button[type=submit]").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(passwordInput.value);
  console.log(ageInput.value);
});

document.querySelector(".changeStatusButton").addEventListener("click", () => {
  document.querySelector(".to").classList.toggle("hidden");
});
