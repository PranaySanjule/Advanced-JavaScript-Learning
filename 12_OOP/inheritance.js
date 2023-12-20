class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username);    // same as call() method
        this.email = email;
        this.password = password;
    }

    addCourese() {
        console.log(`New Course was added by ${this.username}`);
    }
}

const user = new Teacher('chai', 'chai@gmail.com', 'helloChai')
// console.log(user);
user.addCourese();
user.logMe();