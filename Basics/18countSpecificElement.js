/*18. Count Specific Element
Problem: Count the occurrences of a specific element in an array.
Test Cases:
countElement([1, 2, 1, 3], 1) ➞ 2
countElement(['a', 'b', 'a'], 'a') ➞ 2
*/

function countElement(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      count++;
    }
  }
  return count;
}
console.log(countElement([1, 2, 1, 3], 1));
console.log(countElement(["a", "b", "a"], "a"));
