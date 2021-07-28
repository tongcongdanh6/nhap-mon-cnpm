'use strict'

console.clear();

const uniqueElements = (arr) => {
    // Convert array to set to have unique element
    return [...new Set(arr)]
}

const main = (arr) => {
    try {
        console.log("The new array with unique element:", uniqueElements(arr));  
    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE
let arr = [1, 1, 2, 2, 3, 3, 3, 2, 4];
main(arr);