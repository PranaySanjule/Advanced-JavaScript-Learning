// 'this' Keywod in JS
// => 'this' keyword refer to as a current context

const user = {
    username: "John",
    price: 900,
    welcomeMessage: function () {
        console.log(`Welcome ${this.username}!`);
        console.log(this);  // shows current context
    }
}


user.welcomeMessage();
user.username = "Jinny";
user.welcomeMessage();

// console.log(this);  // {} empty object  (shows current context)

// 'this' keyword in NodeJS acts as a Empty Object.
// 'this' keyword in Browser Console acts as a Windows Object.


//                  <=======######=======>

// Regular Function

function hello() {
    let username = "John Doe";
    console.log(`Hello, ${this.username}`);
}

// hello();    //output: Hello, undefined

// Regular Function
function Person(name) {
    this.name = name;
}

const john = new Person("John Doe")
// console.log(john.name);     //output: John Doe



//                  <=======######=======>


// Anonyms Function : (Take function in variable)

// const hello = function () {
//     let username = "John Doe";
//     console.log(`Hello, ${this.username}`);
// }

// hello();    //output: Hello, undefined



//                  <=======######=======>


// Understand Arrow Functions

// Basic Arrow Function
// const hello = () => {
//     let username = "John Doe";
//     console.log(`Hello, ${this.username}`);
// }

// hello();    // Hello, undefined

const add = (num1, num2) => {
    return num1 + num2;
}

// console.log(5, 5);   //output: 10


//                  <=======######=======>


// Different way to use arrow function

// Implicit Function (No use of return keyword)
// Explicit Function (Use of return keyword)

// 1 way
const addTwo = (num1, num2) => num1 + num2;     // As function is one linear so no need to return
// console.log(addTwo(5, 5));   //output: 10

// 2 way
const addThree = (num1, num2, num3) => (num1 + num2 + num3);
// console.log(addThree(5, 5, 5));   //output: 15


//Advantage of () paranthesis
const objFunc = () => ({ username: "John Doe" });   // tO use object inside function
// console.log(objFunc());



//                  <=======######=======>


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// 1. Function to execute immediately
// 2. Sometimes Global scope give problem in function scope so to remove global scope variable, declaration or pollution 
//    we use IIFE.

//syntax
// (function definition)(function call)

(function DBstatus() {  // Named IIFE
    console.log(`DB Connected`);
})();       // ';' SEMICOLON is very important to stop function execution else it won't run and will give error


(() => {    //Unnamed IIFE OR Simple IIFE
    console.log(`DB Connected Successfully`);
})();

// pass argument
((name) => {
    console.log(`Hii, ${name}`);
})('Binod')

//(function definition)(function execution)

//function definition
//function random = () => {
//     console.log(`Hii, ${}`);
// }

//function execution
//random("Binod")

