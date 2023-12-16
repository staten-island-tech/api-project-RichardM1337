string = [];
function Gabe(word1, word2) {
  if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
    string.push(word1[word1.length - 1]);
  }
  if (word1.length < word2.length) {
    for (let i = 0; i < word1.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
    string.push(word2[word2.length - 1]);
  }
  if (word1.length === word2.length) {
    for (let i = 0; i < word2.length; i++) {
      string.push(word1[i]);
      string.push(word2[i]);
    }
  }
}
Gabe("hello", "world");
const newstring = string.join("");
console.log(newstring);


function combineStrings(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  const maxLength = Math.max(length1, length2);
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    if (i < length1) {
      result += str1[i];
    }
    if (i < length2) {
      result += str2[i];
    }
  }

  return result;
}

// Example usage:
const combined = combineStrings('hello', 'world');
console.log(combined); // Output: 'hweolrllod'