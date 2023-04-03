let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;


function game() {
	playerScore = 0;
	computerScore = 0;
	for(let i = 0; i < 5; i++) {
		playerChoice = prompt("Please choose: rock, paper or scissors?").toLowerCase();
		computerChoice = getComputerChoice();
		let result = evaluateMatch(playerChoice, computerChoice);
		console.log(`${result} The score is ${playerScore}:${computerScore}.`);
	}
	if (playerScore === computerScore) "Tie! Close one!";
	else if (playerScore > computerScore) "You won! Good game!";
	else "You lost! Better luck next time!";
}

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

function evaluateMatch (playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return `Tie! Both you and the computer chose ${playerChoice}!`;
	}
	else if (playerChoice === "rock" && computerChoice === "scissors"|| 
						playerChoice === "paper" && computerChoice === "rock" ||
						playerChoice === "scissors" && computerChoice === "paper") {
		playerScore++;
		return `You won, ${playerChoice} beats ${computerChoice}!`;
	}
	else {
		computerScore++;
		return `You lost, ${computerChoice} beats ${playerChoice}!`;
	}
}
