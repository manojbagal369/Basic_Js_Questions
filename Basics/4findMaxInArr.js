/*4. Find Max in Array
Problem: Find the maximum value in an array using a for loop.
Test Cases:
findMax([3, 1, 7, 4]) ➞ 7
findMax([-5, -2, -10]) ➞ -2
*/

function findMax(arr) {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
console.log(findMax([3, 1, 7, 4]));
console.log(findMax([-5, -2, -10]));
