let arr = ["cow", "pig", "cow", "cow"];
let newarr = [];

let countMap = {};
for (let item of arr) {
    countMap[item] = (countMap[item] || 0) + 1;
}

for (let item of new Set(arr)) {
    if (countMap[item] > 1) {
        newarr.push(item + "s");
    } else {
        newarr.push(item);
    }
}

console.log(newarr);