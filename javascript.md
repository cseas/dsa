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
const arr = Array(3).fill(0); // [0, 0, 0]

// Add/remove elements by mutating original array
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // 3
[1, 2, 3].shift(4); // [4, 1, 2, 3]
[1, 2, 3].unshift(); // 1

// convert to string
[1, 2, 3].join(" "); // "1 2 3"
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

// check if map has a key
map.has(0); // true

// get value of a key
map.get(0); // 42
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
```
