
const rockCard = document.querySelector(".rock");
const paperCard = document.querySelector(".paper");
const scissorsCard = document.querySelector(".scissors");

const playerSpan = document.querySelector(".player-score");
const computerSpan = document.querySelector(".computer-score");
const results = document.querySelector(".results-text");

let computerChoice;

function getComputerChoice() {
  const choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
  };

  let rand = Math.floor(Math.random() * 3) + 1;
  computerChoice = choices[rand];
}

rockCard.addEventListener("click", () => game("rock"));
paperCard.addEventListener("click", () => game("paper"));
scissorsCard.addEventListener("click", () => game("scissors"));

function checkScores() {
  if (playerSpan.textContent === "5") {
    results.textContent = "YOU WON AGAINST COMPUTER! 🎉";
    playerSpan.textContent = "0";
    computerSpan.textContent = "0";
  } else if (computerSpan.textContent === "5") {
    results.textContent = "YOU LOST AGAINST COMPUTER. 😔";
    playerSpan.textContent = "0";
    computerSpan.textContent = "0";
  }
}

function game(choice) {
  getComputerChoice();

  let playerNum = parseInt(playerSpan.textContent);
  let computerNum = parseInt(computerSpan.textContent);

  const outcomes = {
    rock: {
      rock: "It's a tie! rock against rock! 😨",
      paper: "You lose. paper beats rock. ❌",
      scissors: "You win! rock beats scissors! ✅",
    },
    paper: {
      rock: "You win! paper beats rock! ✅",
      paper: "It's a tie! paper against paper! 😨",
      scissors: "You lose. scissors beats paper. ❌",
    },
    scissors: {
      rock: "You lose. rock beats scissors. ❌",
      paper: "You win! scissors beats paper! ✅",
      scissors: "It's a tie! scissors against scissors! 😨",
    },
  };

  const outcome = outcomes[choice][computerChoice];
  
  if (choice === computerChoice) {
    results.textContent = outcome;
    console.log("tie");
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[choice] === computerChoice) {
    playerSpan.textContent = playerNum + 1;
    results.textContent = outcome;
    console.log("win");
  } else {
    computerSpan.textContent = computerNum + 1;
    results.textContent = outcome;
    console.log("lose");
  }

  checkScores();
}