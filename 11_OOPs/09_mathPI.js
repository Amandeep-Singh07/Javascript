// Interview Question: Why Math.PI is not changeable?
// Answer: Because Math.PI is a non-writable property of the Math object in JavaScript. This means that once it is defined, its value cannot be changed or reassigned. The Math object is a built-in object in JavaScript that provides mathematical constants and functions, and its properties are designed to be immutable to ensure the integrity of mathematical calculations.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {  // object in js is not iterable, so here we are using Object.entries() to convert the object into an array of key-value pairs, which can be iterated using a for...of loop.
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
