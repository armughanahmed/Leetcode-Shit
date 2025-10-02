/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    const bucket = [];

    for(let [num,freq] of map){
        if(!bucket[freq]){
            bucket[freq] = []
        }

        bucket[freq].push(num);
    }

    const ans = [];
    
    for (let i = nums.length;i>=0;i--) {
        if(bucket[i]){
            ans.push(...bucket[i])
            if(ans.length>=k){
                return ans;
            }
        }
    }

    return ans;
};