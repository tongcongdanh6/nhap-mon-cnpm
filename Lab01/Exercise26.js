'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Please input number of elements in array: ";

console.clear();
let n = prompt(STR1);

// Validate data
while(n <= 0 || isNaN(n)) {
    console.log("Invalid value of element number in array! Please input again!");
    n = prompt(STR1);
}

// Input the value of element in array
let arr = [];
for(let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt(`Type the value of element ${i} = `));
}

let result = [];
arr.forEach((e) => {
    let counter = 0;
    arr.forEach((e2) => {
        if(e2 == e) counter++;
    });

    if(counter == 1) {
        result.push(e);
    }
});

console.log("The elements in array display only 1 times:",result.join(" "));