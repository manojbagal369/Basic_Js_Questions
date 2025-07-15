/*
11. Check Palindrome String
Problem: Return true if the input string is a palindrome.
Test Cases:
isPalindrome("racecar") ➞ true
isPalindrome("hello") ➞ false

*/

function isPalindrome(str) {
  if (str.split("").join() === str.split("").reverse().join()) {
    return true;
  }
  return false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

/*
Notes

.split("")
splits the string in array
.join()
joins the splitted array back in string

by this we can compare bot thr strings

*/
