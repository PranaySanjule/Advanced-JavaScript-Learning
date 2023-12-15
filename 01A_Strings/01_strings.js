const name = "Pranay"
const age = 22

// console.log(name + age);

console.log(`Hello, my name is ${name} and my age is ${age}`);

// declare string using new keyword
const myHero = new String("Chatrapati Shivaji Maharaj")
console.log(myHero);
console.log(myHero[2]);

console.log(myHero.__proto__);

//methods in string
// console.log(myHero.toUpperCase());
// console.log(myHero.charAt(2));
// console.log(myHero.indexOf('t'));

const substr = myHero.substring(0, 10);
console.log(substr);

const anotherStr = myHero.slice(-26, 15);
console.log(anotherStr);

const newStringOne = "     Hello World               ";
// console.log(newStringOne.trim());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trimRight());

// console.log(newStringOne.trimLeft());


const url = "https://pranaysanjule.com/pranay%28sanjule";
// console.log(url.replace('%28', '-'));
// console.log(url.includes('pranay'));


const newStr = "Hello-world-whats-up";
console.log(newStr.split('-'));