console.log("DynamicTyping.js loaded...");

// Dynamic Typing

let x = 10;
console.log(typeof x);

x = "Hello world";
console.log(typeof x);

x = true;
console.log(typeof x);

x = null;
console.log(typeof x);

x = {
  name: "John",
  age: "22",
};
console.log(typeof x);

x = [1, 2, 3, 4, 5];
console.log(typeof x);
console.log(Array.isArray(x));
