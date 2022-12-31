var lookupArray = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}

// for (var key in lookupArray) {
//     console.log("key " + key + " has value " + lookupArray[key]);
//   }



function getTheDupe(content) {
    // Split the compartments
    var left = content.substring(0, content.length / 2);
    var right = content.substring(content.length / 2, content.length);

    var leftArray = left.split("");
    //console.log(leftArray);

    var dupe = "";

    while (dupe == "") {
        item = leftArray.pop();
//        console.log(item);
        if (right.match(item)) {
            dupe = item;
        }
    }

    return dupe;
}

function getTheDupeX3(first, second, third) {

    var dupe = "";

    var firstArray = first.split("");

    while (dupe == "") {
        item = firstArray.pop();
        if (second.match(item)) {
            if (third.match(item)) {
                dupe = item;
            }
        }
    }

    return dupe;

}

// Main starts here
var fs = require("fs");
var input = fs.readFileSync("./Day3.txt", "utf-8");
var rucksacks = input.split("\n");

var dupe = "";
var prioritization = [];
var sum = 0;

rucksacks.forEach((rucksack, index) => {
    dupe = getTheDupe(rucksack);
    sum += lookupArray[dupe];
})

// var content = "vJrwpWtwJgWrhcsFMMfFFhFp";
// var dupe = getTheDupe(content);

// console.log("Dupe: " + dupe);

// console.log("Value: " + lookupArray[dupe]);

console.log("Day3A answer, Sum: " + sum);


console.log("Get real dupe: " + getTheDupeX3("vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg"));

sum = 0;

while (rucksacks.length > 0) {
    first = rucksacks.shift(); 
    second = rucksacks.shift(); 
    third = rucksacks.shift(); 
    dupe = getTheDupeX3(first, second, third);
    sum += lookupArray[dupe];
}

console.log("Day3B answer, Sum: " + sum);