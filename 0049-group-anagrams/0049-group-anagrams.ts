function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for(let i=0;i<strs.length;i++){
        const array = new Array(26).fill(0);
        for(let j=0;j<strs[i].length;j++){
            array[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]+=1;
        }

        const arrayStr = array.join(",");
        if(map.get(arrayStr)){
            const mapArray = map.get(arrayStr);
            mapArray.push(strs[i])
            map.set(arrayStr, mapArray);
        }else{
            map.set(arrayStr, [strs[i]]);
        }
    }

    return Array.from(map.values())
};