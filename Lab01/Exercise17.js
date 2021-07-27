'use strict'

const STR = "n must be n >= 0";

console.clear();

const factorial = (n) => {
    if(n == 0) {
        return 1;
    }
    else {
        let p = 1;
        for(let i = 1; i <= n; i++) {
            p *= i;
        }
        return p;
    }
}

const main = function(n) {
    try {
        if(n < 0 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            return factorial(n);
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