/*
19. Convert Celsius to Fahrenheit
Problem: Convert an array of Celsius values to Fahrenheit using map.
Test Cases:
convertToFahrenheit([0, 100]) ➞ [32, 212]
convertToFahrenheit([-40]) ➞ [-40]
*/

function convertToFahrenheit(arr) {
  let farValue = [];
  for (let i = 0; i < arr.length; i++) {
    farValue.push(arr[i] * 1.8 + 32);
  }
  return farValue;
}

console.log(convertToFahrenheit([0, 100]));
console.log(convertToFahrenheit([-40]));
