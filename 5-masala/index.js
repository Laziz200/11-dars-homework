function mySlice(input, start, end) {
    let isString = typeof input === "string";
    let len = input.length;
    start = start === undefined ? 0 : start;
    end = end === undefined ? len : end;


    if (start < 0) {
        start = Math.max(len + start, 0);
    }
    if (end < 0) {
        end = Math.max(len + end, 0);
    }


    start = Math.min(start, len);
    end = Math.min(end, len);

    if (isString) {
        let result = "";
        for (let i = start; i < end; i++) {
            result += input[i];
        }
        return result;
    } else {
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(input[i]);
        }
        return result;
    }
}

let massiv = ["Salom", "Dunyo", "Qalesan"];
let str = "Salom Dunyo";

console.log(mySlice(massiv, 1, 3)); 
console.log(mySlice(str, 0, 5)); 
console.log(mySlice(massiv, -2)); 
console.log(mySlice(str, -5)); 