'use strict'

console.clear();

let largestSumSubArray = (arr) => {
    if(arr == null) {
        return null;
    }
    else if(arr.length == 0) {
        return {globalMax: undefined, subArray: []};
    }
    else {
        let currentMax = arr[0];
        let globalMax = arr[0];
        let start_index = 0;
        let end_index = 0;
    
        for(let i = 1; i < arr.length; i++) {
            if(currentMax < 0) {
                currentMax = arr[i];
                start_index = i;
            }
            else {
                currentMax += arr[i];
            }
    
            if(globalMax < currentMax) {
                globalMax = currentMax;
                end_index = i;
            }
        }
    
        let subArray = arr.slice(start_index, end_index + 1);
    
        return {globalMax, subArray};
    }
}

const main = function(arr) {
    try {
        if(largestSumSubArray(arr) == null) {
            console.log("Main array:",arr);
            console.log("Result:",null);
        }
        else {
            console.log("Main array:",arr);
            console.log("Largest sum sub array:",largestSumSubArray(arr)["subArray"]);
            console.log("Largest Sum = ",largestSumSubArray(arr)["globalMax"]);
        }

    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
main(arr);