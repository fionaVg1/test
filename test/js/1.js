/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let list = trimSpaces(s);
  reverse(list, 0, list.length - 1);
  reverseEachWord(list);
  console.log(list.join(''));
  return list.join('');
};
var trimSpaces = function (s) {
  let left = 0, right = s.length - 1;
  while (left <= right && s[left] == ' ') {
    left += 1;
  }
  while (left <= right && s[right] == ' ') {
    right -= 1;
  }
  output = [];
  while (left <= right) {
    if (s[left] != ' ') {
      output.push(s[left]);
    } else if (output[output.length - 1] != ' ') {
      output.push(s[left]);
    }
    left += 1;
  }
  return output;
}

var reverse = function (list, left, right) {
  while (left < right) {
    const temp = list[right];
    list[right] = list[left];
    list[left] = temp;
    left++;
    right--;
  }
}

var reverseEachWord = function (list) {
  let len = list.length;
  let start = 0, end = 0;
  while (start < len) {
    while (end < len && list[end] != ' ') {
      end += 1;
    }
    reverse(list, start, end - 1);
    start = end + 1;
    end += 1;
  }
}
reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");