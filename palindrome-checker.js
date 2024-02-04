function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lower case
  let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();

  let splited = cleanedStr.split("");
  let rev = [];

  for (let i = splited.length - 1; i >= 0; i--) {
    rev.push(splited[i]);
  }

  let revs = rev.join('');

  if (cleanedStr === revs) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("race car")); // Should return true
