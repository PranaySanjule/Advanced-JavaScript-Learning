// Dates

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.getTime());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 1, 28)
// let myCreatedDate = new Date(2023, 1, 28, 7, 28)
let myCreatedDate = new Date("06-28-2023")
// console.log(myCreatedDate.toLocaleString());

// Timestamp
let timestamp = Date.now()
// console.log(timestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   //millisec to sec


let newDate = new Date();
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getTime());

// console.log(`Day of the current week: ${newDate.getDay()}`);

const dt = newDate.toLocaleString('default', {
    weekday: "short",
})

console.log(dt);