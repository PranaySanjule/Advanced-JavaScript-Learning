const randomNumber = parseInt(Math.random()*100 + 1);
// or
// console.log((Math.random()*100 + 1).toFixed(0)); // another way

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

c
