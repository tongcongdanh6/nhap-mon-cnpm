'use strict'

const STR = "n must be n >= 0";
console.clear();

// Calculate series 1+2+...+k
const sum1 = (k) => {
    if(k == 0) {
        return 0;
    }
    else {
        let s = 0;
        for(let i = 1; i <= k; i++) {
            s += i;
        }
        return s;
    }
}

// Calcualte 1/(1+2+..+k)
const sum2 = (n) => {
    if(n == 0) {
        return 0;
    }
    else {
        let sum = 0;
        for(let i = 1; i <= n; i++) {
            sum += 1/sum1(i);
        }
        return sum;
    }
};

const main = function(n) {
    try {
        if(n < 0 || isNaN(n)) {
            throw {"message":STR};
        }
        else {
            console.log("The result:",sum2(n));
        }        
    } catch(e) {
        console.log("Error:",e.message);
    }    
}

// Invoke the function
let n = 3;
main(n);