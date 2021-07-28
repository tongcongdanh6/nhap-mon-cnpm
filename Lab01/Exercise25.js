'use strict'

console.clear();

const findMedian = (arr) => {
    let avgValue = 0;
    let sum = 0;
    arr.forEach((e) => {sum += e});
    // Calculate average value of array
    avgValue = sum/arr.length;
    
    // Calcualte distance for each element with average value
    let distanceArr = [];
    arr.forEach((e) => {
        distanceArr.push({
            "dist": Math.abs(e-avgValue),
            "value": e
        });
    });
    
    // Filter the element with smallest distance
    let minDist = distanceArr[0];
    distanceArr.forEach((e) => {
        if(e.dist < minDist.dist) {
            minDist = e;
        }
    });

    return minDist.value;
}

const main = (arr) => {
    try {
        console.log("Gia tri giua nhat la:", findMedian(arr));
    }catch(e) {
        console.log(e.message);
    }
}

// TEST CASE
let arr = [10, 2, 38, 23, 38, 23, 21];
main(arr);