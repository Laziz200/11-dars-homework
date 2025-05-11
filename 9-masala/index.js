let arr=[1,9,8,8,7,6,1,6];
let newarr=[];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j]!=arr[i]) {
            newarr.push(arr[i]);
        }
    }
}
console.log(newarr);
