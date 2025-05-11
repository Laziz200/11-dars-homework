function myStringSplice(str, start, deleteCount, ...items) {
    let len = str.length;

    if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    deleteCount = deleteCount === undefined ? len - start : Math.max(0, deleteCount);
    deleteCount = Math.min(deleteCount, len - start);

    let removed = str.slice(start, start + deleteCount);

    let newString = "";
    
    newString += str.slice(0, start);
    
    newString += items.join("");
    
    newString += str.slice(start + deleteCount);

    return {
        modifiedString: newString,
        removed: removed
    };
}

let str = "Salom Dunyo";

let result1 = myStringSplice(str, 6, 5, "Qalesan");
console.log(result1.modifiedString); 
console.log(result1.removed);
