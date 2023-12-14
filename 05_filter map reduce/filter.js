// 1. filter() method

// What is filter()?
// Filter method takes each element in an array and it applies an conditional statement against it,
// if condition returns true element gets push into the array and if the condition return false the
// element does not push into the output array.

// => filter() accepts 3 arguments same as forEach().
// => filter() return value, but forEach does not return any value.

// Syntax:
// filter((currentVal, index, arr) => {

// });

// Example 1 : filter even number
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = arr1.filter((num) => num % 2 == 0); // Implicit scope (not use of {} and return keyword)

// console.log(res);   // output: [ 2, 4, 6, 8, 10 ]

// There are 2 different way to use arrow function

// Implicit Function (No use of return keyword)
// Explicit Function (Use of return keyword)

//Note: Checkout my Function in JavaScript blog

// <=====####=====>

// Compare filter() with forEach()
const ans = [];

arr1.forEach((num) => {
  if (num % 2 === 0) {
    ans.push(num);
  }
});

// console.log(ans);

// <=====####=====>

// Example 2 : return more than 2 elements only
const arr2 = [1, 2, 3, 4, 5, 6];

const moreThanTwo = arr2.filter((arrayElement, index, actualArray) => {
  // no need to write index and actualArray
  return arrayElement > 2; // Explicit scope (using {} with return keyword)
});

// console.log(moreThanTwo);

// Example 3 :
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// using filter
// Question 2 : Return only details of those students who scored more than 60
let marksMoreThanSixty = students.filter((stuMarks) => stuMarks.marks > 60);
// console.log(marksMoreThanSixty);

// Question 2 : Return only details of those students who scored more than  and roll no > 15
const details = students.filter(
  (stuMarks) => stuMarks.marks > 60 && stuMarks.rollNumber > 15
);
// console.log(details);

// <=====####=====>

// #IMPORTANT: Example => filter out array of object according to some conditions

const data = [
  {
    title: "Mythology of the Vedas: Gods of the Rigveda",
    genre: "Mythology",
    publishDate: "2019",
    editionDate: "2020",
  },
  {
    title: "The Mahabharata: Gods, Heroes, and Epic Battles",
    genre: "Epic Poetry",
    publishDate: "2021",
    editionDate: "2021",
  },
  {
    title: "Gods and Goddesses of Ancient India: Stories from the Puranas",
    genre: "Mythology",
    publishDate: "2018",
    editionDate: "2019",
  },
  {
    title: "Shiva: The Eternal God of Destruction",
    genre: "Biography",
    publishDate: "2017",
    editionDate: "2018",
  },
  {
    title: "Ganesha: The Remover of Obstacles",
    genre: "Mythology",
    publishDate: "2020",
    editionDate: "2021",
  },
  {
    title: "Devi: The Divine Feminine in Hindu Mythology",
    genre: "Mythology",
    publishDate: "2019",
    editionDate: "2019",
  },
  {
    title: "Vishnu: The Preserver of the Universe",
    genre: "Biography",
    publishDate: "2016",
    editionDate: "2017",
  },
  {
    title: "Hanuman: The Devotee Warrior",
    genre: "Mythology",
    publishDate: "2018",
    editionDate: "2018",
  },
];

let result = data.filter((book) => book.genre === "Mythology"); //Implicit Scope
// console.log(result);

result = data.filter((book) => {
  return book.publishDate > 2015 && book.genre === "Mythology"; //Explicit Scope
});
// console.log(result);

result = data.filter((book) => {
  return book.publishDate > 2020; //Explicit Scope
});
console.log(result);

// <=====####=====>
