const cars = ["renault", "toyota", "porsche", "kia"];
const fib = [1, 1, 2, 3, 5, 8, 13, 21];
const people = [
  { name: "Baron", budget: 20000 },
  { name: "Marina", budget: 35000 },
  { name: "Joy", budget: 50000 },
];
cars.push("audi");
cars.unshift("bmw");

console.log(cars);

const firstCar = cars.shift();
const lastCar = cars.pop();

console.log(firstCar);
console.log(lastCar);
console.log(cars);

console.log(cars.reverse());

//Задача 1
// const text = "Приввет, я программирую";
// const reText = text.split("").reverse().join("");
//
// console.log(reText);

const upperCaseCars = cars.map((car) => car.toUpperCase());
console.log(upperCaseCars);

const pow2 = (n) => n ** 2;
const powFib = fib.map(pow2);
const filtarray = powFib.filter((num) => num > 20);
console.log(filtarray);

const sumBudget = people
  .filter((person) => person.budget > 20000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);

console.log(sumBudget);
