console.log("Function js loaded...");

// Function

// 1. Function Declaration

function greet(firstName) {
  if (typeof firstName === "undefined") {
    console.log("Hello World!");
  } else {
    // console.log("Hello, " + firstName);
    console.log(`Hello, ${firstName}`);
  }
}
greet("Achini");

// 2. Function Expression

let greet2 = function (firstName) {
  console.log(`Hello, ${firstName}`);
};

greet2("John");

// 3. Arrow Function

let greet3 = (firstName) => {
  console.log(`Hello, ${firstName}`);
};
greet3("John");

let greet4 = (firstName) => console.log(`Hello, ${firstName}`);
greet3("Doe");

// 4. Default Parameters

let greet5 = (firstName = "Achini") => {
  console.log(`Hello, ${firstName}`);
};
greet5("Kamal");

// 5. Rest Parameters

let sum = (...numbers) => {
  numbers.forEach((number) => console.log(number));
};
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
