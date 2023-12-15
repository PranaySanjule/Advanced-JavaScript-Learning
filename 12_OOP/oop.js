const user = {
  username: "Pranay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    // console.log(`Username: ${username}`);    // won't work
    console.log(`Username: ${this.username}`);
    // return "hello";

    // 'this' keyword => It is use to access element of their current context
    // example
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// Globally 'this' keyword current context is {} object
//example
// console.log(this);

// 'this' keyword current context in brower is window object

function User(name, loginCount, isLoggedIn) {
  this.name = name;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.getUserDetails = function () {
    console.log("Got user details from database");
    // console.log(`Username: ${username}`);    // won't work
    console.log(`Username: ${this.username}`);
    // return "hello";

    // 'this' keyword => It is use to access element of their current context
    // example
    console.log(this);
  };

  return this;
}

const User1 = User("Hitesh", 8, true);
const User2 = User("Chai aur code", 10, false);

// console.log(User1); // without new keyword parameter of User2 overwrite User1 parameter so output is Chai..
// console.log(User2);

const User3 = new User("Hitesh", 8, true);
const User4 = new User("Chai aur code", 10, false);

console.log(User3); // not overwrite
console.log(User4); 

console.log(User3.constructor); // Constructor is a reference of Object 


// 'new' keyword:
// => 1. {} empty object get create which is known as instance
// => 2. Parameters pass
// => 3. Constructor function call by 'new' keyword
// => 4. All arguments get inject in new keyword
// => 5. complete object get in new variable


// Explore instanceof