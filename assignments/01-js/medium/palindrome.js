/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var str = str.toLowerCase();
  var length = str.length;
  var strr = "";
  for (let i = 0; i < length; i++) {
    if (str[i] >= 48 && str[i] <= 57) {
      strr += str[i];
    }
    if (str[i] >= "a" && str[i] <= "z") {
      strr = strr.concat(str[i]);
    }
  }
  length = strr.length;
  for (let i = 0; i < length; i++) {
    if (strr[i] != strr[length - i - 1]) {
      return false;
    }
  }
  return true;
}

// const palindrome = isPalindrome("race car");
// console.log(palindrome);

module.exports = isPalindrome;
