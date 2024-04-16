// Function Basics in JavaScript

function sayMyName() {
  console.log("John Doe");
}

console.log(sayMyName); // This is just a Reference of a function
// console.log(sayMyName());
sayMyName(); // calling function

//                  <=======######=======>

// functions with parameters
function addNumbers(num1, num2) {
  // NOTE => Before using parameters always remember to check parameter datatype

  console.log(num1 + num2); // without returning

  // let result = num1 + num2;
  // return result;      // return result
  // OR

  return num1 + num2; // Direct return
}

const result = addNumbers(5, 5); // output: 10

// console.log("Result: ", result);    // output: Result: undefined (without returning)

// why undefined in above console
// => Ouptut is 'undefined' because we are not returning the output,
//     we just printing the output'

// Solution for 'undefined'
// We need to use return statement before printing the value

console.log(result); // output: 10

//                  <=======######=======>

function greetings(username) {
  return `Hello ${username}, Nice to meet you`;
}

greetings(); //output:     <= Blank because func returning something and we are just calling function not printing

console.log(greetings()); //output: Hello undefined, Nice to meet you
// output is 'undefined' because we are passing empty argument in the function

console.log(greetings("Jack")); // output: Hello Jack, Nice to meet you

//                  <=======######=======>

function greetings2(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `Hello ${username}, Nice to meet you`;
}

greetings2(); //output: Please enter a username
console.log(greetings2());
// Expected output: Please enter a username
//                  undefined <= why undefined because we are passing nothing, so there is nothing to print or returning undefined

console.log(greetings2("Conway")); // output: Hello Conway, Nice to meet you

// Print Default Value
function greet(username = "User") {
  return `Hello ${username}, Nice to meet you`;
}

console.log(greet());
console.log(greet("Steve")); //output: Hello Steve, Nice to meet you <= overwrite the value

//                  <=======######=======>

// Rest Operator (...parameter)
// Que : How to pass multiple arguments in function with only 1 parameter
// OR
// Convert multiple arguments passed as a 1 parameter into array

function calculateTotalCartPrice(val1, val2, ...num) {
  // ...parameter <= rest operator
  return num;
}

// console.log(calculateTotalCartPrice(100, 200, 300, 400));  // output: 100 (without rest operator) calculateTotalCartPrice(num) return num
// console.log(calculateTotalCartPrice(100, 200, 300, 400));  // output: [ 100, 200, 300, 400 ]  calculateTotalCartPrice(...num) return num
console.log(calculateTotalCartPrice(100, 200, 300, 400)); // output: [300, 400] (with val1, val2)   calculateTotalCartPrice(val1, val2, ...num) return num
// val1 = 100, val2 = 200, ...num = [300, 400]



//                  <=======######=======>


// Pass Object as a parameter

const user = {
  username: "MS Dhoni",
  age: "42",
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);

//pass object directly
handleObject({
  username: "John Doe",
  age: "25",
});



//                  <=======######=======>



// Pass Array as a parameter

const arr = [100, 200, 300, 400];

function returnSecondVaue(getArray){
  return getArray[1];
}

console.log(returnSecondVaue(arr)); // output: 200
console.log(returnSecondVaue([400, 500, 600, 700]));  // output: 500


//                  <=======######=======>
