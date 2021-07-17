'use strict'

let prompt = require("prompt-sync")();
const STR = "Type the n value with n >= 1: ";

console.clear();
let n = prompt(STR);

// Validate data
while(n < 1 || isNaN(n)) {
    console.log("Invalid value for n");
    n = prompt(STR);
}

const sum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i/(i+1);
    }
    return sum;
};

// Invoke the function 
let result = sum(n);
if(result !== undefined) {
    console.log("The result:",result);
}
