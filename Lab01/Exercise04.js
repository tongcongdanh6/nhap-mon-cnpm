'use strict'

let prompt = require("prompt-sync")();

console.clear();
let n = prompt("Type the n value with n > 9: ");

// Validate data
while(n <= 9 || isNaN(n)) {
    console.log("Invalid value for n");
    n = prompt("Type the n value with n > 9: ");
}

const sum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += 1/(2*i);
    }
    return sum;
};

// Invoke the function 
let result = sum(n);
if(result !== undefined) {
    console.log("The result:",result);
}