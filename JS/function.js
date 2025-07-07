// //functions
function calculator(operation, num1, num2) {
  if (operation == "+") {
    console.log("+ =>", num1 + num2);
  } else if (operation == "sub") {
    console.log("sub =>", num1 - num2);
  } else if (operation == "mul") {
    console.log("mul =>", num1 * num2);
  } else {
    console.log("no specified opertion please select [add, sub, mul]");
  }
}

calculator("add", 10, 13);
calculator("sub", 10, 13);
calculator("mul", 10, 13);

function returnableFn(arg, agr2) {
  return agr2;
}
returnableFn(10, 12);
let value = returnableFn(10, 12);
console.log(value);
console.log(returnableFn(12, 13));

//arrow function , IIFE, anonyums

//Arrow function

const arrFn = (arg1) => {
  console.log("data from arrow function", arg1);
};

arrFn("argument-arr");

//anonymous function

let anonFn = function (value) {
  console.log("data from anonymous function", value);
};
anonFn([1, 2]);

//IIFE
let object = [
  {
    name: "sanjay",
    subjects: ["phy", "maths", "chemistry"],
    marks: [80, 40, 30],
  },
  {
    name: "moorthy",
    subjects: ["phy", "maths", "chemistry"],
    marks: [20, 30, 80],
  },
];
//calculate total , highestmark, whichsubject and personName

(function () {
  let totalMark = 0;
  for (let i = 0; i < object.length; i++) {
    let marksArr = object[i].marks;
    for (let j = 0; j < marksArr.length; j++) {
      totalMark = totalMark + marksArr[j];
    }
    console.log("Total Marks for ", object[i].name, totalMark);
    totalMark = 0;
  }
})();
