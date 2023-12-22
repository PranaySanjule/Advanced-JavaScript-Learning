class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value
    }
    get password() {
        return `${this._password}.hello`;
    }
    set password(value) {
        this._password = value.toUpperCase();
    }
}

const chai = new User("chai@chaiurcode.com", "chai@123")
console.log(chai.password);
console.log(chai.email);