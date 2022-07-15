'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higthscor = 0;
const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //when your number is negative or ZERO
  if (guess <= 0) {
    displayMassage(' 🛑 Your Number is not betwiween 1 and 20');
    //when player win!!!
  } else if (guess === secretNumber) {
    displayMassage('Correct Number!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > higthscor) {
      higthscor = score;
      document.querySelector('.highscore').textContent = higthscor;
    }

    //When the number WRONG!!!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? ' Too high' : ' Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage(' You lost the game!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMassage('Start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});
