// Object Destructuring

const user = {
    name: "Alisa Corner",
    age: 20,
    isLoggedIn: false,
};

// normal way to access
console.log(user.name);     // output: Alisa Corner

//using object destructuring
const { name } = user;
console.log(name);  // output: Alisa Corner

//Another way
const { isLoggedIn: log } = user;
// Call log in place of isLoggedIn
console.log(log);   // output: false



//NOTE => Object Destructuring is very important in ReactJS
 