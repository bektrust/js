const num = 42;
const float = 42.42;
const pow = 10e3;

console.log(pow);
console.log(
  "MAX_SAFE_INTEGER",
  Number.MAX_SAFE_INTEGER,
  "Максимальное значение интежер"
);
console.log("Math.pow", Math.pow(2, 53) - 1);
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUENumber".MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("2/0", 2 / 0);
console.log(NaN); //Not A Number
console.log(2 / undefined); //NaN
const weird = 2 / undefined;
console.log(isNaN(weird));
console.log(isFinite(weird));
console.log(isFinite(42));

const stringInt = "42";
const stringFloat = "42.42";

console.log(parseInt(stringInt) + 2);
console.log(+stringInt + 2);
console.log(parseInt(stringFloat) + 2);
console.log(parseFloat(stringFloat) + 2);

console.log(0.4 + 0.2); // ожидаем 0.6, а получили 0.6000000000000001
console.log((0.4 + 0.2).toFixed(1)); //  результат строка
console.log(parseFloat((0.4 + 0.2).toFixed(1)));

//BigInt
// const tp = BigInt("1234567890123456789012345678901234567890");
//
// console.log(tp);

console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(Math.abs(-42));
console.log(Math.max(5687, 76, 45));
console.log(Math.min(5687, 76, 45));
console.log(Math.floor(45, 9));
console.log(Math.ceil(45, 9));
console.log(Math.round(45, 9));
console.log(Math.trunc(45, 9));

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomBetween(10, 20));
