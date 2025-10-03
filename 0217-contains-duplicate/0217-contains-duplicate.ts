function containsDuplicate(nums: number[]): boolean {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0 )+ 1)
    }

    for(let i=0; i<nums.length;i++){
        if(map.get(nums[i]) != 1){
            return true;
        }
    }

    return false;
};