'use strict';
let randomNumber = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'please enter the number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'YOU win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'too High';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU loose!';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.highscore').textContent = score;
    }
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'too low';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU loose!';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.highscore').textContent = score;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    randomNumber = Math.round(Math.random() * 20);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
});
