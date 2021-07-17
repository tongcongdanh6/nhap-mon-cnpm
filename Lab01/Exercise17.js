'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Type the n value with n >= 0: ";

console.clear();
let n = prompt(STR1);

// Validate data
while(n < 0 || isNaN(n)) {
    console.log("Invalid value for n! Please input again!");
    n = prompt(STR1);
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

// Invoke the function 
let result = factorial(n);
if(result !== undefined) {
    console.log("The result:",result);
}
