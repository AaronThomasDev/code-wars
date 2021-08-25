// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

// function century(year) {
//   if (year % 100 === 0) {
//     return Math.floor(year / 100);
//   }
//   return Math.floor(year / 100 + 1);
// }

function century(year) {
  return math.ceil(year / 100);
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript
