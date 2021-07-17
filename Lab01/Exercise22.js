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
    arr[i] = prompt(`Type the value of element ${i} = `);
}

let maxSubArray = (arr) => {
    let best_sum = 0;
    let current_sum = 0;
    let start_index_tmp = -1;
    let start_index, end_index;

    for(let i = 0; i < n; i++) {
        current_sum += arr[i];

        if(current_sum <= 0) {
          current_sum = 0;
          start_index_tmp = -1;
        }
        else {
            if(start_index_tmp == -1) {
                start_index_tmp = i;
            }

            if(best_sum < current_sum) {
                best_sum = current_sum;
                start_index = start_index_tmp;
                end_index = i;
            }
        }
    }

    return best_sum;
}

// function printArray(arr) {
//     let str = "";
//     arr.forEach((e) => {
//         str += e + " ";
//     });
//     console.log(str);
// }

// printArray(arr);

console.log("max",maxSubArray(arr));