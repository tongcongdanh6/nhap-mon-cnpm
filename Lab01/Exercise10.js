'use strict'

let prompt = require("prompt-sync")();
const STR = "Type the x value: ";
const STR2 = "Type the n value: ";

console.clear();
let x = prompt(STR);
let n = prompt(STR2);

// Validate data
while(isNaN(n) || isNaN(x)) {
    console.log("Invalid value for n or x! Please input again!");
    x = prompt(STR);
    n = prompt(STR2);
}

const power = (x,n) => {
    let tmp = n;
    let p = x;
    for(let i = 2; i <= Math.abs(tmp); i++) {
        p *= x;
    }
    // If exponent is positive (+)
    if(n >= 0) {
        return p;
    }
    else {
        // If exponent is negative (-)
        return 1/p;
    }
};

// Invoke the function 
let result = power(x,n);
if(result !== undefined) {
    console.log(`The result T(${x},${n}) = `,result);
}