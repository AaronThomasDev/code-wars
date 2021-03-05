// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a, b) {
  let arr1 = a.split('');
  let arr2 = b.split('');
  let res = [];
  arr1.map((x) => (arr2.includes(x) ? null : res.push(x)));
  arr2.map((l) => (arr1.includes(l) ? null : res.push(l)));
  return res.join('');
}

// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/solutions/javascript
