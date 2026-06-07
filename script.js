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

let humanScore = 0;
let computerScore = 0;

// console.log("humanScore", humanScore);
// console.log("computerScore", computerScore);

// Short Debug Log
// What went wrong, if anything?
// Which assumption was tested or confirmed?
// What did I change or learn?