/*
13. Square All Numbers
Problem: Return a new array where each number is squared.
Test Cases:
squareNumbers([1, 2, 3]) ➞ [1, 4, 9]
squareNumbers([0, -2]) ➞ [0, 4]

*/

function squareNumbers(arr) {
  let squaredNum = [];
  for (let i = 0; i < arr.length; i++) {
    squaredNum.push(arr[i] * arr[i]);
  }
  return squaredNum;
}

console.log(squareNumbers([1, 2, 3]));
console.log(squareNumbers([0, -2]));
