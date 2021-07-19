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

let largestSumSubArray = (arr) => {
    let currentMax = arr[0];
    let globalMax = arr[0];
    let start_index = 0;
    let end_index = 0;

    for(let i = 1; i < arr.length; i++) {
        if(currentMax < 0) {
            currentMax = arr[i];
            start_index = i;
        }
        else {
            currentMax += arr[i];
        }

        if(globalMax < currentMax) {
            globalMax = currentMax;
            end_index = i;
        }
    }

    let subArray = arr.slice(start_index, end_index + 1);

    return {globalMax, subArray};
}

console.log("Main array:",arr);
console.log("Largest sum sub array:",largestSumSubArray(arr)["subArray"]);
console.log("Largest Sum = ",largestSumSubArray(arr)["globalMax"]);