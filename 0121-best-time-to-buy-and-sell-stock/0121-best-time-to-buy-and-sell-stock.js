/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0;
    let l=0;
    let r=l+1;
    while(r<prices.length){
        max = Math.max(max, prices[r]-prices[l]);
        if(prices[r]<prices[l]){
            l=r
        }

        r++;
    }

    return max;
};