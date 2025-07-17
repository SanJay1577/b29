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
