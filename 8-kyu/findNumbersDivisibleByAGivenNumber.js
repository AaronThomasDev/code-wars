// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor) {
  const result = [];
  numbers.forEach((element) => {
    element % divisor === 0 ? result.push(element) : 0;
  });
  return result;
}

// https://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript
