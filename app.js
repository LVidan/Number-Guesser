/*
  GAME FUNCTION
    - player must guess a number between a min and max
    - player getss a certain ammount of guesses
    - notify player of guesses remaining
    - notify the player of the correct answer if loose
    - let player chooes to play again
*/

// GAME VALUES
let min = 1;
let max = 10;
let winningNum = Math.floor(Math.random() * 10) + 1;
let guessesLeft = 3;

// UI ELEMENTS
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// RULE VALUES
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN
game.addEventListener('mousedown', function (e) {
  if (e.target.className == 'play-again') {
    window.location.reload();
  }
})


// START THE GAME
guessBtn.addEventListener('click', startGame);

function startGame() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    errorMsg(`Please enter a number between ${min} and ${max}`);
  } else {
    // CHEKING FOR WINNING NUMBER
    if (guess === winningNum) {
      winGameChecker(true, `${winningNum} is correct, YOU WON!`);
  
    } else {
      guessesLeft -= 1;
      errorMsg(`${guess} is not correct! Guesses left: ${guessesLeft}!`);
  
      if (guessesLeft === 0) {
        winGameChecker(false, `Game Over, you LOST. The correct number was ${winningNum}`);
      }
  
    }
    
  }

  guessInput.value = '';
};



// VALIDATION MESSAGE
function errorMsg(msg) {
  message.textContent = msg;
  message.style.color = 'red';
};

function winGameChecker(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  message.textContent = msg;
  message.style.color = color;

  // play again
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';

};