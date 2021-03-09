// https://www.geeksforgeeks.org/find-pair-with-greatest-product-in-array/

function greatestProduct(input: Array<number>): number {
  // sort in descending order
  const sortedInput: Array<number> = input.sort((a, b) => b - a);

  for (let i = 0; i < sortedInput.length; i += 1) {
    for (let j = i + 1; j < sortedInput.length; j += 1) {
      if (sortedInput.slice(0, j).includes(sortedInput[i] * sortedInput[j])) {
        return sortedInput[i] * sortedInput[j];
      }
    }
  }
  return -1;
}

interface Test {
  input: Array<number>;
  output: number;
}

const tests: Array<Test> = [
  { input: [10, 3, 5, 30, 35], output: 30 },
  { input: [0, 0, 0, 0], output: 0 },
  { input: [1, 1, 1, 1], output: 1 },
  { input: [2, 1, 2, 1], output: 2 },
  { input: [45, 15, 3, 60], output: 45 },
  { input: [2, 3, 5, 7, 9], output: -1 },
  { input: [2, 5, 7, 8], output: -1 },
  { input: [10, 2, 4, 30, 35], output: -1 },
  { input: [10, 2, 2, 4, 30, 35], output: 4 },
  { input: [17, 2, 1, 35, 30], output: 35 },
];

function runTests(tests: Array<Test>) {
  let pass = 0,
    fail = 0;
  for (const test of tests) {
    if (greatestProduct(test.input) === test.output) {
      pass += 1;
    } else {
      fail += 1;
    }
  }
  console.log({ pass, fail });
}

runTests(tests);
