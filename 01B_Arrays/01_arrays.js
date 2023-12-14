// array
// Every array element has indexing which start from 0 till n-1.
const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[2]);

// string array
const heros = [
  "Chatrapati Shahaji Bhosale",
  "Chatrapati Shivaji Maharaj",
  "Chatrapati Sambhaji Maharaj",
  "Uday Singh",
  "Maharana Pratap Singh",
  "Prithviraj Chauhan",
];

// console.log(heros[1]);

const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2[4]);


//Array methods

arr2.push(6);
// arr2.pop();

// console.log(arr2);
// arr2.pop();
// console.log(arr2);

// arr2.unshift(8);
// console.log(arr2);
// arr2.shift()
// console.log(arr2);

// console.log(arr2.includes(4));
// console.log(arr2.indexOf(4));

const newArr = arr2.join();

console.log(typeof newArr);

// slice, splice
console.log("A (Original Array)", arr2);

const newArr1 = arr2.slice(1, 3);
console.log("B (Slice Array)", newArr1);

const newArr2 = arr2.splice(1, 2);
console.log("C (Splice Array)", newArr2);

console.log(arr2);
