console.log("Hello World");


let myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay () {
    let computerSelection = Math.floor(Math.random() * myArray.length);
    return (computerSelection, myArray[computerSelection]);
}


function playRound (playerSelection, computerSelection) {
    console.log ("You: " + playerSelection)
    console.log("Computer: " + computerSelection);

    if (computerSelection === "Rock") {
        switch (playerSelection) {
        case "Rock":
            console.log("Draw");
            break;
        case "Scissors":
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
            return(computerScore++);
            break;
        case "Paper":
            console.log("You win! " + playerSelection + " beats " +computerSelection);
            return(playerScore++);
            break;
        default: 
            console.log("Wrong entry")
        }
    }
     else if (computerSelection === "Paper") {
        switch (playerSelection) {
            case "Paper": 
                console.log("Draw");
                break;
            case "Rock":
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
                return(computerScore++);
                break;
            case "Scissors":
                console.log("You win! " + playerSelection + " beats " +computerSelection);
                return(playerScore++);
                break;
            default:
                console.log("Wrong entry")
        }
    }
     else if (computerSelection === "Scissors") {
        switch (playerSelection) {
            case "Scissors":
                console.log("Draw");
                break;
            case "Paper":
                console.log("You lose! " + computerSelection + " beats " + playerSelection);
                return(computerScore++);
                break;
            case "Rock": 
                console.log("You win! " + playerSelection + " beats " +computerSelection);
                return(playerScore++);
                break;
            default:
                console.log("Wrong entry")
        }
    }
}

function game () {
    console.log("Game of 5 rounds");
    for (let i = 0; i < 5; i++) {
        let round = i+1;
        console.log("Round " + round);
        let playerSelection = prompt ("Rock, Paper or Scissors?");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        let computerSelection = computerPlay();
        playRound (playerSelection, computerSelection);
    }
    console.log("Final score is: You: " + playerScore + " Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log ("Congratulations! You are the winner!!");
    } else if (playerScore < computerScore) {
        console.log ("Sorry, you lose!");
    } else {
        console.log("It's a draw");
    }
}

let playerScore = 0;
let computerScore = 0;

game();