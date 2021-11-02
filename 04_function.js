//Function Declaration
function greet(name) {
  console.log("Hello " + name);
}

//Function Expression
const tt = function greet2(name) {
  console.log("Hello 2 " + name);
};
greet("Misha");
tt("Sasha");

console.log(typeof greet);
console.dir(greet);

//Анонимные функции
let counter = 0;

// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

//Стрелочные функции
function gr(name) {
  console.log("Привет " + name);
}

const pt2 = (name) => {
  console.log("Привет " + name);
};

pt2("Peter");

const ww = (name) => console.log("Привет " + name);
ww("kjhfs");

const pow = (num) => num ** 2;

console.log(pow(5));

// Параметры по умолчанию
const sum = (a, b = 1) => a + b;
console.log(sum(41));

const sum2 = (a = 40, b = a * 2) => a + b;
console.log(sum2());

function sumAll(...all) {
  console.log(all);
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5);
console.log(res);

//Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWitnLastName = createMember("Valera");

console.log(logWitnLastName(" Leontiev"));
console.log(logWitnLastName(" Goror"));
