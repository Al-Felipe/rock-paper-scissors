function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3 + 1);
    if(randomNum == 1){
        return "rock";
    } else if (randomNum == 2){
        return "paper";
    } else return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock"
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors Beats Paper";
    }  
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }  else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    } else return "Draw!"
}

const playerSelection = prompt("Type your choice: Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));