// old method to get and set
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase()
    },
    set: function (value) {
      this._email = value;
    },
  });
    
  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase()
    },
    set: function (value) {
      this._password = value;
    },
  });
}

//constructor method
const chai = new User("chai@chaiaurcode.com", "hello");
console.log(chai.email);
console.log(chai.password);
