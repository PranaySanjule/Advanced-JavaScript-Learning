const score = 400
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(1));

const otherNum = 123.8966
// console.log(otherNum.toPrecision(3));   // output : 124 
// console.log(otherNum.toPrecision(4));   // output : 123.9
// console.log(otherNum.toPrecision(2));   // output : 1.2e+2

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.min(4,3,2,6));
console.log(Math.max(4,3,2,6));

console.log(Math.random());
console.log(Math.random() * 100);
console.log((Math.random() * 100).toFixed(0));

//calculate values between 1 to 6 for DICE
const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(min-max+10))+min);