'use strict'

console.clear();

const findLongestWord = (arr) => {
    // Create new array with length for each word
    let newA = arr.map((e) => e.length);

    // Find max length
    let max = Math.max(...newA);

    // Filter the original array with condition is length equals max value
    let res = arr.filter((e) => e.length == max);

    return res;
}

const main = (arr) => {
    try {
        console.log("Longest word in dictionary:",findLongestWord(arr));
    }catch(e) {
        console.log(e.message);
    }
}

//TEST CASE
// let dic = ["cat","flag","green","country","w3resource"];
let dic = ["cat","dog","red","is"];
main(dic);



