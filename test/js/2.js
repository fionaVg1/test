const isPalindrome = (charArray, left, right) => {
  while (left < right) {
    if (charArray[left] != charArray[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}

var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let maxLen = 1;
  let begin = 0;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }
  let charArray = s.split('');
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      let j = L + i - 1;
      if (j > len) {
        break;
      }
      if (charArray[i] != charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};