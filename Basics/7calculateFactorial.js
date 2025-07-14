/*
7. Calculate Factorial
Problem: Return the factorial of a number using a for loop.
Test Cases:
factorial(5) ➞ 120
factorial(0) ➞ 1

*/

function factorialOf(num) {
  let factorial = 0;
  if (num === 0 || num === 1) {
    factorial = 1;
  } else {
    factorial = num * factorialOf(num - 1);
  }
  return factorial;
}
console.log(factorialOf(5));
