// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  let firstLetter = name[0].toUpperCase();
  let secondLetter = name.substring(name.indexOf(' ') + 1).toUpperCase();
  return `${firstLetter}.${secondLetter[0]}`;
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript
