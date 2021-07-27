'use strict'

const STR = "Invalid parameter";

console.clear();

const power = function(x,n) {
    let tmp = n;
    let p = x;
    for(let i = 2; i <= Math.abs(tmp); i++) {
        p *= x;
    }
    // If exponent is positive (+)
    if(n >= 0) {
        return p;
    }
    else {
        // If exponent is negative (-)
        return 1/p;
    }
}

const sum = (x,n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += power(x,2*i + 1);
    }
    return sum;
};

const main = function(x,n) {
    try {
        if(n < 0 || isNaN(n) || isNaN(x)) {
            throw {"message":STR};
        }
        else {
            return sum(x,n);
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
let x = 2;
if(main(x,n) !== undefined) {
    console.log("The result:",main(x,n));
}
