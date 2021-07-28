'use strict'

const STR = "Invalid parameter";

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

const sum = (x,n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += (x*i)/factorial(i);
    }
    return sum;
}

const main = function(x,n) {
    try {
        if(n < 0 || isNaN(n) || isNaN(x)) {
            throw {"message":STR};
        }
        else {
            console.log("The result:",sum(x,n));
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
let x = 2;
main(x,n);