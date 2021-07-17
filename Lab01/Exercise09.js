'use strict'

let prompt = require("prompt-sync")();
const STR = "Type the n value with n > 6: ";

console.clear();
let n = prompt(STR);

// Validate data
while(n <= 6 || isNaN(n)) {
    console.log("Invalid value for n");
    n = prompt(STR);
}

const product = (n) => {
    let product = 1;
    for(let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
};

// Invoke the function 
let result = product(n);
if(result !== undefined) {
    console.log("The result:",result);
}
