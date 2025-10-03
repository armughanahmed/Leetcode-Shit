/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = [];
    let prefixSum=1;
    for(let i=0;i<nums.length;i++){
        ans[i]=prefixSum;
        prefixSum = prefixSum*nums[i];
    }

    prefixSum=1;

    for(let i=nums.length-1;i>=0;i--){
        ans[i]= ans[i]*prefixSum;
        prefixSum=prefixSum*nums[i];
    }

    return ans;
};