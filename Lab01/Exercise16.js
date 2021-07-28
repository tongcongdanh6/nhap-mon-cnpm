'use strict'

const STR = "Invalid parameter";

console.clear();

// Calculate series 1+2+...+k
const sum1 = (k) => {
    let s = 0;
    for(let i = 1; i <= k; i++) {
        s += i;
    }
    return s;
}

// Calcualte 1/(1+2+..+k)
const sum2 = (x,n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += (x*i)/sum1(i);
    }
    return sum;
};

const main = function(x,n) {
    try {
        if(n < 0 || isNaN(n) || isNaN(x)) {
            throw {"message":STR};
        }
        else {
            console.log("The result:",sum2(x,n));
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }
}

// Invoke the function
let n = 5;
let x = 4;
main(x,n);