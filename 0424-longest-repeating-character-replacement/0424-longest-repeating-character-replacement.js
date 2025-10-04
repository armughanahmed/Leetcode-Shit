/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0;
    let maxCharCount = 0;
    let ans = 0;
    const map = new Map();
    for(let r=0;r<s.length;r++){
        map.set(s[r],(map.get(s[r]) || 0) + 1);
        maxCharCount = Math.max(maxCharCount,map.get(s[r]));
        while((r-l+1)-maxCharCount>k){
            map.set(s[l],(map.get(s[l]) || 0) - 1);
            l++;
        }

        ans = Math.max(ans,r-l+1);
    }

    return ans;
};