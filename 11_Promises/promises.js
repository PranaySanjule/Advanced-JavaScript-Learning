// Promise with variable
const promiseOne = new Promise(function (resolve, rejection) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async promise run successfully');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promised Consumed");
})


// Promise without variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async promise 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({username: "Chai", emails: "chai@example.com"})
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

// How to use reject
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({username: "hitesh", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

// Use of async await
const promiseFive = new Promise(function (resolve, reject) {
        setTimeout(function () {
          let error = false;
          if (!error) {
            resolve({ username: "hitesh", password: "1234" });
          } else {
            reject("ERROR: Something went wrong");
          }
        }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// example to fetch data
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        const data = await response.json();   // response is in STRING so convert it in JSON
        console.log(data.email);   
    } catch (error) {
        // console.log("Err: ", error);
        console.log(`Err: ${error}`);
    }
}

getAllUsers()

            // OR

//Above same method fetch data but using .then .catch 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);    
// })
// .catch((error) => console.log(error))


//Note:
// Why response in output coming first and then print console.log statement (checkout output)
// Above question ans in next video 