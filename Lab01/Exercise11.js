'use strict'

let prompt = require("prompt-sync")();
const STR = "Type the n value with n >= 0: ";

console.clear();
let n = prompt(STR);

// Validate data
while(n < 0 || isNaN(n)) {
    console.log("Invalid value for n");
    n = prompt(STR);
}

const product = (n) => {
    if(n == 0) {
        return 0;
    }
    else {
        let p = 1;
        for(let i = 1; i <= n; i++) {
            p *= i;
        }
        return p;
    }
}

const sum = (n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += product(i);
    }
    return sum;
};

// Invoke the function 
let result = sum(n);
if(result !== undefined) {
    console.log("The result:",result);
}
