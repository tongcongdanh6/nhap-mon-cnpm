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

let avgValue = 0;
let sum = 0;
arr.forEach((e) => {sum += e});
// Calculate average value of array
avgValue = sum/arr.length;

// Calcualte distance for each element with average value
let distanceArr = [];
arr.forEach((e) => {
    distanceArr.push({
        "dist": Math.abs(e-avgValue),
        "value": e
    });
});

// Filter the element with smallest distance
let minDist = distanceArr[0];
distanceArr.forEach((e) => {
    if(e.dist < minDist.dist) {
        minDist = e;
    }
});

console.log("Gia tri giua nhat la:", minDist.value);