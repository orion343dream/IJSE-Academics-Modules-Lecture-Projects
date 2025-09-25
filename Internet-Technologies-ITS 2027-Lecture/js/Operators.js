console.log("Operators.js loaded...");

// 1. Arithmatic Operators

let x = 10;
let y = 20;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log("============================");

// 2. Assignment Operators

let a = 10;
let b = 20;

a += b;
console.log(a);

console.log("============================");

a -= b;
console.log(a);

// 3. Comparison Operator

let p = 10;
let q = 20;

console.log(p == q);

console.log("============================");

let r = "10";
console.log(typeof r);

let s = 10;
console.log(typeof s);
console.log(r == s);
console.log(r === s);

console.log(p != q);

console.log("============================");

console.log(p !== q);

console.log(p > q);
console.log(p >= q);

console.log("============================");

console.log(p < q);
console.log(p <= q);

console.log("============================");

// 4. Logical Operators

let t = true;
let u = false;
// 4.1 Logical and
console.log(t && u);

console.log("============================");

// 4.2 Logical or
console.log(t || u);

console.log("============================");

console.log(!t);
