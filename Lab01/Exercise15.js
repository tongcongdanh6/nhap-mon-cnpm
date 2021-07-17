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

// Calculate series 1+2+...+k
const sum1 = (k) => {
    if(k == 0) {
        return 0;
    }
    else {
        let s = 0;
        for(let i = 1; i <= k; i++) {
            s += i;
        }
        return s;
    }
}

// Calcualte 1/(1+2+..+k)
const sum2 = (n) => {
    if(n == 0) {
        return 0;
    }
    else {
        let sum = 0;
        for(let i = 1; i <= n; i++) {
            sum += 1/sum1(i);
        }
        return sum;
    }
};

// Invoke the function 
let result = sum2(n);
if(result !== undefined) {
    console.log("The result:",result);
}
