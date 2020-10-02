/* Takes as input an array of numbers and returns
 * a sorted array
 */

function quickSort(origArray) {
  if (origArray.length <= 1) return origArray;
  else {
    let left = [];
    let right = [];
    const pivot = origArray.shift();

    for (let i of origArray) {
      if (i <= pivot) left.push(i);
      else right.push(i);
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }
}

/* shift() does the opposite of pop(),
 * it removes the first item of the array
 */

// test
let testArray = [3, 0, 2, 5, -1, 4, 1];
console.log("Input:", testArray);

console.time("Executed in");
console.log("Output:", quickSort(testArray));
console.timeEnd("Executed in");
