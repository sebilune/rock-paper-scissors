const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand === 1) {
        return rock;
    } else if (rand === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function playerSelection(rps) {

    getComputerChoice();

    let choice = rps.toLowerCase();

    if (choice == "rock") {
        console.log("works")
    }

}

playerSelection("rock");