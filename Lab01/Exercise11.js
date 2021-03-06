'use strict'

let prompt = require("prompt-sync")();
const STR = "n must be n >= 0";

console.clear();

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

const sum = function(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += product(i);
    }
    return sum;
}

const main = function(n) {
    try {
        if(n < 0 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            console.log("The result:",sum(n));
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
main(n);