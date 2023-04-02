let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

playerChoice = prompt("Please choose: rock, paper or scissors?");

function getComputerChoice() {
	switch(Math.floor(Math.random()*3)) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
	}
}
