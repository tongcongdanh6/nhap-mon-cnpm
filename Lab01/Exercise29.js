'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Please input the number of word n > 0: ";

console.clear();
let n = prompt(STR1);

// Validate data
while(n <= 0 || isNaN(n)) {
    console.log("Invalid value of number of word! Please input again!");
    n = prompt(STR1);
}

// Input the value of element in array
let arr = [];
for(let i = 0; i < n; i++) {
    arr[i] = prompt(`Type the word in dictionary: `);
}

// Create new array with length for each word
let newA = arr.map((e) => e.length);

// Find max length
let max = Math.max(...newA);

// Filter the original array with condition is length equals max value
let res = arr.filter((e) => e.length == max);

console.log("Longest word in dictionary:",res);