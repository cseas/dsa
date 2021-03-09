/**
 * Generates hashmap that contains frequencies of
 * characters in a string.
 */
function getCharFrequencies(str: string) {
  let charFrequencies = {};

  for (let i = 0; i < str.length; i += 1) {
    if (charFrequencies[str[i]]) {
      charFrequencies[str[i]] += 1;
    } else {
      charFrequencies[str[i]] = 1;
    }
  }
  return charFrequencies;
}

console.log(getCharFrequencies("abcdeac"));
// output: { a: 2, b: 1, c: 2, d: 1, e: 1 }
