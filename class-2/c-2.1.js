// 1.callbacks
// 2.async functions
// 3. promises
// 4. js functions (map,filter)
// 5. Assignments
//callbacks

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}
function sumOfSqure(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}
function sumOfCube(a, b) {
  let square1 = cube(a);
  let square2 = cube(b);
  return square1 + square2;
}
let ansSquare = sumOfSqure(1, 2);
let ansCube = sumOfCube(1, 2);
console.log(ansSquare, ansCube);

// This functions are not following dry principle so lets reduce it

function sumOfSomething(a, b, fn) {
  let firstresult = fn(a);
  let secondresult = fn(b);
  return firstresult + secondresult;
}

let ans = sumOfSomething(1, 2, square);

//Async Functions
console.log("async");
function onDone() {
  console.log("Finished  Timeout");
}

setTimeout(onDone, 1000);
console.log("After Timeout");

let a = 1;
console.log(a);
const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("data read from the file is");
  console.log(data);
});
let ansi = 0;
for (let i = 0; i < 100; i++) {
  ansi = ansi + i;
}
console.log(ansi);

//Promises
//callback hell can be solved by promises

function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
}
const anspromise = myOwnSetTimeout(1000);
ans.then(function () {
  console.log("Promise function called");
});
