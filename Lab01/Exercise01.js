'use strict'

console.clear();
const STR = "n must be 3 < n < 50";

function sum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const main = function(n) {
    try {
        if(n <= 3 || n >=50 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            return sum(n);
        }
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
if(main(n) !== undefined) {
    console.log("The result:",main(n));
}