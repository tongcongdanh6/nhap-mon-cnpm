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
    return {globalMax, start_index, end_index};
}

function printArray(arr,start,end) {
    let str = "";
    for(let i = start; i <= end; i++) {
        str += arr[i] + " ";
    }
    return str;
}

console.log("Main array: ",printArray(arr,0,arr.length-1));
console.log("Largest sum sub array: ",printArray(arr,largestSumSubArray(arr)["start_index"],largestSumSubArray(arr)["end_index"]));
console.log("Sum = ",largestSumSubArray(arr)["globalMax"]);