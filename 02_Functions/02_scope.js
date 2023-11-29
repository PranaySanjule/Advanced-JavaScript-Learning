
// Global scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // output: 10
// console.log(b); // output: 20
// console.log(c); // output: 30

//                  <=======######=======>


//Block scope

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // output: error a is not defined
// console.log(b); // output: error b is not defined
// console.log(c); // output: 30

//                  <=======######=======>


// Nested function scope
function one() {
    const username = "John";

    function two() {
        const website = "Youtube";
        console.log(username);  //output: John (variable declare outside function which is inside function)
    }
    // console.log(website);   //output: Error
    two();
}

one();

//                  <=======######=======>


//Nested if_else example
if (true) {
    const username = "MS Dhoni";

    if (username === "MS Dhoni") {
        const website = "Youtube";
        console.log(username + website); // output: MS Dhoni Youtube
    }

    // console.log(website);    // output: error
}

// console.log(username);   // output: error


//                  <=======######=======>


//Hoisting Basic

// Case 1 : Hosting Working
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// Case 2 : Hoisting Not Working
console.log(addTwo(5));

// Output: Error
// const ans = addTwo(num){
//     return num + 1;
// }