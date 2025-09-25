console.log("Function Hoisting js loaded....");

// test();

// function test() {
//   console.log("Hello World!");
// }
// test();

sayHi();

var sayHi = function () {
  console.log("Hi");
};

sayHi();
