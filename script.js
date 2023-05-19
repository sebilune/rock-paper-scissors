// Define the choices of the game.
let rock = "Rock";
let paper = "Paper";
let scis = "Scissors";

// Define the variables that will hold the choices.
let computerChoice;
let playerChoice;

function getComputerChoice() {
    // Get a random num between one and three.
    let rand = Math.floor(Math.random() * 3) + 1;

    // Assign the 3 choices of the game to the computerChoice var depending on the num (1-3).
    if (rand === 1) {
        computerChoice = rock;
    } else if (rand === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scis;
    }
}

// Get the input from the player, takes onse string as a param.
function getPlayerChoice(choice = "" ) {

    // Turn the input into lowercase, so words like "rOcK" or "PAPER" can still be inputted.
    let processedWord = choice.toLowerCase();

    // Assign what the player chose to the playerChoice variable.
    if (processedWord === "rock") {
        playerChoice = rock;
    } else if (processedWord === "paper") {
        playerChoice = paper;
    } else if (processedWord === "scissors") {
        playerChoice = scis;
    }

}

function game() {

    // Declare the common strings (So I don't have to write them over and over).
    let win = `You win! ${playerChoice} beats ${computerChoice}!`;
    let lose = `You lose... ${computerChoice} beats ${playerChoice}.`;
    let tie = `It's a tie! ${computerChoice} against ${playerChoice}!`;

    // If the player wins, console log the win str.
    if (playerChoice === scis && computerChoice === paper) {
        console.log(win);
    } else if (playerChoice === rock && computerChoice === paper) {
        console.log(win);
    } else if (playerChoice === paper && computerChoice === rock) {
        console.log(win);
    } else if (playerChoice === computerChoice) {
        // If it is a tie, console log the tie str.
        console.log(tie);
    } else {
        // If none of the above apply, which can only be a lost from the player, then log the lose str.
        console.log(lose);
    }
}

// Call the functions.
getComputerChoice();
getPlayerChoice("sCisSoRs"); // Player input.
game();

// Debug.
console.log(`\nDebugger...\nComputer Picked: ${computerChoice}\nPlayer Picked: ${playerChoice}`);