
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand === 1) {
        console.log("Rock!")
    } else if (rand === 2) {
        console.log("Paper!")
    } else {
        console.log ("Scissors!")
    }
}

getComputerChoice();