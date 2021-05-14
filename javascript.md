# JavaScript snippets

## Index

- [Arrays](#arrays)
- [Objects](#objects)
- [Maps](#maps)
- [Math](#math)
- [Strings](#strings)

## Arrays

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

// Array of zeros
const a = Array(3).fill(0); // [0, 0, 0]
// (Faster) Array of zeros
let a = new Array(3); for (let i=0; i<n; ++i) a[i] = 0;

// Add/remove elements by mutating original array
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // 3
[1, 2, 3].shift(4); // [4, 1, 2, 3]
[1, 2, 3].unshift(); // 1

// convert to string
[1, 2, 3].join(" "); // "1 2 3"

// get elements of array that satisfy a condition
[{a:0,b:1}, {a:2,b:3}].find(({ a }) => a === 0); // {a:0,b:1}
```

## Objects

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

## Maps

```js
const map = new Map();

// store key, value pair
map.set(0, 42);

// check if map has a key: O(1)
map.has(0); // true

// get value of a key
map.get(0); // 42

// delete entry from map
map.delete(0); // removes (0, 42) from map

// check if map has a value: O(n)
Array.from(map.values()).includes(42); // true
```

## Math

```js
// square root
Math.sqrt(4); // 2
```

## Strings

```js
// change case
"AbcD".toLowerCase(); // "abcd"
"abCd".toUpperCase(); // "ABCD"

// search substring index
"abcd".search("cd"); // 2
"abcd".search("e"); // -1

// compare two strings
"a".localeCompare("b"); // -1
"ca".localeCompare("b"); // 1
```
