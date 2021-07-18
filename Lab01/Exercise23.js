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
    return {globalMin, start_index, end_index};
}

function printArray(arr,start,end) {
    let str = "";
    for(let i = start; i <= end; i++) {
        str += arr[i] + " ";
    }
    return str;
}

console.log("Main array: ",printArray(arr,0,arr.length-1));
console.log("Smallest sum sub array: ",printArray(arr,smallestSumSubArray(arr)["start_index"],smallestSumSubArray(arr)["end_index"]));
console.log("Sum = ",smallestSumSubArray(arr)["globalMin"]);