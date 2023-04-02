let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;


function game() {
	for(let i = 0; i < 5; i++) {
		playerChoice = prompt("Please choose: rock, paper or scissors?");
		computerChoice = getComputerChoice();
		let result = evaluateMatch(playerChoice, computerChoice);
		if (result.search("won") > -1)	playerScore++;
		else if (result.search("lost") > -1) computerScore++;
		console.log(`${result} The score is ${playerScore}:${computerScore}.`);

	}
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
	else if (playerChoice === "rock") {
		switch (computerChoice) {
			case "scissors":
					return `You won, ${playerChoice} beats ${computerChoice}!`;
				break;
			case "paper":
					return `You lost, ${computerChoice} beats ${playerChoice}!`;
				break;
		}
	}
	else if (playerChoice === "paper") {
		switch (computerChoice) {
			case "rock":
					return `You won, ${playerChoice} beats ${computerChoice}!`;
				break;
			case "scissors":
					return `You lost, ${computerChoice} beats ${playerChoice}!`;
				break;
		}
	}
	else if (playerChoice === "scissors") {
		switch (computerChoice) {
			case "paper":
					return `You won, ${playerChoice} beats ${computerChoice}!`;
				break;
			case "rock":
					return `You lost, ${computerChoice} beats ${playerChoice}!`;
				break;
		}
	}
}
