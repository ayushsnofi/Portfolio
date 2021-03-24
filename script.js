'use strict';
// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;

// event is something happening on the page on the DOM Structure
// We use eventlistener to listen to events on page

let num = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = num;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when player wins
  if (!guess && score > 0) {
    displayMessage('No Number Entered');
  } else if (guess === num && score > 0) {
    displayMessage('Correct (Like Me😎)');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess != num && score > 0) {
    displayMessage(
      guess > num ? 'Too High(Like You🚬)' : 'Too Low(Like You Grades🤐)'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score === 0) {
    displayMessage('You Lost');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
