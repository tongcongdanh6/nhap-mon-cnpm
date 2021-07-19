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

let smallestSumSubArray = (arr) => {
    let currentMin = arr[0];
    let globalMin = arr[0];
    let start_index = 0;
    let end_index = 0;

    for(let i = 1; i < arr.length; i++) {
        if(currentMin >= 0) {
            currentMin = arr[i];
            start_index = i;
        }
        else {
            currentMin += arr[i];
        }

        if(globalMin > currentMin) {
            globalMin = currentMin;
            end_index = i;
        }
    }

    let subArray = arr.slice(start_index, end_index + 1);

    return {globalMin, subArray};
}

console.log("Main array:",arr);
console.log("Smallest sum sub array: ",smallestSumSubArray(arr)["subArray"]);
console.log("Smallest Sum = ",smallestSumSubArray(arr)["globalMin"]);