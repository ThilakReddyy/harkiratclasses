/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let str1dict = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in str1dict) {
      str1dict[str1[i]] = str1dict[i] + 1;
    } else {
      str1dict[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in str1dict) {
      if (str2[str2[i]] == 0) {
        return false;
      }
      str2[str2[i]] = str2[str2[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
