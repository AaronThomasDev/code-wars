// Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

// maxRedigit(123); // returns 321

var maxRedigit = function (num) {
  if (num <= 0 || num.toString().length != 3) return null;
  return Number(num.toString().split('').sort().reverse().join(''));
};

// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/solutions/javascript
