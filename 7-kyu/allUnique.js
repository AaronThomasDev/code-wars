// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str) {
  const arr = str.split('');
  const uniqueArr = new Set(arr);
  if (uniqueArr.size === arr.length) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/553e8b195b853c6db4000048/solutions/javascript
