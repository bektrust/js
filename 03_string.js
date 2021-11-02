const name = "Aibek";
const age = 52;

function getAge() {
  return age;
}

console.log(`Меня зовут ${name} и мне ${getAge} лет`);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf("bek"));
console.log(name.toLowerCase().startsWith("ai"));
console.log(name.endsWith("ek"));
console.log(name.repeat(3));
const string = "     password    ";

console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());

function personLog(s, name, age) {
  if (age <= 0) {
    age = "Еще не родился";
  }
  return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`;
}

const personName = "Marina";
const personName2 = "James";

const personAge = 35;
const personAge2 = -2;

const output = personLog`Имя ${personName}, Возраст ${personAge}!`;
const output2 = personLog`Имя ${personName2}, Возраст ${personAge2}!`;

console.log(output);
console.log(output2);
