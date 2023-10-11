'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '🚫 Please enter a number.';
    displayMessage('🚫 Please enter a number');
  } else if (guess === secretNumber) {
    displayMessage('Hurray, you have won! 😊😍');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log('went inside highscore block');
    }
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 👇');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game 😒');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
