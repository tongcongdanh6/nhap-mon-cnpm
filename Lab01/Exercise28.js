'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Please input the step n > 0: ";

console.clear();
let n = prompt(STR1);

// Validate data
while(n <= 0 || isNaN(n)) {
    console.log("Invalid value of step! Please input again!");
    n = prompt(STR1);
}

function numWays(step) {
    // Fibonacci Series

    // Base case
    if(step == 0 || step == 1) {
        return 1;
    }
    else {
        return numWays(step - 1) + numWays(step - 2);
    }
}

console.log("Total way:",numWays(n));