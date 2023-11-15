// This code gets the score from the local storage or if there isn't one it creates it
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  draws: 0
}
document.querySelector('.js-scores')
  .innerText = `Wins: ${score.wins}, Draws: ${score.draws}, Losses: ${score.losses}`;

// This code creates the function needed to play the game
function playGame(playerMove) {
  // This code creates the variables needed to play the game
  let computerMove = '';
  let result = '';
  const randomNumber = Math.random();

  // This code picks the computer move
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  // This code calculates the results
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Draw!';
    } else if (computerMove === 'paper') {
      result = 'Computer won!';
    } else if (computerMove === 'scissors') {
      result = 'You won!';
    };
  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Draw!';
    } else if (computerMove === 'scissors') {
      result = 'Computer won!';
    } else if (computerMove === 'rock') {
      result = 'You won!';
    };
  } else if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      result = 'You won!';
    } else if (computerMove === 'scissors') {
      result = 'Draw!';
    } else if (computerMove === 'rock') {
      result = 'Computer won!';
    };
  };
  
  // This code calculates the scores
  if (result === 'You won!') {
    score.wins += 1;
  } else if (result === 'Computer won!') {
    score.losses += 1;
  } else if (result === 'Draw!') {
    score.draws += 1;
  };
  
  // This code saves the score to the local storage
  localStorage.setItem('score', JSON.stringify(score));
  
  document.querySelector('.js-result')
    .innerText = result;
  document.querySelector('.js-moves')
    .innerHTML = 
    `You
    <img src="images/${playerMove}-emoji.png" class="image">
    <img src="images/${computerMove}-emoji.png" class="image">
    Computer`;

  document.querySelector('.js-scores')
    .innerText = `Wins: ${score.wins}, Draws: ${score.draws}, Losses: ${score.losses}`;
}

function resetScores() {
  score.wins = 0;
  score.draws = 0;
  score.losses = 0;

  document.querySelector('.js-result')
    .innerText = 'Reset Scores!';
  document.querySelector('.js-moves')
    .innerText = ''; 
  document.querySelector('.js-scores')
    .innerText = `Wins: ${score.wins}, Draws: ${score.draws}, Losses: ${score.losses}`;
  
  localStorage.removeItem('score')
}
