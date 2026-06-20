// 1: Write a function to get a random computer choice

// Assumptions
// - The computer choses randomly
// - Each choice has the same probability (within reason)

"use strict";

function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < (1 / 3)) {
        return "rock";
    } else if (randomNumber < (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log("getComputerChoice()", getComputerChoice());

// 2: Write a function to get the human choice

// Assumptions
// - The user will always enter a valid choice ("rock" || "paper" || "scissors")

function getHumanChoice() {
    return prompt("Make your choice!", "rock");
}

// console.log("getHumanChoice()", getHumanChoice());

// 3: Declare the players score variables
// Edit: Moved to playGame() function

// console.log("humanScore", humanScore);
// console.log("computerScore", computerScore);

// 4: Write a function to play a single round

// Assumptions
// - The winner announcement shall be logged directly within the function, not returned
// - The human choice parameter should be case-insensitive

function playRound(computerChoice, humanChoice) {
    // Deliberate decision to modify the args, as the value is retained and only cleaned up
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    let roundResult = "tie";
    let winnerAnnouncement = `It's a tie! Both chose ${computerChoice}`
    // Deliberate choice to introduce a helper function for better readability
    roundResult = getRoundWinner(computerChoice, humanChoice);
    if (roundResult === "human win") {
        winnerAnnouncement = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (roundResult === "computer win") {
        winnerAnnouncement = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    announceWinner(winnerAnnouncement);
    return roundResult;
}

function getRoundWinner(computerChoice, humanChoice) {
    // Deliberate choice to use slightly different branching than in pseudo code
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            return "human win";
        } else if (humanChoice === "scissors") {
            return "computer win";
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            return "human win";
        } else if (humanChoice === "rock") {
            return "computer win";
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            return "human win";
        } else if (humanChoice === "paper") {
            return "computer win";
        }
    }
    return "tie";
}

// console.log('getRoundWinner("rock", "paper")', getRoundWinner("rock", "paper"));
// console.log('getRoundWinner("rock", "scissors")', getRoundWinner("rock", "scissors"));
// console.log('getRoundWinner("rock", "rock")', getRoundWinner("rock", "rock"));
// console.log('getRoundWinner("scissors", "paper")', getRoundWinner("scissors", "paper"));
// console.log('getRoundWinner("scissors", "rock")', getRoundWinner("scissors", "rock"));
// console.log('getRoundWinner("scissors", "scissors")', getRoundWinner("scissors", "scissors"));
// console.log('getRoundWinner("paper", "scissors")', getRoundWinner("paper", "scissors"));
// console.log('getRoundWinner("paper", "rock")', getRoundWinner("paper", "rock"));
// console.log('getRoundWinner("paper", "paper")', getRoundWinner("paper", "paper"));

// UI (revisiting the project)
// Add an event listener to the buttons that calls the playRound function with the correct playerSelection every time a button is clicked
const buttonClick = e => {
    const target = e.target;
    let result = "error";
    if (target.matches("#rock")) {
        result = playRound(getComputerChoice(), "rock");
    } else if (target.matches("#paper")) {
        result = playRound(getComputerChoice(), "paper");
    } else if (target.matches("#scissors")) {
        result = playRound(getComputerChoice(), "scissors");
    }
    const humanLabel = document.querySelector("#humanlabel");
    if (humanLabel === null) {
        initializeScore();
    }
    refreshScore(result);
    roundCount++;
    if (humanScore >= 5 || computerScore >= 5) {
        announceOverallWinner();
        const reset = document.createElement("button");
        reset.textContent = "New game";
        const score = document.querySelector("#score");
        score.appendChild(reset);
        reset.addEventListener("click", resetGame);
        buttons.forEach(button => button.disabled = true);
    }
};

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", buttonClick);
};

const announceWinner = winnerAnnouncement => {
    const results = document.querySelector("#results");
    const para = document.createElement("p");
    para.textContent = `Round ${roundCount + 1}: ${winnerAnnouncement}`;
    results.appendChild(para);
};

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const refreshScore = roundResult => {
    switch (roundResult) {
        case "human win":
            humanScore++;
            const humanValue = document.querySelector("#humanscore");
            humanValue.textContent = humanScore;
            break;
        case "computer win":
            computerScore++;
            const computerValue = document.querySelector("#computerscore");
            computerValue.textContent = computerScore;
            break;
        case "tie":
            // Do nothing
            break;
        case "error":
            // Redundant to default
            console.log("Error: Round result could not be retrieved");
            break;
        default:
            console.log("Error: Round result could not be retrieved");
            break;
    }
};

const initializeScore = () => {
    const score = document.querySelector("#score");
    const humanLabel = document.createElement("p");
    const computerLabel = document.createElement("p");
    humanLabel.textContent = "Human: ";
    computerLabel.textContent = "Computer: ";
    humanLabel.id = "humanlabel";
    computerLabel.id = "computerLabel";
    const humanValue = document.createElement("span");
    const computerValue = document.createElement("span");
    humanValue.id = "humanscore";
    computerValue.id = "computerscore";
    humanValue.textContent = 0;
    computerValue.textContent = 0;
    humanLabel.appendChild(humanValue);
    computerLabel.appendChild(computerValue);
    score.appendChild(humanLabel);
    score.appendChild(computerLabel);
}

const announceOverallWinner = () => {
    const score = document.querySelector("#score");
    const winnerLabel = document.createElement("p");
    if (humanScore === computerScore) {
        winnerLabel.textContent = "Game over. It's a tie!";
    } else if (humanScore > computerScore) {
        winnerLabel.textContent = "Game over. Human win!";
    } else if (humanScore < computerScore) {
        winnerLabel.textContent = "Game over. Computer win!";
    }
    score.appendChild(winnerLabel);
}

const resetGame = () => {
    const score = document.querySelectorAll("#score > *");
    score.forEach(node => node.remove());
    const results = document.querySelectorAll("#results > *");
    results.forEach(node => node.remove());
    buttons.forEach(button => button.disabled = false);
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
}


// Short Debug Log
// What went wrong, if anything?
// -
// What did I change or learn?
// - 