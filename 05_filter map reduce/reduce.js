// reduce() method

// What is reduce()?
// Reduce method reduces an array of values down to just one value.

// Syntax:
// reduce((accumulator, currentVal, currentIndex, array) => {
//     condition
// }, initialVal)

// Example 1 : Return the sum of array
const arr = [1, 2, 3, 4, 5, 6];

// const sum = arr.reduce((acc, currentElement, index, actualArray) => {
//   // accumulator(acc) = result of the previous computation or result of array elements till the current element
//   // currentElement = current element
//   // index = indexing of the element
//     // actualArray = Input Array
//     console.log(`Acc : ${acc} | CurrentVal : ${currentElement} `);
//   return acc + currentElement;
// }, 0); // 0 represent second parameter that is initial value which added with accumulator and it runs only once

const sum = arr.reduce((acc, currVal) => acc + currVal, 0);

// console.log(sum);



// Example 2 : Return TotalBillToPay in shopping cart
let cart = [
    { product: "Watch", price: 2500 },
    { product: "Headphone", price: 4000 },
    { product: "Shoes", price: 2000 },
    { product: "Shirt", price: 750 }
];

const TotalBillToPay = cart.reduce((acc, item) => acc + item.price, 0);
console.log(TotalBillToPay);