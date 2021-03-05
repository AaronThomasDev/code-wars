// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// The set of used punctuation is .!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
  let arr = words.toUpperCase().split('');
  let res = [];
  arr.forEach((element) => {
    switch (element) {
      case 'A':
        res.push('Alfa');
        break;
      case 'B':
        res.push('Bravo');
        break;
      case 'C':
        res.push('Charlie');
        break;
      case 'D':
        res.push('Delta');
        break;
      case 'E':
        res.push('Echo');
        break;
      case 'F':
        res.push('Foxtrot');
        break;
      case 'G':
        res.push('Golf');
        break;
      case 'H':
        res.push('Hotel');
        break;
      case 'I':
        res.push('India');
        break;
      case 'J':
        res.push('Juliett');
        break;
      case 'K':
        res.push('Kilo');
        break;
      case 'L':
        res.push('Lima');
        break;
      case 'M':
        res.push('Mike');
        break;
      case 'N':
        res.push('November');
        break;
      case 'O':
        res.push('Oscar');
        break;
      case 'P':
        res.push('Papa');
        break;
      case 'Q':
        res.push('Quebec');
        break;
      case 'R':
        res.push('Romeo');
        break;
      case 'S':
        res.push('Sierra');
        break;
      case 'T':
        res.push('Tango');
        break;
      case 'U':
        res.push('Uniform');
        break;
      case 'V':
        res.push('Victor');
        break;
      case 'W':
        res.push('Whiskey');
        break;
      case 'X':
        res.push('Xray');
        break;
      case 'Y':
        res.push('Yankee');
        break;
      case 'Z':
        res.push('Zulu');
        break;
      case '!':
        res.push('!');
        break;
      case '?':
        res.push('?');
        break;
      case ',':
        res.push(',');
        break;
      case '.':
        res.push('.');
        break;
    }
  });
  return res.join(' ');
}

// https://www.codewars.com/kata/586538146b56991861000293/solutions/javascript
