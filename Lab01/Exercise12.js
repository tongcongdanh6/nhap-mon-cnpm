'use strict'
const ex10 = require("./Exercise10");

const STR = "Invalid parameter";

const sum = (x,n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += ex10(x,n);
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
let x = 4;
if(main(x,n) !== undefined) {
    console.log("The result:",main(x,n));
}