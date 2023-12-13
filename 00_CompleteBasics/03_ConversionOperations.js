let num = 55;

console.log(typeof num);
console.log(typeof (num));

// <=======#####=======>

let score = "55aa";
console.log(score);

// <=======#####=======>

//convert any datatype into number using Number()
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);     //NaN

// <=======#####=======>

let number = null
console.log(Number(number));    //0

let val = undefined
console.log(Number(val));

// <=======#####=======>

let isTrue = true;
console.log(Number(isTrue));

// <=======#####=======>

// NOTES

// "33" => 33
// "33abc" => NaN  (type : number)
// true => 1
// false => 0


// <=======#####=======>
//convert any datatype into boolean using Boolean()

let isLoggedIn = 1;
// let isLoggedIn = "";    // Boolean(isLoggedIn) => false
// let isLoggedIn = "Hello";   // Boolean(isLoggedIn) => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     // true

// NOTES
// 1 => true
// 0 => false
// "" => false
// "Pranay" => true

// <=======#####=======>
//convert any datatype into string using String()
let someNum = 33
let stringNum = String(someNum)

console.log(stringNum);     // 33
console.log(typeof stringNum);      //string
