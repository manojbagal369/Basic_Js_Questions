/*6. Filter Odd Numbers
Problem: Return a new array with only the odd numbers from the input array.
Test Cases:
filterOdds([1, 2, 3, 4, 5]) ➞ [1, 3, 5]
filterOdds([2, 4, 6]) ➞ []
*/

function filterOdds(arr) {
  let oddNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNum.push(arr[i]);
    }
  }
  return oddNum;
}

console.log(filterOdds([1, 2, 3, 4, 5]));
console.log(filterOdds([2, 4, 6]));
