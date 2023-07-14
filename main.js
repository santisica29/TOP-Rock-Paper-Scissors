// ask the user to select either rock, paper or scissors

// get a random computer choice of rock, paper, scissors
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
// compare the two selections
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a Tie!`);
    return 0;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let userChoice = null;
  for (let i = 0; i < 5; i++) {
    do {
      userChoice = prompt("Select Rock, Paper or Scissors");
    } while (userChoice === null);
    let round = playRound(userChoice, getComputerChoice());
    round === 1 ? playerScore++ : round === -1 ? computerScore++ : "";
  }
  if (playerScore > computerScore) {
    console.log("YOU WIN!");
  } else if (playerScore === computerScore) {
    console.log("IT'S A TIE!");
  } else {
    console.log("YOU LOST!");
  }

  console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
}
game();
// if the user wins indicate it
// if the user lose indicate it
