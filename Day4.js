// Main starts here
var fs = require("fs");
var input = fs.readFileSync("./Day4.txt", "utf-8");
var assignments = input.split("\n");

var count = 0;
var pair = [];

var sizeofFirst = 0;
var sizeofSecond = 0;

const reBegin = new RegExp(/^\d+/);
const reEnd = new RegExp(/\d+$/);

// testString = "2-3"; 

assignments.forEach((assignment, index) => {
    // Parse the pairs
    pair = assignment.split(",");
    //  console.log("Pair: " + pair);

    // console.log("testString: " + testString + "     " + testString.match(reBegin));

    // Figure out which pair is smaller
    sizeofFirst = pair[0].match(reEnd) - pair[0].match(reBegin);
    sizeofSecond = pair[1].match(reEnd) - pair[1].match(reBegin);

    // console.log("sizeofFirst: " + sizeofFirst + "; sizeofSecond: " + sizeofSecond);

    // Regex second number minus the first number
    if (sizeofFirst <= sizeofSecond) {

        // Is min of smaller pair equal or greater than bigger pair?
        if (parseInt(pair[0].match(reBegin)) >= parseInt(pair[1].match(reBegin))) {

            // Is max of smaller pair equal or less than the bigger pair?
            if (parseInt(pair[0].match(reEnd)) <= parseInt(pair[1].match(reEnd))) {

                // Add to count
                count++;
                //console.log("count: " + count);
            }
        }
    } else {

        // Is min of smaller pair equal or greater than bigger pair?
        if (parseInt(pair[1].match(reBegin)) >= parseInt(pair[0].match(reBegin))) {
            // console.log("pair[1].match(reBegin): " + pair[1].match(reBegin) + "; pair[0].match(reBegin): " + pair[0].match(reBegin));

            // Is max of smaller pair equal or less than the bigger pair?
            if (parseInt(pair[1].match(reEnd)) <= parseInt(pair[0].match(reEnd))) {

                // Add to count
                count++;
                //console.log("count: " + count);
            }
        }
    }
})

// Write count
console.log("Day4A answer, Count: " + count);



count = 0;

assignments.forEach((assignment, index) => {
    // Parse the pairs
    pair = assignment.split(",");
    //  console.log("Pair: " + pair);

    // console.log("testString: " + testString + "     " + testString.match(reBegin));
    // console.log("sizeofFirst: " + sizeofFirst + "; sizeofSecond: " + sizeofSecond);

    // If [1] <= [4]
    if (parseInt(pair[0].match(reBegin)) <= parseInt(pair[1].match(reEnd))) {

        // If [2] >= [3]
        if (parseInt(pair[0].match(reEnd)) >= parseInt(pair[1].match(reBegin))) {

            // Add to count
            count++;
            //console.log("count: " + count);
        }
    }
})

// Write count
console.log("Day4B answer, Count: " + count);