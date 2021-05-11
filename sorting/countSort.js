/**
 * https://youtu.be/7zuGmKfUt7s
 * Preferable when we know the values in the array lie
 * between a specified range
 */

function countSort(origArray, min, max) {
  const countsLength = max - min + 1;
  let counts = Array(countsLength).fill(0);
  // count occurrences
  for (let i of origArray) {
    counts[i] += 1;
  }
  // cumulative sum through the counts array
  for (let i = 0; i < countsLength - 1; i += 1) {
    counts[i + 1] += counts[i];
  }

  let result = Array(origArray.length);
  for (let i of origArray) {
    result[counts[i] - 1] = i;
    counts[i] -= 1;
  }
  return result;
}

// test - values lie between 0 and 9
let testArray = [1, 4, 1, 2, 7, 5, 2];
console.log("Input:", testArray);

console.time("Executed in");
console.log("Output:", countSort(testArray, 0, 9));
console.timeEnd("Executed in");
