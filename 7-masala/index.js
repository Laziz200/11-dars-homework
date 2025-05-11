let num=Number(prompt("arrayga nechta son kiritasiz?"));
let arr=[];
for (let i = 1; i <= num; i++) {
    let num1=Number(prompt(`${i}-sonni kiriting:`));
    arr.push(num1);
}
console.log(arr);

let count=0;
for (let i = 0; i < arr.length; i++) {
    count+=arr[i];
}
if (count>=0) {
    console.log(true);
    
}
else{
    console.log(false);
    
}