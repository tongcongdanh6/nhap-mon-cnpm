'use strict'

console.clear();
const findUniqueElements = (arr) => {
    let duplicateElement = (arr) => arr.filter((value,index) => arr.indexOf(value) != index);
    let uniqueElement = arr.filter((e) => !duplicateElement(arr).includes(e));

    return uniqueElement;
}

const main = (arr) => {
    try {
        console.log("The elements in array display only 1 times:",findUniqueElements(arr).join(" "));
    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE 
let arr = [10, 20, 30, 20, 50, 10, 40];
main(arr);
