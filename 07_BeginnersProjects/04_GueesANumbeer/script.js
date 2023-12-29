//steps to tackle logic
// step 1: take randomNum variable
// step 2: take all constant variable submit, userInput, guessSlot, remaining, lowOrHi, startOver
// step 3: define functions validateGuess, checkGuess, displayGuess, displayMessage, endGame, newGame
// step 4: let playGame = true, let prevGuess = [] and let numGuess = 1
// step 5: addEventListener on submit if playGame = true

//step 1
let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum)

//step 2
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// step 4
let playGame = true;
let prevGuess = [];
let numGuess = 1;

//step 5
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

// step 3 : define all methods or functions
// step 6 : check user input is valid or not (Value in between 1 - 100)
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please give a valid number`);
  } else if (guess < 1) {
    alert("Number should be more than 1");
  } else if (guess > 100) {
    alert(`Number should be less than equal to 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Step 7 : clean input box, update prev guess and remaining guess
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// Step 8 : print message value is low or Hi
function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

// Step 9: check guess is correct, low or high
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`${guess} You guessed it RIGHT`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Your guess is TOO Low`);
  } else {
    displayMessage(`Your guess is TOO High`);
  }
}

// Step 11
let p = document.createElement("p");

// Step 10
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// step 12
function newGame() {
  const newBtn = document.querySelector("#newGame");
  newBtn.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
