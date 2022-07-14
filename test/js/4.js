var threeSum = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = n - 1;
    let target = -nums[first];
    twoSum(nums, target, first, third, ans);
  }
  return ans;
};
var twoSum = (nums, target, first, third, ans) => {

  for (let second = first + 1; second < nums.length; second++) {
    if (second > first + 1 && nums[second] === nums[second - 1]) {
      continue;
    }
    while (second < third && (nums[second] + nums[third]) > target) {
      --third;
    }
    if (second === third) {
      break;
    }
    if (nums[second] + nums[third] === target) {
      let list = [];
      list.push(nums[first]);
      list.push(nums[second]);
      list.push(nums[third]);
      ans.push(list);
    }
  }
}
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));