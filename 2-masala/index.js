function strStr(haystack, needle) {
    if (needle === "") return 0;
    let n = needle.length;
    
    for (let i = 0; i <= haystack.length - n; i++) {
        if (haystack.substring(i, i + n) === needle) {
            return i;
        }
    }
    return -1;
}

console.log(strStr("know", "nows"));
console.log(strStr("sadbutsad", "sad")); 