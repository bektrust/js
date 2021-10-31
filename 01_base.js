// Переменные
// const name = "Aibek";
// const lastName = "Dzheenbekov";
// let age = 52;

// console.log("Имя человека " + name + " а его возраст " + age + "!!!");
// console.log(age);
// const lastName = prompt("Введите фамилию ");
// alert(name + " " + lastName);

// let currentYear = 2021;
// const birthYear = 1970;
//
// const a = 10;
// const b = 5;
//
// let c = 32;
// c += a;
//
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// const isProgrammer = true;
// let x;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isProgrammer);
// console.log(typeof x);

// const z = c - a >= b;
// console.log(z);

// const courseStat = "fail"; // ready, pending, fail

// if (courseStat === "ready") {
//   console.log("Курс готов.");
// } else if (courseStat === "pending") {
//   console.log("Курс в процессе подготовки.");
// } else {
//   console.log("Курс не получился.");
// }
//

// const isReady = false;

// if (isReady) {
//   console.log("Готово");
// } else {
//   console.log("Потеряно");
// }

// isReady ? console.log("Готово") : console.log("Потеряно");

// const num1 = 5;
// const num2 = "5";
//
// console.log(num1 === num2);

// function calcAge(year) {
//   return 2021 - year;
// }

// console.log(calcAge(2001));
// console.log(calcAge(2011));

// function getInfoMan(name, year) {
//   const newage = calcAge(year);
//
//   if (newage > 0) {
//     console.log("Человек по имени " + name + " сейчас имеет возраст " + newage);
//   } else {
//     console.log("Это будущее!");
//   }
// }
//
// getInfoMan("Монро", 1970);
// getInfoMan("Гарфилд", 2025);

// const cars = Array("Nissan", "GMC", "Audi");
// const cars = ["Nissan", "GMC", "Audi"];

// console.log(cars);
// console.log(cars[0]);
// console.log(cars.length);
//
// cars[0] = "Toyota";
// cars[cars.length] = "Nissan";
//
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car);
// }

// for (car of cars) {
//   console.log(car);
// }

const person = {
  firstName: "Aibek",
  lastName: "Dzheenbekov",
  age: 52,
  languages: ["en", "ru", "ky"],
  hasWife: true,
  greet: function () {
    console.log("greet from person");
  },
};

console.log(person.firstName);
console.log(person["lastName"]);
const key = "age";
console.log(person[key]);
person.greet();
person.isProgrammer = true;
console.log(person);
