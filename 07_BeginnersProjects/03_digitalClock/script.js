const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


// setInterval() method to run code at every time interval
// setInterval(callback, value)    // two parameter => callback and value in millisec

setInterval(function () {
    const date = new Date();
    // console.log(date);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);