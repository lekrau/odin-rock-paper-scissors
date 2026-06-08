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
    console.log(winnerAnnouncement);
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

// 5: Write a function to play the entire game (5 rounds)

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}, get ready!`);
        const roundResult = playRound(getComputerChoice(), getHumanChoice());
        if (roundResult === "human win") {
            humanScore++;
        } else if (roundResult === "computer win"){
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("Congrats, you won!");
    } else if (humanScore < computerScore) {
        console.log("You lost. Try again!");
    } else {
        console.log("It's a tie. Play again!");
    }
    console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

// Short Debug Log
// What went wrong, if anything?
// - Only really small details like confusing ´ with `
// What did I change or learn?
// - Seems like the extra work into problem solving payed of, as this project went really smooth within ca. 90 min
// - Helper functions also can be created by finished code to improve readability
// - Comments must stay in sync with the code—otherwise, they become more of a liability than no comments at all
// - Use const vor variables who are assigned only once