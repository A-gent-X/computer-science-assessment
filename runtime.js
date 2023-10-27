const perf = require('execution-time')();

// The runtime for the result of the extra large array to passed to the doublerAppend was less the runtime it taken for extra large array to be passed to doubleInsert 
function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

// The runtime for the result of the extra large array to passed to the doubleInsert was more the runtime it taken for extra large array to be passed to doubleAppend
function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
doublerAppend(tinyArray);
doublerAppend(smallArray);
doublerAppend(mediumArray);
doublerAppend(largeArray);

let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
doublerInsert(tinyArray);
doublerInsert(smallArray);
doublerInsert(mediumArray);
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
