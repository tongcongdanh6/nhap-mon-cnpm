'use strict'

let prompt = require("prompt-sync")();
const STR1 = "Please input the string: ";

console.clear();
let string = prompt(STR1);

let charArr = string.split('');

let duplicate = (arr) => arr.filter((value,index) => arr.indexOf(value) != index);
console.log("Duplicate check:",duplicate(charArr).length === 0);
