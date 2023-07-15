
const results = document.querySelector(".round-result");
const winnerOfRound = document.querySelector(".winner");
const gameScore = document.querySelector(".gamescore");
let computerScore = 0;
let playerScore = 0;


const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // the attribute is saves one of 'rock', 'paper' and 'scissors'
    playerSelection = e.target.getAttribute("data-playerSelection");
    let round = playRound(playerSelection);
    // the game function checks who won and adds it to the score
    game(round);
  });
});
// get a random computer choice of rock, paper, scissors
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
// compare the two selections
function playRound(playerSelection) {
  computerSelection = getComputerChoice().toLowerCase();
  results.innerText = `${playerSelection.toUpperCase()} vs. ${computerSelection.toUpperCase()}`;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winnerOfRound.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection === computerSelection) {
    winnerOfRound.innerText = `It's a Tie!`;
    return 0;
  } else {
    winnerOfRound.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return -1;
  }
}

function game(round) {
  round === 1 ? playerScore++ : round === -1 ? computerScore++ : "";

  if (playerScore === 5 || computerScore === 5) {
    createResetBtn();
    playerScore === 5
      ? (results.innerText = "YOU WIN!")
      : (results.innerText = "YOU LOSE!");
  }

  gameScore.innerText = `Player score: ${playerScore}\nComputer score: ${computerScore}`;
}
function createResetBtn() {
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "New Game";
  resetBtn.id = "reset";
  document.querySelector(".results-container").appendChild(resetBtn);
  resetBtn.addEventListener("click", resetScore);
}
function resetScore() {
  computerScore = 0;
  playerScore = 0;
  results.innerText = "First to get to 5 points win!";
  winnerOfRound.innerText = "";
  gameScore.innerText = `Player score: ${playerScore}\nComputer score: ${computerScore}`;

  let btnToDelete = document.getElementById("reset");
  document.querySelector(".results-container").removeChild(btnToDelete);
}

// if the user wins indicate it
// if the user lose indicate it
