// Stack (Primitive), Heap (Non-Primitive)

// Whenever stack memory is used you will get a copy of it.
// Whenever heap memory is used you will get a reference of original value, so you do changes in reference actual
// original value get change.

// Stack Memory
// Create copy of variable
let myYTChannel = "InEase";

let anotherChannel = myYTChannel;

anotherChannel = "CHAIAURCODE"

console.log(myYTChannel);
console.log(anotherChannel);


// Heap Memory Example
// Original value get change.
let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

let userTwo = userOne;

userTwo.email = "chaiaurcode@yt.com";

console.log(userOne.email);
console.log(userTwo.email);