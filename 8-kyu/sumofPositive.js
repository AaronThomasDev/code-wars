// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let total = 0;
  arr.forEach((x) => {
    Math.sign(x) === 1 ? (total += x) : 0;
  });
  return total;
}

// https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
