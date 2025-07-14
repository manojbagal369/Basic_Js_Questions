/*
3. Double the Array Elements
Problem: Write a function that doubles each number in an array and returns the new array.
Test Cases:
doubleArray([1, 2, 3]) ➞ [2, 4, 6]
doubleArray([0, -1, 4]) ➞ [0, -2, 8]
*/

function doubleArray(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return doubled;
}

console.log(doubleArray([1, 2, 3]));
console.log(doubleArray([0, -1, 4]));
