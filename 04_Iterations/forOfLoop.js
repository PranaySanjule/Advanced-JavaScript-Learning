// High Order Array Loops

// for of loop

// Syntax:
// for (const iterator of object) {
    
// }

// Example 1
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (const i of arr) {
    // console.log(i);
}


// Example 2
const string = "Hii, I am Pranay";
for (const char of string) {
    // console.log(char);
}


// Example 3
// How to iterate normal object using for-of loop
const obj = {
    name: 'John Doe',
    age: 22,
    gender: 'male',
};

// for (const key of obj) {
//     console.log(key);    // output : Error
// }

//Note : for-in is used to iterate normal object.

// <================#############================>

// for in loop

// Syntax:
// for (const key in object) {
    
// }

// Example 1
const obj1 = {
    name: 'Steve',
    age: 25,
    gender: 'male',
};

for (const key in obj1) {
    // console.log(key);   // output : print key only
}

// To print value
for (const key in obj1) {
    // console.log(`${key} :- ${obj1[key]}`);  // output=> name :- Steve
}

//print array using for-in loop
const superheros = ["Ironman", "Superman", "Batman", "Spiderman"];

//Note : In js, array is also a object so it has keys which started from 0

for (const key in superheros) {
    // console.log(`${key} :- ${superheros[key]}`);
}


// <================#############================>

// forEach Loop

// Syntax:
// array.forEach(function () {
    
// });

// Rules:
// 1. forEach loop takes callback function to access the array element.
// 2. function pass as a parameter .
// 3. callback function means anonymous function (function without name)
// 4. forEach loop callback function accepts 3 arguments (currentVal, index, arr)
// 5. forEach does not return value.

const realheros = ["Chatrapati Shivaji Maharaj", "Maharana Pratap", "Prithviraj Chauhan", "Ashoka the Great", "Rani Lakshmi bai"];


// 1st way
function names(realheros) {
    // console.log(realheros);
}

realheros.forEach(names);   // function reference pass as a parameter


// <=====####=====>

// 2nd way 
realheros.forEach(names => {
    // console.log(names);
});

// <=====####=====>


// 3rd way
realheros.forEach(function (names) {
    // console.log(names);
})


// <=====####=====>

// 4th way
realheros.forEach(names => {
    // console.log(names);
})


// <=====####=====>


// 5th way => Using Arrow function
realheros.forEach((names) => {
    // console.log(names);
})


// <=====####=====>

// #IMP
// forEach loop takes 3 arguments
// 1. currentVal
// 2. index
// 3. complete array

// Example
realheros.forEach((value, index, arr ) => {
    // console.log(value, index, arr);
})

// Advanced concept in loop
// Iteration over array of objects (Common concept in JS)

const founder = [
    {
        name: "Elon Musk",
        company: "Tesla"
    },
    {
        name: "Steve Jobs",
        company: "Apple"
    },
    {
        name: "Jeff Bezos",
        company: "Amazon"
    },
    {
        name: "Mark Zuckerberg",
        company: "Facebook"
    }
]

founder.forEach((item) => {
    console.log(`${item.company} :- ${item.name}`);
})

// <=====####=====>


// Map() Object
const myMap = new Map();

myMap.set('user1', 'John');
myMap.set('user2', 'Steve');

myMap.

// Que: Print key of map only
for (const key of map) {    // won't work
   // console.log(key);    // output: complete array will print
}

for (const [key, value] of map) {
    console.log(key);    //output: only key will print
}

// <================#############================>