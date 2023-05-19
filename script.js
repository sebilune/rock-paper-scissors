let rock = "Rock";
let paper = "Paper";
let scis = "Scissors";

let computerChoice;
let playerChoice;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand === 1) {
        computerChoice = rock;
    } else if (rand === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scis;
    }
}


function getPlayerChoice(choice = "") {

    let processedWord = choice.toLowerCase();

    if (processedWord === "rock") {
        playerChoice = rock;
    } else if (processedWord === "paper") {
        playerChoice = paper;
    } else if (processedWord === "scissors") {
        playerChoice = scis;
    }

}

function game() {

    let win = `You win! ${playerChoice} beats ${computerChoice}!`;
    let lose = `You lose... ${computerChoice} beats ${playerChoice}.`;
    let tie = `It's a tie! ${computerChoice} against ${playerChoice}!`;

    if (playerChoice === scis && computerChoice === paper) {
        console.log(win);
    } else if (playerChoice === rock && computerChoice === paper) {
        console.log(win);
    } else if (playerChoice === paper && computerChoice === rock) {
        console.log(win);
    } else if (playerChoice === computerChoice) {
        console.log(tie);
    } else {
        console.log(lose);
    }
}

getComputerChoice();
getPlayerChoice("scissors");
game();

console.log(`\nDebugger...\nComputer Picked: ${computerChoice}\nPlayer Picked: ${playerChoice}`);