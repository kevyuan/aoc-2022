// opponent
// A for Rock
// B for Paper
// C for Scissors

// me
// X for Rock, 1
// Y for Paper, 2
// Z for Scissors, 3

// Score for shape selected
// 1 for Rock
// 2 for Paper
// 3 for Scissors

// Score for outcome of the round
// 0 if you lost
// 3 if the round was a draw
// 6 if you won

var fs = require("fs");
var input = fs.readFileSync("./Day2.txt", "utf-8");
var strategyGuide = input.split("\n");

var result = 0;
var totalScore = 0;


totalScore = 0;

strategyGuide.forEach((strategy, index) => {

    // console.log("Strategy: " + strategy);

    switch (strategy) {
        case "A X":
            // draw + rock
            result = 3 + 1;
            break;
        case "A Y":
            // win + paper
            result = 6 + 2;
            break;
        case "A Z":
            // loss + scissors
            result = 0 + 3;
            break;
        case "B X":
            // loss + rock
            result = 0 + 1;
            break;
        case "B Y":
            // draw + paper
            result = 3 + 2;
            break;
        case "B Z":
            // win + scissors
            result = 6 + 3;
            break;
        case "C X":
            // win + rock
            result = 6 + 1;
            break;
        case "C Y":
            // loss + paper
            result = 0 + 2;
            break;
        case "C Z":
            // draw + scissors
            result = 3 + 3;
            break;
    }

    totalScore += result;
    //console.log("totalScore: " + totalScore);

})

console.log("Part One Answer, totalScore: " + totalScore);






// Part Two

// opponent
// A for Rock
// B for Paper
// C for Scissors
// X means you need to lose, 
// Y means you need to end the round in a draw, and 
// Z means you need to win

// A Y, rock draw rock
// B X, paper lose rock
// C Z, scissors win rock

// Score for shape selected
// 1 for Rock
// 2 for Paper
// 3 for Scissors

// Score for outcome of the round
// 0 if you lost
// 3 if the round was a draw
// 6 if you won

totalScore = 0;

strategyGuide.forEach((strategy, index) => {

    // console.log("Strategy: " + strategy);

    switch (strategy) {
        case "A X":
            // rock lose scissors
            result = 0 + 3;
            break;
        case "A Y":
            // rock draw rock
            result = 3 + 1;
            break;
        case "A Z":
            // rock win paper
            result = 6 + 2;
            break;
        case "B X":
            // paper lose rock
            result = 0 + 1;
            break;
        case "B Y":
            // paper draw paper
            result = 3 + 2;
            break;
        case "B Z":
            // paper win scissors
            result = 6 + 3;
            break;
        case "C X":
            // scissors lose paper
            result = 0 + 2;
            break;
        case "C Y":
            // scissors draw scissors
            result = 3 + 3;
            break;
        case "C Z":
            // scissors win rock
            result = 6 + 1;
            break;
    }

    totalScore += result;
    //console.log("totalScore: " + totalScore);

})

console.log("Part Two Answer, totalScore: " + totalScore);