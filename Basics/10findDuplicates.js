/*10. Find Duplicates
Problem: Return an array of duplicate values from the input array.
Test Cases:
findDuplicates([1, 2, 3, 2, 1]) ➞ [2, 1]
findDuplicates([1, 2, 3]) ➞ []
*/

function findDuplicates(arr) {
  return arr.filter(function (value, index) {
    return arr.indexOf(value) !== index;
  });
}

console.log(findDuplicates([1, 2, 3, 2, 1]));
console.log(findDuplicates([1, 2, 3]));
