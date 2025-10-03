/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;

    const numSet = new Set(nums);
    let maxCount = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let currentMax = 1;

            while (numSet.has(current + 1)) {
                current++;
                currentMax++;
            }

            maxCount = Math.max(maxCount, currentMax);
        }
    }

    return maxCount;
};