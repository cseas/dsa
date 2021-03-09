/**
 * Returns 0-based index of element if found,
 * otherwise -1.
 * @params
 * sortedArray: Array<number>
 * element: number
 * left: number
 * right: number
 * @note
 * Right index is inclusive
 */
function binarySearch(sortedArray, element, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = left + Math.floor((right - left) / 2);

  if (element === sortedArray[mid]) {
    return mid;
  } else if (element < sortedArray[mid]) {
    return binarySearch(sortedArray, element, left, mid - 1);
  } else {
    return binarySearch(sortedArray, element, mid + 1, right);
  }
}

const sortedArray = [1, 2, 3, 4, 5];
console.log(binarySearch(sortedArray, 4, 0, sortedArray.length - 1));
