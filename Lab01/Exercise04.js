'use strict'

const STR = "n must be n > 9: ";

function sum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += 1/(2*i);
    }
    return sum;
}

const main = function(n) {
    try {
        if(n <= 9 || isNaN(n)) {
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
let n = 10;
if(main(n) !== undefined) {
    console.log("The result:",main(n));
}