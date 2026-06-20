// Write a function to get a random computer choice
// Assumptions
// - The computer chooses randomly
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

// Write a function to play a single round
// Assumptions
// - The winner announcement shall be returned (not logged directly within the function)
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

// UI - revisiting the project
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
    const humanLabel = document.querySelector("#human-label");
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
            const humanValue = document.querySelector("#human-score");
            humanValue.textContent = humanScore;
            break;
        case "computer win":
            computerScore++;
            const computerValue = document.querySelector("#computer-score");
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
    humanLabel.id = "human-label";
    computerLabel.id = "computer-label";
    const humanValue = document.createElement("span");
    const computerValue = document.createElement("span");
    humanValue.id = "human-score";
    computerValue.id = "computer-score";
    humanValue.textContent = 0;
    computerValue.textContent = 0;
    humanLabel.appendChild(humanValue);
    computerLabel.appendChild(computerValue);
    score.appendChild(humanLabel);
    score.appendChild(computerLabel);
};

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
};

const resetGame = () => {
    const score = document.querySelectorAll("#score > *");
    score.forEach(node => node.remove());
    const results = document.querySelectorAll("#results > *");
    results.forEach(node => node.remove());
    buttons.forEach(button => button.disabled = false);
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
};


// Short Debug Log
// What went wrong, if anything?
// -
// What did I change or learn?
// - 