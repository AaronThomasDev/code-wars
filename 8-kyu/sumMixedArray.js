// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  const numbers = x.map((e) => parseInt(e));
  const result = numbers.reduce(function (acc, cur) {
    return acc + cur;
  });
  console.log(result);
}

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
