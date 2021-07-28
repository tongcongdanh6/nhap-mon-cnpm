'use strict'

const STR = "n must be n >= 1: ";

console.clear();

function sum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i/(i+1);
    }
    return sum;
}

const main = function(n) {
    try {
        if(n < 1 || isNaN(n)) {
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
let n = 2;
main(n);