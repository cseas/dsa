# JavaScript snippets

Iterate on an object

```js
const obj = { a: 1, b: 2 };

// Array of keys of an object
const keys = Object.keys(obj); // ["a", "b"]

// Array of values of an object
const values = Object.values(obj); // [1, 2]

// Array of entries of an object
const entries = Object.entries(obj); // [ ["a", 1], ["b", 2] ]
```

> Use Maps if you want the keys to be something other than strings

Arrays

```js
const arr = [4, 3, 7];

// Sum of all values of array
const sum = arr.reduce((a, b) => a + b); // 14

// Sort array of numbers in ascending order
arr.sort((a, b) => a - b); // [3, 4, 7]

// Sort array of numbers in descending order
arr.sort((a, b) => b - a); // [7, 4, 3]

// Sort array without mutating original
const sorted = [...arr].sort((a, b) => a - b);
```

Maps

```js
const map = new Map();

// store key, value pair
map.set(0, 42);

// check if map has a key
map.has(0); // true
```
