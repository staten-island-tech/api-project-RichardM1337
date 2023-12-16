function combineStrings(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  const maxLength = Math.max(length1, length2);
  let result = "";
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
const combined = combineStrings("hello", "world");
console.log(combined); // Output: 'hweolrllod'
