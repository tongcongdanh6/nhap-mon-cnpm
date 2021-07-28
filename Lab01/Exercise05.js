'use strict'

const STR = "n must be n >= 2: ";

console.clear();

function sum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += 1/(2*i + 1);
    }
    return sum;
}

const main = function(n) {
    try {
        if(n < 2 || isNaN(n)) {
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
let n = 3;
main(n);