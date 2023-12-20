class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`User ${this.username} is logging in.`);
    }

    static createId() {
        return `123`;
    }
}

const user1 = new User('user1');
console.log(user1.logMe());

// console.log(user1.createId())     // createId is not accessible to all instances

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const user2 = new Teacher('user2', 'user2@t.com');
user2.logMe()

// console.log(user2.createId());   // createId is not accessible 