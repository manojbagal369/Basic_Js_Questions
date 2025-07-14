/*
1. Sum of Even Numbers
Problem: Write a function that returns the sum of all even numbers in an array.
Test Cases:
sumEvenNumbers([1, 2, 3, 4, 5]) ➞ 6
sumEvenNumbers([10, 11, 12]) ➞ 22
sumEvenNumbers([]) ➞ 0

*/

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumEvenNumbers([10, 11, 12]));
console.log(sumEvenNumbers([]));
