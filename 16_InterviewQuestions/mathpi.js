// ques : In JS, Change the value of Math.pi from 3.142 to 3 or 4. Is possible to change if yes then how and if no then give reason.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// NOTE : Checkout out of descriptor, there writable property is false


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

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}