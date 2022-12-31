var fs = require("fs");
var input = fs.readFileSync("./Day1.txt", "utf-8");
console.log(input);

var calories = input.split("\n");

// console.log(calories);
// console.log(calories[0]);

var total = 0;
var caloricTotals = [];
var highestCaloricTotal = 0;
var highestCaloricTotalPosition = 0;
var position = 1; // Starts at 1

calories.forEach((calorie, index) => {
    if (!calorie) {
        // Add result into array
        caloricTotals.push(total);

        if (total > highestCaloricTotal) {
            highestCaloricTotal = total;
            highestCaloricTotalPosition = position;
        }

        // Bump up the position
        position++;

        // Reset the total
        total = 0;
    } else {
        total += parseInt(calorie);

        if (index == calories.length - 1) {
            console.log("Index :" + index);

            // Add result into array
            caloricTotals.push(total);

            if (total > highestCaloricTotal) {
                highestCaloricTotal = total;
                highestCaloricTotalPosition = position;
            }

        }

    }

})





//console.log(caloricTotals);
console.log("Highest Caloric Total: " + highestCaloricTotal);
console.log("Highest Caloric Total Position: " + highestCaloricTotalPosition);


caloricTotals.sort(function (a, b) {
    return b - a;
})

var totalOfTopThree = caloricTotals[0] + caloricTotals[1] + caloricTotals[2];

console.log("Total of top three: " + totalOfTopThree);

