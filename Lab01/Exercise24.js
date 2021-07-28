'use strict'

const STR = "Invalid parameter";

console.clear();

const findIndexElement = function(arr,keyword) {
    return arr.findIndex((e) => e == keyword);
}

const insertNewElement = function(arr,value) {
    arr.push(value);
    arr.sort((a,b) => a - b);
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
            else if(findIndexElement(arr,keyword) != -1) {
                console.log(`Found value ${keyword} in array at index ${findIndexElement(arr,keyword)}`);
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
let arr = [1,2,5,6,9];
let keyword = 10;

// Invoke main function
main(arr,keyword);