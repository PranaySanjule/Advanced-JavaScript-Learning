// for loop

// syntax :
// for (var index = 0; index < arr.length; index++){
//     condition
// }

//Example 1
for (let index = 0; index <= 5; index++) {
    // console.log(index);
}

//Example 2
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// Note : Always remember in array indexing start from 0 only i.e i=0 till i<arr.length
for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
    
}

//Example 3
// nested for loop
for (let i = 1; i <= 5; i++) {
    // console.log(`Outer Loop Element i ${i}`);
    for (let j = 5; j > 0; j--){
        // Note : Here i is accessible inside inner loop because of block scope
        // console.log(`Inner Loop Element j value ${j} and Inner Loop Element i value ${i}`);
    }
}


// Example 4
// Character Array
let names = ["Sita", "Ram", "Lakshman", "Hanuman"];
console.log(names.length);
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}


// Keyword => 'break' & 'continue'
// break => To break the loop
console.log(`Break Example`);
for (let i = 1; i <= 10; i++){
    if (i == 6) {
        break;
    }
    console.log(i);
}

console.log(`Continue Example`);
// continue => To skip current iteration
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {   //if number is divisble by 2 then skip that iteration
        continue;   
    }
    console.log(j);
}