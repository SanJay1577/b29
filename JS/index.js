//array
const arr = [1, 2, 3, 4];
console.log("org arr", arr);
arr.push(5, 6); //add value from last index
console.log("after push", arr);

arr.pop(); //remove value from last index
arr.pop();
console.log("after pop", arr);

arr.unshift(5, 6); //add value from first index
console.log("after unshift", arr);

arr.shift(); //remove value from first index
arr.shift();
console.log("after shift", arr);

const alphaArr = ["s", "a", "n", "j", "a", "y"];
console.log(alphaArr);
const alphaArrStr = alphaArr.join("");
console.log("join-string", alphaArrStr);
const splitArr = alphaArrStr.split("");
console.log("split-arr", splitArr);
// const input = "praveen";
// const resultSplit = input.split("");
// for (let i = 0; i < resultSplit.length; i++) {
//   console.log(resultSplit[i]);
// }
//slice(stratValue, endValue-exclusive)
console.log(alphaArr.slice(1, 5));
console.log("after slice", alphaArr);
//splice(startValue, deleteCount, ...additional-values)
["s", "a", "n", "p", "k", "j", "a", "y"];
alphaArr.splice(3, 0, "p", "k");
console.log("after splice", alphaArr);

//MRF (map , filter ,reduce)

Array.prototype.newMap = function (fn) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(fn(this[i], i, this));
  }
  return tempArr;
};

const mrfArr = [2, 4, 5, 6, 8];
let originalMapArr = mrfArr.map((value, index, accArr) => {
  console.log("original value", value);
  console.log("original index", index);
  return value * 2;
});

let newMapArrArr = mrfArr.newMap((value, index, accArr) => {
  console.log("new value", value);
  console.log("new index", index);
  return value * 2;
});

console.log(mrfArr);
console.log(originalMapArr);
console.log(newMapArrArr);

const filterArr = mrfArr.filter((value, index, accArr) => {
  return value != 5;
});
console.log(filterArr);

const reduceData = mrfArr.reduce((acc, value, index, accArr) => {
  return acc + value;
}, 0);

console.log(reduceData);
//scoping
var b;
var c;

if (true) {
  b = 15;
  console.log("inside", b);
}

if (true) {
  c = 25;
  console.log("b", b);
  console.log("inside", c);
}
