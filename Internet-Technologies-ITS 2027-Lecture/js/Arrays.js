// Arrays
// 1. Creating an Array

// 1.1 Using Array Literal
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log(fruits);

console.log("============================");

// 1.2 Using Array Cnstructor
let cars = new Array("BMW", "Audi", "Toyota", "Honda", "Nissan");
console.log(cars);

console.log("============================");

let myArray = [
  10,
  "ddd",
  true,
  null,
  undefined,
  { name: "Chathura", age: 22 },
  [10, 20],
];

console.log("============================");

// console.log(myArray);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(cars[2]);

console.log("============================");

//  3. Modifying Element of an Array

fruits[0] = "Grapes";
console.log(fruits[0]);

console.log("============================");

//  4. Built-in array functions

console.log(fruits);

console.log("============================");

// 4.1 push()

fruits.push("Strawberry");
console.log(fruits);
let items = [
  { itemId: 1, name: "Item1" },
  { itemId: 2, name: "Item2" },
];

let newItem = { itemId: 3, name: "Item3" };
items.push(newItem);
console.log(items);

console.log("============================");

// 4.2 pop()

console.log(fruits);
let popedFruit = fruits.pop();
console.log(popedFruit);
console.log(fruits);

console.log("============================");

// 4.3 shirt() - Removes the first element from an array

console.log(fruits);
let shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

console.log("============================");

// 4.4 unshift() - Adds new elements to the beginning an array

console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);

console.log("============================");

// 4.5 splice() - Adds or remove elements from an array

console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
console.log(fruits);
fruits.splice(1, 1, "Banana", "Mango", "Orange");
console.log(fruits);

// 4.6 slice
console.log(fruits);
let selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
console.log(fruits);

console.log("============================");

// 4.7 concat ()

let concatArray = fruits.concat(cars);
console.log(concatArray);

console.log("============================");

// 4.8 forEach()

fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log("============================");

// 4.9 Map()

let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

let lowerCaseFruits = fruits.map((fruit) => fruit.toLowerCase());
console.log(lowerCaseFruits);

let s = "sssssss";
console.log(s.length);

console.log("============================");

// 4.10 filter ()
let lengthFruitNames = fruits.filter((fruit) => fruit.length > 5);
console.log(lengthFruitNames);
