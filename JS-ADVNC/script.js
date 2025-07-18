let mainContainer = document.getElementById("main");
console.log(mainContainer);
mainContainer.innerText = "Hello Guvi";
mainContainer.style.backgroundColor = "Red";
//id, class, [div, p, h1]
let classElement = document.getElementsByClassName("element");
console.log(classElement[0]);
classElement[0].style.backgroundColor = "green";
console.log(classElement[1]);

let tagedElement = document.getElementsByTagName("div");
console.log(tagedElement);

let queryElement = document.querySelector("div");
console.log(queryElement);
let allQueryElement = document.querySelectorAll(".element"); //div
console.log(allQueryElement);

let container = document.getElementById("container");

container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "0 auto";
container.style.width = "500px";
container.style.height = "max-height";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "2rem";
container.style.justifyContent = "center";
container.style.alignItems = "center";

container.innerHTML = `
    <h1>Hello Guvi</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellendus modi reiciendis porro ea beatae provident quidem, inventore nostrum voluptatem magni obcaecati, ullam ad eveniet quibusdam. Praesentium quisquam rem voluptas!</p>
    <button class="element">save</button>
`;

let newContainer = document.createElement("div");
newContainer.setAttribute("class", "newEle");
newContainer.innerText = "I'm a new element";
console.log(newContainer);

let anchorElement = document.createElement("a");
anchorElement.setAttribute("href", "https://google.com");
anchorElement.setAttribute("target", "_blank");
anchorElement.innerText = "GOOGLE";
console.log(anchorElement);
//appendChild (olderone)
// returns that child and also only one element can be added
// let childElemenmt = document.body.appendChild(newContainer);
// console.log(childElemenmt);

//append
//nothing will be returend (undefined) // multiple nodes
//can be appended
document.body.append(newContainer, anchorElement);

const input = document.querySelector("input");
const toogleBtn = document.querySelector("#pass-check");

function toogleEvent() {
  const inputType = input.getAttribute("type");
  if (inputType == "password") {
    input.setAttribute("type", "text");
    toogleBtn.innerText = "Hide";
  } else {
    input.setAttribute("type", "password");
    toogleBtn.innerText = "Show";
  }
}

toogleBtn.addEventListener("click", () => {
  toogleEvent();
});

function getAndInvoke(nameOfFN, fn) {
  //     fn =  () => {
  //   someFn("sanjay");
  // }
  //()=>{}
  // someFn()
  console.log(nameOfFN); // tickFn
  fn(); //()=>{}
}

function someFn(name) {
  console.log("someFn is called by", name);
}
getAndInvoke("tickFn", () => {
  someFn("PRAVEEN");
}); // nameOfFN, fn

//mouse events (mouseup, mousedown, mousehover)
document.addEventListener("mouseup", () => {
  console.log("event mouses triggerd");
});
//form event (change, submit, input)
const myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("input has been triggerd in form");
});
//key events (keypress, keydown, keyup)
document.addEventListener("keyup", (e) => {
  console.log("Key event triggred", e.key);
});
//window events - (load, resize)
window.addEventListener("resize", (e) => {
  console.log(
    "resizing the app",
    "height:",
    e.target.innerHeight,
    "width:",
    e.target.innerWidth
  );
});
