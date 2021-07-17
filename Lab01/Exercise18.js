'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Type the n value with n >= 0: ";
const STR2 = "Type the x value: ";

console.clear();
let n = prompt(STR1);
let x = prompt(STR2);

// Validate data
while(n < 0 || isNaN(n) || isNaN(x)) {
    console.log("Invalid value for n or x! Please input again!");
    n = prompt(STR1);
    x = prompt(STR2);
}

const factorial = (n) => {
    if(n == 0) {
        return 1;
    }
    else {
        let p = 1;
        for(let i = 1; i <= n; i++) {
            p *= i;
        }
        return p;
    }
}

const sum = (x,n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += (x*i)/factorial(i);
    }
    return sum;
}

// Invoke the function 
let result = sum(x,n);
if(result !== undefined) {
    console.log("The result:",result);
}
