/* 
█▀▄ ▄▀▄ ▄▀▀ █▄▀    █▀▄ ▄▀▄ █▀▄ ██▀ █▀▄    ▄▀▀ ▄▀▀ █ ▄▀▀ ▄▀▀ ▄▀▄ █▀▄ ▄▀▀ 
█▀▄ ▀▄▀ ▀▄▄ █ █    █▀  █▀█ █▀  █▄▄ █▀▄    ▄█▀ ▀▄▄ █ ▄█▀ ▄█▀ ▀▄▀ █▀▄ ▄█▀ 
*/

// Define the variables that will hold the choices.
let computerChoice;
let playerChoice;

function getComputerChoice() {
  const choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
  };

  let rand = Math.floor(Math.random() * 3) + 1;
  computerChoice = choices[rand];
}

// Get the input from the player, takes onse string as a param.
function getPlayerChoice(choice = "") {
  const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
  };

  let processedWord = choice.toLowerCase();
  playerChoice = choices[processedWord] || null;
}


const outcomes = {
  rock: {
    rock: "It's a tie! rock against rock!",
    paper: "You lose... paper beats rock.",
    scissors: "You win! rock beats scissors!",
  },
  paper: {
    rock: "You win! paper beats rock!",
    paper: "It's a tie! paper against paper!",
    scissors: "You lose... scissors beats paper.",
  },
  scissors: {
    rock: "You lose... rock beats scissors.",
    paper: "You win! scissors beats paper!",
    scissors: "It's a tie! scissors against scissors!",
  },
};

function game(player, computer) {
  const outcome = outcomes[player][computer];
  console.log(outcome);
}

// Call the functions.
getComputerChoice();
getPlayerChoice("sCisSoRs"); // Player input.
game(playerChoice, computerChoice);
