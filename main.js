function playRound(playerSelection) {

    //// Computer Desicion
    function computerPlay(max) {
        return Math.floor(Math.random() * max);
    }
    const play = computerPlay(3);
    switch (play) {
        case 0:
            computerSelection = "ROCK";
            break;
        case 1:
            computerSelection = "PAPER"
            break;
        case 2:
            computerSelection = "SCISSOR";
            break;
        default:
            console.log("Something went horribly wrong...");
    }
    console.log("Computer Selected " + computerSelection)

    ////// Game Logic

    if (playerSelection === computerSelection) {
        console.log("Its a tie")
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSOR" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection === "SCISSOR") {
        console.log("The computer wins")
    } else {
        console.log("You win!")
    }

}

function game() {
    let i = 0;
    while (i < 5) {
        let playerSelection = prompt();
        playRound(playerSelection.toUpperCase());
        i++;

    }

}

game();
