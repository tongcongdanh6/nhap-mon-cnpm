'use strict'

console.clear();

function numWays(step) {
    // Fibonacci Series

    // Base case
    if(step == 0 || step == 1) {
        return 1;
    }
    else {
        return numWays(step - 1) + numWays(step - 2);
    }
}

const main = (n) => {
    try {
        console.log("Total way:",numWays(n));
    }catch(e) {
        console.log(e.message);
    }
}

//TEST CASE
let n = 5;
main(n);
