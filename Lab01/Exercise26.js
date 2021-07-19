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

let duplicateElement = (arr) => arr.filter((value,index) => arr.indexOf(value) != index);
let uniqueElement = arr.filter((e) => !duplicateElement(arr).includes(e));

console.log("The elements in array display only 1 times:",uniqueElement.join(" "));