'use strict'

const STR = "n must be n > 5: ";

console.clear();

function sum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += (2*i+1)/(2*i+2);
    }
    return sum;
}

const main = function(n) {
    try {
        if(n <=5 || isNaN(n)) {
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
let n = 6;
main(n);