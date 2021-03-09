// https://www.geeksforgeeks.org/calculate-sum-of-all-numbers-present-in-a-string/

function sumOfNumbersInString(input) {
  let sum = 0;
  let currentNumberString = "";

  // iterate through characters
  for (const character of input) {
    if (isDigit(character)) {
      // if digit then append to number string
      currentNumberString += character;
    } else {
      // if we have a number then add it to sum
      if (currentNumberString !== "") {
        sum += Number(currentNumberString);
        currentNumberString = ""; // reset
      }
    }
  }

  if (currentNumberString !== "") {
    sum += Number(currentNumberString);
  }

  return sum;
}

function isDigit(character) {
  return !isNaN(Number(character));
}
// console.log(isDigit("a"), isDigit(1));

const tests = [
  { input: "d1abc23", output: 24 },
  { input: "1abc23e", output: 24 },
  { input: "1abc23", output: 24 },
  { input: "1a5b12c23", output: 41 },
  { input: "abc", output: 0 },
  { input: "123", output: 123 },
  { input: "", output: 0 },
  { input: "ab2c23d", output: 25 },
  { input: "geeks4geeks", output: 4 },
  { input: "1abc2x30yz67", output: 100 },
  { input: "123abc", output: 123 },
];

function testSumOfNumbersInString(tests) {
  let pass = 0;
  let fail = 0;
  for (const test of tests) {
    if (sumOfNumbersInString(test.input) === test.output) {
      pass += 1;
    } else {
      console.error("failed:", test);
    }
  }
  console.log({ pass, fail });
}

testSumOfNumbersInString(tests);
