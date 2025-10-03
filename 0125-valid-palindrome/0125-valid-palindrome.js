/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let tempS='';
    for(let i=0;i<s.length;i++){
        if((s[i] >='a' && s[i] <='z') || (s[i] >='A' && s[i] <='Z')
            || (s[i] >='0' && s[i] <='9')
        ){
            tempS+=s[i];
        }   
    }

    tempS = tempS.toLowerCase();

    let i=0;
    let j=tempS.length-1;
    while(i<=j){
        if(tempS[i]!=tempS[j]){
            return false;
        }

        i++;
        j--;
    }

    return true;
};