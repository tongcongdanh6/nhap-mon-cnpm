'use strict'

const STR = "Invalid parameter";

console.clear();

const minAndMax = (matrix) => {
    let min = matrix[0][0];
    let max = matrix[0][0];
    for(let i = 0; i < matrix.length; i++) {
        let localMin = Math.min(...matrix[i]);
        let localMax = Math.max(...matrix[i]);
        if(localMin < min) {
            min = localMin;
        }

        if(localMax > max) {
            max = localMax;
        }
    }
    return {min, max};
}

const findValue = (matrix, k) => {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === k) {
                return [i,j];
            }
        }
    }
    return [-1,-1];
}

const main = function(matrix,k){
    try {
        if(isNaN(k)) {
            throw {"message": STR};
        }
        else {
            console.log("Give Matrix:",matrix);
            console.log("Min value in array is:",minAndMax(matrix)["min"]);
            console.log("Max value in array is:",minAndMax(matrix)["max"]);
            console.log(`The index of k = ${keyword} is`,findValue(matrix,keyword));
        }
    }catch(e) {
        console.log(e.message);
    }
}


// TEST CASE
let matrix = [
    [13,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

let keyword = 2;

// Invoke main function
main(matrix, keyword);