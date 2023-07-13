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

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${i}: ${result}`);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lose the game.");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }

  game();


