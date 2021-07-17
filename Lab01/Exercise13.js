'use strict'

let prompt = require("prompt-sync")();
const STR = "Type the x value: ";
const STR2 = "Type the n value with n > 0: ";

console.clear();
let x = prompt(STR);
let n = prompt(STR2);

// Validate data
while(n < 0 || isNaN(n) || isNaN(x)) {
    console.log("Invalid value for n or x! Please input again!");
    x = prompt(STR);
    n = prompt(STR2);
}

const sum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += Math.pow(x,2*i);
    }
    return sum;
};

// Invoke the function 
let result = sum(n);
if(result !== undefined) {
    console.log("The result:",result);
}
