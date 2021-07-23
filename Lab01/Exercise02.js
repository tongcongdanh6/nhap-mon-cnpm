'use strict'

const STR = "n must be 5 <= n <= 20";

console.clear();

function sum(n) {
    try {
        if(n < 5 || n > 20 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            let sum = 0;
            for(let i = 1; i <= n; i++) {
                sum += Math.pow(i,2);
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
