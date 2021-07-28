'use strict'

const STR = "n must be n > 6: ";

console.clear();

function product(n) {
    let product = 1;
    for(let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

const main = function(n) {
    try {
        if(n <= 6 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            console.log("The result:",product(n));
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 7;
main(n);