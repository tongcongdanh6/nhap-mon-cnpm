'use strict'

console.clear();

const checkUniqueCharacterEachWord = (word) => {
    let charArr = word.split('');

    let duplicate = (arr) => arr.filter((value,index) => arr.indexOf(value) != index);

    return duplicate(charArr).length === 0;
}

const main = (word) => {
    try {
        console.log(`'${word}' contains unique character? Result -->`,checkUniqueCharacterEachWord(word));
    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE
let word = "Green";
// let word = "Orange";
main(word);