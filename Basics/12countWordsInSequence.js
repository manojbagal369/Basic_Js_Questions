/*12. Count Words in a Sentence
Problem: Return the number of words in a given string.
Test Cases:
countWords("Hello world") ➞ 2
countWords("OpenAI is amazing") ➞ 3
*/

function countWords(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count = str.split(/\s+/).length;
  }
  return count;
}

console.log(countWords("Hello world"));
console.log(countWords("OpenAI is amazing"));

/*

*/
