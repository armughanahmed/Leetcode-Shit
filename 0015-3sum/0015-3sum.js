/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) - 1);
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length; j++) {
            map.set(nums[j], map.get(nums[j]) - 1);
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            const diff = -(nums[i] + nums[j]);
            if (map.get(diff) > 0) {
                ans.push([nums[i], nums[j], diff]);
            }
        }

        for(let j = i + 1; j < nums.length; j++){
            map.set(nums[j], map.get(nums[j]) + 1);
        }
    }

    return ans;
};