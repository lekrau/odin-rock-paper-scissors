// Problem 1: Write the logic to get the computer choice

// Problem Description in My Own Words
// Write a function that randomly returns “rock”, “paper” or “scissors”.

// Input: -
// Output: choice of the computer (string)

// Assumptions
// - The computer choses randomly
// - Each choice has the same probability (within reason)

// Test Cases (2 - 4)
// Normal case:
// getComputerChoice() -> "rock" || "paper" || "scissors"

// Rough Plan / Subproblems
// - Generate a random number
// - If it is low, return rock
// - If it is medium, return paper
// - If it is high, return scissors
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Create a variable called randomNumber of type number that starts with the a random value between 0 and 1.
// If randomNumber is < 1/3
    // return rock
// Else if randomNumber is < 2/3
    // return paper
// Else
    // return scissors

// Implementation
"use strict";

function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < (1 / 3)) {
        return "rock";
    } else if (randomNumber < (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log("getComputerChoice()", getComputerChoice());

// Problem 2: Write the logic to get the human choice

// Problem Description in My Own Words
// Write a function that takes the user choice and returns it.

// Input: user input (string)
// Output: users choice (string)

// Assumptions
// - The user will always enter a valid choice ("rock" || "paper" || "scissors")

// Test Cases (2 - 4)
// Normal case:
// getHumanChoice() -> "rock" || "paper" || "scissors"

// Rough Plan / Subproblems
// - Prompt the user for his choice
// - Return the users choice
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Prompt the user for his choice
// Immediately return it

// Implementation
function getHumanChoice() {
    return prompt("Make your choice!", "rock");
}

// console.log("getHumanChoice()", getHumanChoice());

// Problem 3: Declare the players score variables
// Problem is trivial, description in my own words etc. adds no value

// Edit: Moved to playGame() function

// console.log("humanScore", humanScore);
// console.log("computerScore", computerScore);

// Problem 4: Write the logic to play a single round

// Problem Description in My Own Words
// Write a function that takes the human and computer player choices as arguments, plays a single round,
// increments the round winner’s score and logs a winner announcement.

// Input: computer choice, human choice (strings)
// Output: -

// Assumptions
// - The winner announcement shall be logged directly within the function, not returned
// - The human choice parameter should be case-insensitive

// Test Cases (2 - 4)
// Normal case:
// playRound("rock", "paper") -> undefined
// playRound(getComputerChoice, getHumanChoice) -> undefined

// Rough Plan / Subproblems
// - Determine the winner based on the game rules and the player choices
// - Update the score
// - Log a winner announcement
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Convert the input args to lower case
// Create a variable called roundResult of type string that starts with the value "tie".
// Create a variable called winnerAnnouncement of type string that starts with the value "It's a tie!".
// If arg computerChoice is "rock" and arg humanChoice is "paper"
    // Set roundResult to "human win"
    // Else if arg computerChoice is "rock" and arg humanChoice is "scissors"
        // Set roundResult to "computer win"
        // Else if arg computerChoice is "paper" and arg humanChoice is "rock"
            // Set roundResult to "computer win"
            // Else if arg computerChoice is "paper" and arg humanChoice is "scissors"
                // Set roundResult to "human win"
// If roundResult is "human win"
    // Increment humanScore
    // Set winnerAnnouncement to "You win! {humanChoice} beats {computerChoice}"
    // Else if roundResult is "computerWin"
        // Increment computerScore
        // Set winnerAnnouncement to "You lose! {computerChoice} beats {humanChoice}"
// Log the winnerAnnouncement

// Implementation
function playRound(computerChoice, humanChoice) {
    // Deliberate decision to modify the args, as the value is retained and only cleaned up
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    let roundResult = "tie";
    let winnerAnnouncement = `It's a tie! Both chose ${computerChoice}`
    // Deliberate choice to introduce a helper function for better readability
    roundResult = getRoundWinner(computerChoice, humanChoice);
    if (roundResult === "human win") {
        // humanScore++;
        winnerAnnouncement = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (roundResult === "computer win") {
        // computerScore++;
        winnerAnnouncement = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    console.log(winnerAnnouncement);
    // Edit: New "feature" for the last step of this assignment
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

// Problem 5: Write the logic to play the entire game

// Problem Description in My Own Words
// Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Input: -
// Output: -

// Assumptions
// - Nothing comes to mind

// Test Cases (2 - 4)
// Normal case:
// playGame() -> undefined

// Rough Plan / Subproblems
// - Initialize score variables
// - Play a round
// - Repeat five times
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Create a variable called humanScore of type number that starts with the value 0.
// Create a variable called computerScore of type number that starts with the value 0.
// Create a variable called round of type number that starts with the value 1.
// As long as round is <= 5
    // Log the round number    
    // Play a round
    // Increment the round variable
// Log the overall score/winner

// Implementation
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}, get ready!`)
        let roundResult = playRound(getComputerChoice(), getHumanChoice());
        if (roundResult === "human win") {
            humanScore++;
        } else if (roundResult === "computer win"){
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("Congrats, you won!")
    } else if (humanScore < computerScore) {
        console.log("You lost. Try again!")
    } else {
        console.log("It's a tie. Play again!")
    }
    console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`)
}

playGame();

// Short Debug Log
// What went wrong, if anything?
// Which assumption was tested or confirmed?
// What did I change or learn?