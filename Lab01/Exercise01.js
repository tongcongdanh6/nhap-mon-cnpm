let prompt = require("prompt-sync")();

console.clear();
let n = prompt("Type the n value with 3 < n < 50: ");

const sum = (n) => {
    // Validate the value
    if(n <= 3 || n >= 50 || isNaN(n)) {
        console.log("Invalid value for n");
    }
    else {
        let sum = 0;
        for(let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
};

// Invoke the function 
let result = sum(n);
console.log("The result:",result);
