let playerScore = 5
let computerScore = 5



/////UI
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const scoreRound = document.getElementById('scoreRound')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerHeart = document.getElementById('playerHearts')
const computerHeart = document.getElementById('computerHearts')



rockBtn.addEventListener('click', () => playRound('ROCK'))
paperBtn.addEventListener('click', () => playRound('PAPER'))
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'))

function gameStart() {
    playerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(playerScore)
    computerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(computerScore)
}


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
            computerSelection = "SCISSORS";
            break;

        default:
            console.log("Something went horribly wrong...");
    }
    console.log("Computer Selected " + computerSelection)

    updateChoices(playerSelection, computerSelection);



    ////// Game Logic

    if (playerSelection === computerSelection) {
        console.log("Its a tie");
        scoreRound.innerHTML = '<h2>ITS A TIE</h2>'
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSOR" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection === "SCISSOR") {
        console.log("The computer wins");
        playerScore--;

        playerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(playerScore)
        console.log("computer score= " + computerScore + " " + "player socre =" + playerScore)
        scoreRound.innerHTML = '<h2>YOU LOSE</h2>'

    } else {
        console.log("You win!");
        computerScore--;
        computerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(computerScore)
        console.log("computer score= " + computerScore + " " + "player socre =" + playerScore)
        scoreRound.innerHTML = '<h2>YOU WIN</h2>'
    }

}

///Score Loser
/* if (computerScore < 1) {
    console.log("computer lost")
} else {
    computerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(computerScore)
}
if (playerScore < 1) {
    console.log("you lost")
} else {
    playerHeart.innerHTML = '<img class="lives" src="assetes/heart.png" alt="heart"/>'.repeat(playerScore)
} */





/////// Update selection
function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            playerSign.innerHTML = '<img src="assetes/Rock.png"/>';
            break
        case 'PAPER':
            playerSign.innerHTML = '<img src="assetes/Paper.png"></img  >'
            break
        case 'SCISSORS':
            playerSign.innerHTML = '<img src="assetes/Scissor.png"></img  >'
            break
    }

    switch (computerSelection) {
        case 'ROCK':
            computerSign.innerHTML = '<img src="assetes/Rock.png"/>';
            break
        case 'PAPER':
            computerSign.innerHTML = '<img src="assetes/Paper.png"></img>'
            break
        case 'SCISSORS':
            computerSign.innerHTML = '<img src="assetes/Scissor.png"></img>'
            break
    }
};
