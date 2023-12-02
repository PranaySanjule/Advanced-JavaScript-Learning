//map() method

// What is map()?
// It is method to create a new array from existing one by applying a function to each one of the elements of the first array.

// Syntax
// map((currentVal, index, array) => {
//  condition
// })

// Example 1 : multiplying each element of the array by 5 and returning the new array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = nums.map((arrayElements, index, actualArray) => arrayElements * 5);     // Returning implicitly(without return keyword)

// console.log(res);

const addTwo = nums.map((arrayElements, index, actualArray) => {
    return arrayElements + 2;       // Returning explicitly (using return keyword)
});

// Example 2 : Output only names of students in uppercase
let students = [
    { name: "Vihant", rollNo: 30, marks: 95 },
    { name: "Raj", rollNo: 25, marks: 80 },
    { name: "Piyush", rollNo: 20, marks: 85 },
    { name: "Rohan", rollNo: 40, marks: 70 },
    { name: "Aryan", rollNo: 35, marks: 75 },
];

//normal way
let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase());
}
// console.log(names);

// Using map
let stuNames = students.map((arrElement) => arrElement.name.toUpperCase());
console.log(stuNames);