function SetUsername(username) {
    this.username = username;
    console.log('called');
}

function createUser(username, email, password) {
    // SetUsername(username)   // not work
    // SetUsername.call(username)  // not work
    
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const user = new createUser("chai", "chai@fb.com", "123");
console.log(user);