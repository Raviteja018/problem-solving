let str = "hello";
let reverseStr = "";

// for(let i=str.length-1; i>=0; i--){
//     reverseStr += str[i];
// }

// console.log(reverseStr);

// let reveresed = str.split("").reverse().join("");
// console.log(reveresed)

let reveresed = str.split("").reduce((rev, char) => char+rev,"")
console.log(reveresed)