/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        while (i < nums.length && nums[i] == nums[i - 1]) {
            i++;
        }

        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            }
            else if (sum > 0) {
                k--;
            }
            else {
                j++;
            }
        }
    }

    return ans;
};