/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0;    
    let max=0;
    const map = new Map();
    for(let r=0;r<s.length;r++){
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        while(map.get(s[r]) > 1){
            map.set(s[l], (map.get(s[l]) || 0) - 1);
            l++;
        }

        max = Math.max(max,r-l+1);
    }

    return max;
};