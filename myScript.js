console.log("Hello World");


let myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay () {
    let computerSelection = Math.floor(Math.random() * myArray.length);
    return (computerSelection, myArray[computerSelection]);
}


function playRound (playerSelection, computerSelection) {
    console.log ("You: " + playerSelection)
    console.log("Computer: " + computerSelection);

    if (playerSelection === "rock" && computerSelection === "Rock") {
        console.log("Draw");
        } else if (playerSelection === "rock" && computerSelection === "Paper") {
            console.log("You lose! " + computerSelection + " beats " + playerEnter);
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            console.log("You win! " + playerEnter + " beats " +computerSelection);  
    }
     else if (playerSelection === "paper" && computerSelection === "Paper") {
        console.log("Draw");
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            console.log("You lose! " + computerSelection + " beats " + playerEnter);
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            console.log("You win! " + playerEnter + " beats " +computerSelection);
    }
     else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        console.log("Draw");
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            console.log("You lose! " + computerSelection + " beats " + playerEnter);
        } else if (playerSelection === "scissors" && computerSelection === "Paper") { 
            console.log("You win! " + playerEnter + " beats " +computerSelection);
    }
}


let playerEnter = prompt ("Rock, Paper or Scissors?");
playerSelection = playerEnter.toLowerCase();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerPlay());

console.log(playRound(playerSelection, computerSelection));

