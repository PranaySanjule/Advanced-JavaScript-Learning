//Note run complete code in Browser Console
// Important methods of DOM

document

// Method 1
document.getElementById('title')   

// Method 2
document.getElementById('title').id

// Method 3
document.getElementById('title').className  

// Method 4
document.getElementById('title').getAttribute   // function

// Method 5
document.getElementById('title').getAttribute() // Error

// Method 6
document.getElementById('title').getAttribute('id')     // output : 'id'

// Method 7
document.getElementById('title').getAttribute('class')     // output : 'class'

// Method 8
document.getElementById('title').setAttribute('class', 'test')

// Method 9
document.getElementsByClassName('heading')  //(Return HTMLCollections)

// <=====####=====>

const title = document.getElementById('title')

title.style.backgroundColor = 'green'

title.style.padding = '15px'

title.style.borderRadius = '15px'


// <=====####=====>

// How to add content
title

title.innerText     // output : 'print text only with applied properties'

title.textContent   // output : 'print complete content without applied properties'

title.innerHTML     // output : 'print content with complete html


// <=====####=====>

// Query Selector (querySelector()) (Return NodeList)
document.querySelector('h2')

document.querySelector('#title')

document.querySelector('.heading')

document.querySelector('input[type="password"]')

document.querySelector('p:first-child')

const myul = document.querySelector('ul')

const changeli = myul.querySelector('li')

changeli.style.backgroundColor = 'green'

changeli.innerText
changeli.innerText = 'five'

// <=====####=====>

// Query Selector All (querySelectorAll())  (Return NodeList)
const liList = document.querySelectorAll('li')

liList

liList.style.color = 'red'  // Error

liList[0].style.color = 'red'

const myHi = document.querySelectorAll('h1')

myHi

myHi.style.color = 'red'

myHi[0].style.color = 'red'

// <=====####=====>
// How to iterate NodeList

const list = document.querySelectorAll("li");

list

list.forEach(function name(li) {
    li.style.backgroundColor = "red";
});


// <=====####=====>
// How to iterate HTML Collections

let x = document.getElementsByClassName('list-item');

// Not Working
// x.forEach(function (li) {
//     li.style.color = 'orange';
// })

// Convert x(NodeList) into array 
const arr = Array.from(x)
arr.forEach(function (li) {
    li.style.color = 'orange';
})