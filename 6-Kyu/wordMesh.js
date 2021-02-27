// You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

// Examples of meshed words:

// "apply" and "plywood"

// "apple" and "each"

// "behemoth" and "mother"

// Examples of words that do not mesh:

// "apply" and "playground"

// "apple" and "peggy"

// "behemoth" and "mathematics"

// If all the words in the given array mesh together, then your code should return the meshed letters in a string. You won't know how many letters the meshed words have in common, but it will be at least one.

// If any pair of consecutive words fails to mesh, your code should return "failed to mesh".

// Input: An array of strings. There will always be at least two words in the input array.

// Output: Either a string of letters that mesh the words together or the string "failed to mesh".

function wordMesh(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const foundWords = compareWords(arr[i], arr[i + 1]);
    if (foundWords === false) {
      return 'failed to mesh';
    } else {
      result.push(foundWords);
    }
  }
  return result.join('');
}

function compareWords(searchWord, testWord) {
  let found = false;

  while (searchWord.length > 0 && found == false) {
    found = testWord.startsWith(searchWord);
    if (!found) searchWord = searchWord.substring(1);
    console.log(searchWord);
    console.log('found = ' + found);
  }
  if (!found) return false;
  return testWord.startsWith(searchWord) ? searchWord : false;
}

// https://www.codewars.com/kata/5c1ae703ba76f438530000a2/solutions/javascript
