/*20. Find All Indices of Element
Problem: Return an array of indices where a given value occurs.
Test Cases:
findIndices([1, 2, 1, 3], 1) ➞ [0, 2]
findIndices(['a', 'b', 'a'], 'a') ➞ [0, 2]
*/

function findIndices(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      indices.push(i);
    }
  }
  return indices;
}
console.log(findIndices([1, 2, 1, 3], 1));
console.log(findIndices(["a", "b", "a"], "a"));
