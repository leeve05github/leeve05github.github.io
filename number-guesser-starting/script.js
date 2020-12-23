


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



// generate target number function
const generateTarget = () => Math.round(Math.random() * 9);

// compare two guesses
const compareGuesses = (userGuess, computerGuess, targetNum) => {

  if ( Math.abs(userGuess - targetNum) < Math.abs(computerGuess - targetNum) || Math.abs(userGuess - targetNum) === Math.abs(computerGuess - targetNum) ) {
    return true;
  } else if (Math.abs(userGuess - targetNum) > Math.abs(computerGuess - targetNum) && Math.abs(computerGuess - targetNum) || Math.abs(userGuess - targetNum) !== Math.abs(computerGuess - targetNum) ) {
    return false;
  };
};

// update score
const updateScore = (str) => {

  if ('human') {
    humanScore++;
  } else if ('computer') {
  }
    computerScore++;
  };

  // advance round 

  const advanceRound = () => currentRoundNumber++;