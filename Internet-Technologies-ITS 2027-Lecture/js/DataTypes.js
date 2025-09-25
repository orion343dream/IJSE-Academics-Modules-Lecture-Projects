console.log("DataTypes is loaded...");

// 1.Primitive Data Types

// 1.1 Number

let num1 = 10;
console.log(num1);
console.log(typeof num1);

let num2 = 10.59;
console.log(typeof num1);

console.log("============================");

// 1.2 String - Represent a sequence of characters.

let customerName = "John";
console.log(typeof customerName);

// 1.3 Boolean

let isCustomer = true;
let isEmployee = false;

console.log(typeof isCustomer);
console.log(typeof isEmployee);

console.log("============================");

// 1.4 Undifined

let x;
console.log(x);
console.log(typeof x);

console.log("============================");

// 1.5 - Null
let y = null;
console.log(y);
console.log(typeof y);

console.log("============================");

// 1.6 - Symbol
let symbol = Symbol("Symbol");
console.log(symbol);
console.log(typeof symbol);

console.log("============================");

// 2. Reference Data Types(Non-primitive Data Types)

// 2.1 Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
};
console.log(person);
console.log(typeof person);

console.log("============================");

// 2.2 Array => Represents a list of elements.
let color = ["Red", "Green", "Blue"];
console.log(color);
console.log(typeof color);
console.log(Array.isArray(color));
console.log(Array.isArray(person));

console.log("============================");

// 2.3 Function

function greet() {
  console.log("Hello WOrld");
}
greet();
console.log(typeof greet);
console.log("============================");

// 2.4 Date - Represents a date and time.

let today = new Date();
console.log(today);
console.log(typeof today);
