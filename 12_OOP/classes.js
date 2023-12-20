// ES6

class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    chageUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('chai', 'chai@gmail.com', 'helloChai')
console.log(user1.encryptPassword());
console.log(user1.chageUsername());

