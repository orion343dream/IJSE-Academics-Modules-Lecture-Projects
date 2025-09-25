console.log("Objects js loaded...");

// objects

let person = {
  firstName: "John",
  lastName: "Doe",
  age: "22",
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main St",
    city: "Bonston",
    state: "MA",
  },
  getBirthYear: function () {
    return 2024 - this.age;
  },
};

console.log("PERSON: ", person);
console.log(typeof person);
console.log("============================");

// Accessing Object Properties

// 1. Dot notation
console.log("First Name: ", person.firstName);
console.log("Last Name: ", person.lastName);
console.log("Age: ", person.age);
console.log("City: ", person.address.city);
console.log("Birth Year: ", person.getBirthYear());

console.log("============================");

// 2.Bracket Notation
console.log("First Name: ", person["firstName"]);
console.log("Last Name: ", person["lastName"]);
console.log("Age: ", person["age"]);
console.log("City: ", person["address"]["city"]);
console.log("Birth Year: ", person["getBirthYear"]());

console.log("============================");

// Adding properties

person.contact = "0715878576";
console.log(person);
console.log("Contact:", person["contact"]);

console.log("============================");

// Modifing properties

person.firstName = "Achini";
person.lastName = "Pramodhya";
console.log("PERSON: ", person);

console.log("============================");

// Deleting  properties

delete person.contact;
console.log("PERSON: ", person);

console.log("============================");

let car = {
  brand: "Toyota",
  model: "Corolla",
  getDescription: function () {
    return `${this.brand} - ${this.model}`;
    // return this.brand + " - " + this.model;
  },
};

console.log("============================");

console.log(car.getDescription());

// Object as function parameters
function displayName(student) {
  console.log(student.firstName + " " + student.lastName);
}

let student = {
  firstName: "John",
  lastName: "Doe",
};

displayName({ firstName: "John", lastName: " Doe" });

console.log("============================");

// Looping object properties
for (let key in person) {
  console.log(key, person);
}

console.log("============================");

// Object destructuring
let { firstName, lastName, age, address, hobbies } = person;
console.log(firstName, lastName, age);
console.log(address);
console.log(hobbies);

console.log("============================");

// Built in object functions

// 1. Object.keys()
console.log(Object.keys(person));

console.log("============================");

// 2. Object.values()
console.log(Object.values(person));

console.log("============================");

// 3.Object.entries()
console.log(Object.entries(person));

console.log("============================");

// Constructor function
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

console.log("============================");

// Creating objects using constructor function
let student1 = new Student("John", "Doe", 22);
console.log(student);
console.log(typeof student);

class Person1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person1("John", "Doe", 30);
console.log(Person1);
console.log(typeof Person1);
