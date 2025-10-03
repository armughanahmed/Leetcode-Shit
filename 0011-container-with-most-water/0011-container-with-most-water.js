/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;
    let j=height.length-1;
    let ans=0;
    while(i<j){
        const r = height[j];
        const l = height[i];
        const area = (j-i) * Math.min(r,l);
        ans = Math.max(area,ans);

        if(r < l){
            j--;
        }
        else if(l<r){
            i++;
        }
        else{
            if(height[i+1] < height[j-1]){
                i++;
            }
            else{
                j--;
            }
        }
    }

    return ans;
};