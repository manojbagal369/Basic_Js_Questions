/*
2. Count Positives and Negatives
Problem: Given an array of integers, return an object with the count of positive and negative numbers.
Test Cases:
countPosNeg([1, -2, 3, -4, 5]) ➞ {positive: 3, negative: 2}
countPosNeg([-1, -2, -3]) ➞ {positive: 0, negative: 3}
*/

function countPosNeg(arr) {
  let posNumCount = 0;
  let negNumCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negNumCount += 1;
    } else {
      posNumCount += 1;
    }
  }
  return { positive: posNumCount, negative: negNumCount };
}

console.log(countPosNeg([1, -2, 3, -4, 5]));
console.log(countPosNeg([-1, -2, -3]));
