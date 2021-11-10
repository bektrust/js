// Event loop

// const timeout = setTimeout(() => {
//   console.log("After 2,5 sec");
// }, 2500);
//
// clearTimeout(timeout);
//
// const intreval = setInterval(() => {
//   console.log("Interval every 1 sec");
// }, 1000);
//
// clearInterval(clearInterval);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };
// delay(() => {
//   console.log("After 2 sec");
// }, 2000);

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject("Что-то пошло не так. Повторите попытку");
    }, wait);
  });
  return promise;
};

// delay(2500)
//   .then(() => {
//     console.log("After 2,5 sec");
//   })
//   .catch((err) => {
//     console.error("Ошибка! ", err);
//   })
//   .finally(console.log("Finally"));

const getData = () =>
  new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13, 21]));

// getData().then((data) => console.log(data));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("Data", data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally");
  }
}

asyncExample();
