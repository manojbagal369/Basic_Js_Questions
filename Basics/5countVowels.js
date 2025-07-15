/*
5. Count Vowels in a String
Problem: Return the number of vowels in a given string.
Test Cases:
countVowels("hello") ➞ 2
countVowels("xyz") ➞ 0
countVowels("AEIOU") ➞ 5

*/
function countVowels(str) {
  // let vowels = "aeiouAEIOU";
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.find((item) => item === str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));
console.log(countVowels("xyz"));
console.log(countVowels("AEIOU"));

/* 
NOTES
In JavaScript, .includes() is a method used to check if an element or substring exists within:

an array (to check for an element)

or a string (to check for a substring)

✅ Syntax:
For arrays:
js
Copy code
array.includes(element, start)
element: the value to search for

start (optional): the position to start searching from (default is 0)

For strings:
js
Copy code
string.includes(substring, start)
*/
