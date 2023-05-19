const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand === 1) {
        console.log(`${rock}!`)
    } else if (rand === 2) {
        console.log(`${paper}!`)
    } else {
        console.log (`${scissors}!`)
    }
}

getComputerChoice();

