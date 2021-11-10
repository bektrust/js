const person = {
  name: "Jyldyz",
  age: 40,
  isProgrammer: false,
  languages: ["ky", "ru", "en", "uz"],
  "complex key": "Complex Value",
  ["key_" + (1 + 3)]: "Computed key",
  greet() {
    console.log("greet from person");
  },
  info() {
    console.info("Информация про человека по имени: " + this.name);
  },
};

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// console.log(person["key_4"]);
// person.greet();
//
// person.age++;
// console.log(person.age);
// person.languages.push("by");
//
// delete person["key_4"];

// console.log(person);

// const { name, age, languages } = person;
// console.log(name, age, languages);

// const { name, age: agePerson = 10, languages } = person;
// console.log(name, agePerson, languages);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("key: ", key);
//     console.log("value:", person[key]);
//   }
// }

// const keys = Object.keys(person);
// keys.forEach((key) => {
//   console.log("key: ", key);
//   console.log("value:", person[key]);
// });

//Context
person.info();

const logger = {
  keys() {
    console.log("Object keys ", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}: " ${this[key]}`);
    });
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("-------Start-------");
    }

    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}: " ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("--------------");
      }
    });

    if (bottom) {
      console.log("-------End-------");
    }
  },
};

// const bound = logger.keys.bind(person);
// bound();

logger.keys.call(person);
logger.keysAndValues.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
