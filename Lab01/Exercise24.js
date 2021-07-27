'use strict'

const STR = "Invalid parameter";

console.clear();

// Validate data
// while(n <= 0 || isNaN(n) || isNaN(keyword)) {
//     console.log("Invalid value of element number in array or keyword! Please input again!");
//     n = prompt(STR1);
//     keyword = prompt(STR2);
// }

// Input the value of element in array
// let arr = [];
// for(let i = 0; i < n; i++) {
//     arr[i] = parseInt(prompt(`Type the value of element ${i} = `));
// }

const binarySearch = function(arr,left,right,keyword) {
    // Binary Search by Recursive
    if(left <= right) {
        let mid = parseInt((left+right)/2);
        // If keyword in the middle of the array
        if(arr[mid] == keyword) {
            return mid;
        }
        
        // If the keyword in the half left of the array
        if(arr[mid] > keyword) {
            return binarySearch(arr,left,mid-1,keyword);
        }
        // If the keyword in the half right of the array
        else {
            return binarySearch(arr,mid+1,right,keyword);
        }
    }
    
    return -1;
}

const insertNewElement = function(arr,value) {
    // If keyword less than the first element in array then insert to the begin of array
    if(value < arr[0]) {
        arr.unshift(value*1);
    }
    // If keyword greater than the last elememt in array then insert to the end of array
    if(value >= arr[arr.length-1]) {
        arr.push(value*1);
    }

    // Otherwise, go through the array and find the position to insert the new element
    for(let i = 0; i < arr.length; i++) {
        if(value > arr[i] && value <= arr[i+1]) {
            arr.splice(i+1,0,value*1);
        }
    }

    return arr;
}

// Check array sort ascending?
const isSortedArray = function(arr) {
    let isSorted = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            isSorted = false;
            break;
        }
        isSorted = true;
    }

    return isSorted;
}

const main = function(arr,keyword) {
    try {
        if(isNaN(keyword)) {
            throw {"message": STR};
        }
        else {
            if(!isSortedArray(arr)) {
                console.log("Unsorted Array! Cannot run!");
            }
            else if(binarySearch(arr,0,arr.length-1,keyword) != -1) {
                console.log(`Found value ${keyword} in array at index ${binarySearch(arr,0,arr.length-1,keyword)}`);
            }
            else {
                console.log(`Cannot found the value ${keyword} in array. This value will be inserted to the array!`)
                // let newArray = insertNewElement(arr,keyword);
                console.log("The new array:",insertNewElement(arr,keyword));
            }
        }
    } catch(e) {
        console.log(e.message);
    }
}


// TEST CASE
let arr = [1,2,4,5,6];
let keyword = 7;

// Invoke main function
main(arr,keyword);