// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy';
  } else if (old <= 17) {
    return 'drink coke';
  } else if (old < 21) {
    return 'drink beer';
  } else if (old >= 21) {
    return 'drink whisky';
  }
}

// https://www.codewars.com/kata/56170e844da7c6f647000063/solutions/javascript
