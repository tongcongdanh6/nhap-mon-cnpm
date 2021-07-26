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

const main = function(x,n) {
    try {
        if(isNaN(x) || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            return power(x,n);
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
let x = 4;
if(main(x,n) !== undefined) {
    console.log("The result:",main(x,n));
}

module.exports = function power(x,n) {
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