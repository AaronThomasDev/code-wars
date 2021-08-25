// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  //create array
  const arr = n.toString().split('');
  //reverse array
  arr.reverse();
  //convert strings in array to numbers
  let res = arr.map((number) => parseInt(number));
  //return array
  return res;
}

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript
