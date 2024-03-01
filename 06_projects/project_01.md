# Projects on Javascript

## Solution for Project 01
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
buttons.forEach(function(button) {
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```
## Solution for Project 02
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if( height == '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
  }else if( weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }
})
```
## Solution for Project 03
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
``` 
## Solution for Project 04
```javascript
const min = 1
const max = 100
let randNum = (Math.round(Math.random() * (max - min + 1)) + min)
// console.log(randNum)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame == true){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid Number')
  }else if(guess < 1){
    alert('Please enter a number more than 1')
  }else if(guess > 100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push
    if(numGuess == 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number is ${randNum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randNum){
    displayMessage(`You guessed the number right!!!`)
    endGame()
  }else if(guess < randNum){
    displayMessage(`Number is TOOO low`)
  }else{
    displayMessage(`Number is TOOO High`)
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randNum = (Math.round(Math.random() * (max - min + 1)) + min);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}
```
