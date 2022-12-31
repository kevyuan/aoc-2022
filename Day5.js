
// Main starts here
var fs = require("fs");
var input = fs.readFileSync("./Day5.txt", "utf-8");
var instructions = input.split("\n");

/* 
// Test
let stacks = [
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"]
];
 */

// Real
let stacks = [
    ["Z", "T", "F", "R", "W", "J", "G"],
    ["G", "W", "M"],
    ["J", "N", "H", "G"],
    ["J", "R", "C", "N", "W"],
    ["W", "F", "S", "B", "G", "Q", "V", "M"],
    ["S", "R", "T", "D", "V", "W", "C"],
    ["H", "B", "N", "C", "D", "Z", "G", "V"],
    ["S", "J", "N", "M", "G", "C"],
    ["G", "P", "N", "W", "C", "J", "D", "L"]
];

// stacks.forEach(value=>console.log(...value));

var instructionSet = [];
var howMany = 0;
var fromWhere = 0;
var toWhere = 0;
var crate = "";
var bundle = [];

const re = new RegExp(/\d+/g);


// Day5A
/* 
instructions.forEach((instruction, index) => {

    instructionSet = instruction.match(re);

    howMany = parseInt(instructionSet[0]);
    fromWhere = parseInt(instructionSet[1]);
    toWhere = parseInt(instructionSet[2]);

//    console.log("howMany: " + howMany + "; fromWhere: " + fromWhere + "; toWhere: " + toWhere);

    while (howMany > 0) {
        howMany--;
        stack = stacks[fromWhere-1].pop();
//        console.log("stack: " + stack);
        stacks[toWhere-1].push(stack); 
        //stacks[toWhere].push(stacks[fromWhere].pop());
    }

}) */




// Day 5B

instructions.forEach((instruction, index) => {

    instructionSet = instruction.match(re);

    howMany = parseInt(instructionSet[0]);
    fromWhere = parseInt(instructionSet[1]);
    toWhere = parseInt(instructionSet[2]);

//    console.log("howMany: " + howMany + "; fromWhere: " + fromWhere + "; toWhere: " + toWhere);

    while (howMany > 0) {
        howMany--;
        
        
        crate = stacks[fromWhere-1].pop();
//        console.log("stack: " + stack);
        bundle.push(crate); 
    }

    while (bundle.length > 0) {
        stacks[toWhere-1].push(bundle.pop());

    }

})



// Write answer
console.log("Answer, Stacks: ");
stacks.forEach(value=>console.log(...value));

// PartA
// CWMTGHBDW

// PartB
// SSCGWJCRB