'use strict'

console.clear();

let smallestSumSubArray = (arr) => {
    if(arr == null) {
        return null;
    }
    else if(arr.length == 0) {
        return {globalMax: undefined, subArray: []};
    }
    else {
        let currentMin = arr[0];
        let globalMin = arr[0];
        let start_index = 0;
        let end_index = 0;
    
        for(let i = 1; i < arr.length; i++) {
            if(currentMin >= 0) {
                currentMin = arr[i];
                start_index = i;
            }
            else {
                currentMin += arr[i];
            }
    
            if(globalMin > currentMin) {
                globalMin = currentMin;
                end_index = i;
            }
        }
    
        let subArray = arr.slice(start_index, end_index + 1);
    
        return {globalMin, subArray};
    }
}

const main = function(arr) {
    try {
        if(smallestSumSubArray(arr) == null) {
            console.log("Main array:",arr);
            console.log("Result:",null);
        }
        else {
            console.log("Main array:",arr);
            console.log("Smallest sum sub array:",smallestSumSubArray(arr)["subArray"]);
            console.log("Smallest Sum = ",smallestSumSubArray(arr)["globalMin"]);
        }

    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
main(arr);