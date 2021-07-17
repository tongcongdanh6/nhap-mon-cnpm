'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Type number of row (row > 0) row = ";
const STR2 = "Type numer of column (col > 0) col = ";
const STR3 = "Type the value k which you want to search in matrix k = ";

console.clear();
let row = prompt(STR1);
let col = prompt(STR2);
let k = prompt(STR3);

// Validate data
while(row <= 0 || col <= 0 || isNaN(row) || isNaN(col) || isNaN(k)) {
    console.log("Invalid value of row or column or k! Please input again!");
    row = prompt(STR1);
    col = prompt(STR2);
    k = prompt(STR3);
}

let matrix = [];

for(let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
    for(let j = 0; j < col; j++) {
        matrix[i][j] = prompt(`Type element A[${i}][${j}] = `);
    }
}

function printMatrix(matrix) {
    console.log("YOUR MATRIX IS:");
    for(let i = 0; i < row; i++) {
        let str = "";
        for(let j = 0; j < col; j++) {
            str += matrix[i][j]+" ";
        }
        console.log(str);
    }
}

printMatrix(matrix);

const minAndMax = (matrix) => {
    let min = matrix[0][0];
    let max = matrix[0][0];
    for(let i = 0; i < row; i++) {
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
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] === k) {
                return [i,j];
            }
        }
    }
    return [-1,-1];
}

console.log("Min value in array is:",minAndMax(matrix)["min"]);
console.log("Max value in array is:",minAndMax(matrix)["max"]);
console.log(`The index of k = ${k} is`,findValue(matrix,k));