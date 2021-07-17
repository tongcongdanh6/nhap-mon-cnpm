'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Type the n value with n > 0: ";
const STR2 = "Type the x value: ";

console.clear();
let n = prompt(STR1);
let x = prompt(STR2);

// Validate data
while(n <= 0 || isNaN(n) || isNaN(x)) {
    console.log("Invalid value for n or x! Please input again!");
    n = prompt(STR1);
    x = prompt(STR2);
}

// Calculate series 1+2+...+k
const sum1 = (k) => {
    let s = 0;
    for(let i = 1; i <= k; i++) {
        s += i;
    }
    return s;
}

// Calcualte 1/(1+2+..+k)
const sum2 = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += (x*i)/sum1(i);
    }
    return sum;
};

// Invoke the function 
let result = sum2(n);
if(result !== undefined) {
    console.log("The result:",result);
}