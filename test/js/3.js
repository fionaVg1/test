var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length === 0) {
    return '';
  } else {
    let start = 0, end = strs.length - 1;
    if (start === end) {
      return strs[start];
    } else {
      return _longestCommonPrefix(strs, 0, strs.length - 1);
    }
  }
};

var _longestCommonPrefix = function (strs, start, end) {
  if (start == end) {
    return strs[start];
  } else {
    let mid = parseInt((end - start) / 2 + start);
    let lcpLeft = _longestCommonPrefix(strs, start, mid);
    let lcpRight = _longestCommonPrefix(strs, mid + 1, end);
    return commonPrefix(lcpLeft, lcpRight);
  }
}

var commonPrefix = function (lcpLeft, lcpRight) {
  let minLength = Math.min(lcpLeft.length, lcpRight.length)
  for (let i = 0; i < minLength; i++) {
    if (lcpLeft.charAt(i) != lcpRight.charAt(i)) {
      return lcpLeft.substring(0, i);
    }
  }
  return lcpLeft.substring(0, minLength);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))