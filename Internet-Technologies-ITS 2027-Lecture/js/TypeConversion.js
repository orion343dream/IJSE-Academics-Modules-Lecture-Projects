console.log("TypeConversion.js loaded...");

// 1.Implicitly Type Conversion
let result = "The answer is " + 100;
console.log(result);
console.log(typeof result);

console.log("============================");

let sum = "37" + 5;
console.log(sum);
console.log(typeof sum);

console.log("============================");

let diff = "37" - 5;
console.log(diff);
console.log(typeof diff);

console.log("============================");

let multiply = "10" * 5;
console.log(multiply);
console.log(typeof multiply);

console.log("============================");

let divide = "10" / 5;
console.log(divide);
console.log(typeof divide);

console.log("============================");

let reminder = "13" % 5;
console.log(reminder);
console.log(typeof reminder);

// 2.Explicitly Type Conversion

let num1 = "100";
console.log(num1);
console.log(typeof num1);

console.log("============================");

let num2 = Number(num1);
console.log(num2);
console.log(typeof num2);

console.log("============================");

let num3 = Number("40px");
console.log(num3);
console.log(typeof num3);

console.log("============================");

let num4 = Number("Hello");
console.log(num4);
console.log(typeof num4);

console.log("============================");

let num5 = Number(true);
console.log(num5);
console.log(typeof num5);

console.log("============================");

let num6 = Number(false);
console.log(num6);
console.log(typeof num6);

console.log("============================");

let num7 = Number(null);
console.log(num7);
console.log(typeof num7);

console.log("============================");

let num8 = Number(undefined);
console.log(num8);
console.log(typeof num8);

console.log("============================");

let num9 = parseInt("100");
console.log(num9);
console.log(typeof num9);

console.log("============================");

let num10 = parseInt("100.59");
console.log(num10);
console.log(typeof num10);
