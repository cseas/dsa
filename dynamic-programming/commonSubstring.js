// given 2 strings, find the longest common non-contiguous substring
// https://youtu.be/NnD96abizww

function getCommonSubstringLength(a, b) {
  // b is the smaller string
  let commonSubStrings = [];
  for (let i = 0; i < b.length; i += 1) {
    commonSubStrings.push(Array(a.length).fill(1));
  }

  for (let i = 1; i < b.length; i += 1) {
    for (let j = 1; j < a.length; j += 1) {
      // match
      if (b[i] === a[j]) {
        commonSubStrings[i][j] = commonSubStrings[i - 1][j - 1] + 1;
      } else {
        commonSubStrings[i][j] = Math.max(
          commonSubStrings[i][j - 1],
          commonSubStrings[i - 1][j]
        );
      }
    }
  }
  return commonSubStrings[b.length - 1][a.length - 1];
}

console.log(getCommonSubstringLength("abcdefg", "acbef")); // acef = 4
