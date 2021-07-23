'use strict'

console.clear();
const STR = "n must be 3 < n < 50";

function sum(n) {
    try {
        if(n <= 3 || n >=50 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            let sum = 0;
            for(let i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
        }
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
if(sum(n) !== undefined) {
    console.log("The result:",sum(n));
}