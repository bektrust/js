// alert(1);
// prompt("Как тебя зовут?");
// confirm("Как тебя зовут?");

const heading = document.getElementById("hello");

// console.dir(heading);
// heading.textContent = "Проверка связи";
// heading.style.color = "red";
// heading.style.textAlign = "center";
// heading.style.backgroundColor = "black";
// heading.style.padding = "2rem";

// setTimeout(() => {
//   console.dir(heading);
//   heading.textContent = "Проверка связи";
//   heading.style.color = "red";
//   heading.style.textAlign = "center";
//   heading.style.backgroundColor = "black";
//   heading.style.padding = "2rem";
// }, 3000);

// const heading2 = document.getElementsByTagName("h2");
// const heading2 = document.getElementsByClassName("h2-class")[0];
// const heading2 = document.querySelector(".h2-class");
const heading2 = document.querySelector("#sub-h2"); //всегда 1 элемент и 1й
console.log(heading2);

// const heading3 = heading2.nextElementSibling;
const h2_list = document.querySelectorAll("h2");
const heading3 = h2_list[h2_list.length - 1];
console.log(heading3);

setTimeout(() => {
  addstylesTo(heading, "JavaScript", "green");
}, 3000);

setTimeout(() => {
  addstylesTo(heading2, "Практикуйся ");
}, 4000);

setTimeout(() => {
  // addstylesTo(heading3.querySelector("a"), " все получится", "blue", "2rem");
  addstylesTo(heading3.children[0], " все получится", "blue", "2rem");
}, 5000);

function addstylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  if (fontSize) {
    node.style.fontsize = fontSize;
  }
}

//Events
heading.onclick = () => {
  if (heading.style.color === "green") {
    heading.style.color = "black";
    heading.style.backgroundColor = "white";
  } else {
    heading.style.color = "white";
    heading.style.backgroundColor = "black";
  }
};

heading2.addEventListener("dblclick", () => {
  if (heading2.style.color === "red") {
    heading2.style.color = "black";
    heading2.style.backgroundColor = "white";
  } else {
    heading2.style.color = "red";
    heading2.style.backgroundColor = "black";
  }
});
