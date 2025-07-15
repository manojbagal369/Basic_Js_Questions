/*8. FizzBuzz Array
Problem: Generate an array of numbers from 1 to n. Replace multiples of 3 with "Fizz", 5 with "Buzz", and both with "FizzBuzz".
Test Cases:
fizzBuzz(5) ➞ [1, 2, "Fizz", 4, "Buzz"]
fizzBuzz(3) ➞ [1, 2, "Fizz"]
*/

function fizzBuzz(num) {
  let output = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  return output;
}

console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));

console.log(fizzBuzz(30));

/*Notes = We have to put the both condition of 3&5 on above for the heirarchy of execution
 */
