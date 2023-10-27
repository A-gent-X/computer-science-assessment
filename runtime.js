// I'm still not finished

const perf = require('execution-time')();

// The runtime for the result of the extra large array to passed to the doublerAppend was less the runtime it taken for extra large array to be passed to doubleInsert 

function doublerAppend(nums) { 
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

// The runtime for the result of the extra large array to passed to the doubleInsert was more the runtime it taken for extra large array to be passed to doubleAppend
function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

function measureExecutionTime(func, array) {
    perf.start();
    func(array);
    const result = perf.stop();
    return result.preciseWords;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const resultsTable = {
    "Array Size": ["Tiny", "Small", "Medium", "Large", "Extra Large"],
    "doublerAppend": [
        measureExecutionTime(doublerAppend, tinyArray),
        measureExecutionTime(doublerAppend, smallArray),
        measureExecutionTime(doublerAppend, mediumArray),
        measureExecutionTime(doublerAppend, largeArray),
        measureExecutionTime(doublerAppend, extraLargeArray),
    ],
    "doublerInsert": [
        measureExecutionTime(doublerInsert, tinyArray),
        measureExecutionTime(doublerInsert, smallArray),
        measureExecutionTime(doublerInsert, mediumArray),
        measureExecutionTime(doublerInsert, largeArray),
        measureExecutionTime(doublerInsert, extraLargeArray),
    ],
};

console.table(resultsTable);

perf.start();                
doublerAppend(extraLargeArray);
doublerAppend(tinyArray);
doublerAppend(smallArray);
doublerAppend(mediumArray);
doublerAppend(largeArray);

let resultsAppend = perf.stop();  


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

// Part Two

// Space Complexity: Quadratic Space
function hasPairWithSumToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  
  const numbers1 = [2, -3, 1, 0, -2];
  const numbers2 = [3, 5, 9, -8];
  console.log(hasPairWithSumToZero(numbers1)); // This will log true because -3 and 3 sum to 0.
  console.log(hasPairWithSumToZero(numbers2)); // This will log false because there is no pair summing to 0.

// _________________________________________________________________________________________________

// Space Complexity: Constant Space
function hasUniqueCharacters(word) {
    return new Set(word).size === word.length;
  }
  
  const word1 = "hello";
  const word2 = "world";
  const word3 = "unique";
  console.log(hasUniqueCharacters(word1)); // This will log false because 'l' is repeated.
  console.log(hasUniqueCharacters(word2)); // This will log false because 'o' is repeated.
  console.log(hasUniqueCharacters(word3)); // This will log true because all characters are unique.
// ________________________________________________________________________________________________


// Space Complexity: Linear Space
function isPangram(sentence) {
    // lowercase alphabet letters
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  
    // Converted sentence to lowercase for case-insensitive comparison
    sentence = sentence.toLowerCase();
  
    // Iterate through the characters in the sentence
    for (let char of sentence) {
      if (alphabet.has(char)) {
        // to remove the letter from the alphabet set if it's found
        alphabet.delete(char);
      }
    }
  
    // If the alphabet set is empty, it's a pangram
    return alphabet.size === 0;
  }
  
  const pangram1 = "My Sister Imani is an amazing dancer.";
  const pangram2 = "I wake up 6am to go to LA fitness to go swimming.";
  const nonPangram = "My dad's favorite basket team is the Milwaukee Bucks but I like the Suns.";
  
  console.log(isPangram(pangram1)); // This will log true because it's a pangram.
  console.log(isPangram(pangram2)); // This will log true because it's a pangram.
  console.log(isPangram(nonPangram)); // This will log false because it's not a pangram.

//   _________________________________________________________________________________________

// Space Complexity: Constant Linear Space 
function find_longest_word(wordList) {
    if (wordList.length === 0) {
      return 0; // Return 0 for an empty list
    }
  
    let longestLength = 0;
  
    for (let word of wordList) {
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
  
    return longestLength;
  }
  
  const words = ["Mortal Kombat", "Street-Fighter", "Call of Duty", "Elden Ring", "Diablo"];
  const longestLength = find_longest_word(words);
  console.log("The length of the longest word is:", longestLength); // This will log Street-Fighter").
  