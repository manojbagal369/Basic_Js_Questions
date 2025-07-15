/*17. Sum Numbers Greater Than 10
Problem: Return the sum of all numbers greater than 10 in an array.
Test Cases:
sumGreaterThanTen([5, 12, 8, 20]) ➞ 32
sumGreaterThanTen([1, 2]) ➞ 0
*/

function sumGreaterThanTen(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumGreaterThanTen([5, 12, 8, 20]));
console.log(sumGreaterThanTen([1, 2]));
