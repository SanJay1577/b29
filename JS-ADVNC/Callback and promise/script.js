function abc(name) {
  //let name = undefined -> "sanjay"
  console.log("abc fn called", name);
}

abc("sanjay");
abc(9);

let valuea = 15;
let valueb = valuea;
console.log(valueb);

let xyz = abc;
xyz("praveen"); //abc("praveen")

function greetMe(cdk) {
  //let cdk = ()=>{gbc(10)}
  console.log("greetme function called");
  cdk(); //gbc(number)()
}

function gbc(num) {
  //let num = "undefined"
  console.log("gbc function called", num);
}
const number = 10;
gbc(number);

greetMe(() => {
  gbc(number);
});

console.log("......................................");
console.log("callback functions");

function task1(cb) {
  //let cb = task2
  console.log("Task 1 started");
  setTimeout(() => {
    console.log("Task1 completed");
    cb();
  }, 2000);
}

function task2(cb) {
  console.log("Task2 started");
  console.log("Task2 completed");
  cb();
}
function task3(cb) {
  console.log("Task3 started");
  setTimeout(() => {
    console.log("Task3 completed");
    cb();
  }, 3000);
}
function task4(cb) {
  console.log("Task4 started");
  setTimeout(() => {
    console.log("Task4 completed");
    cb();
  }, 2000);
}
function task5() {
  console.log("Task5 started");
  setTimeout(() => {
    console.log("Task5 completed");
  }, 1000);
}

//calback hell or inversion of control
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});

const imageArr = ["./assets.jpg", "./mongoimage.png"];
console.log(imageArr);
