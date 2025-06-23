// Input: "listen", "silent"
// Output: true

let str = "listen";
let strRev = "";

function Anagram(str){
    for(let i=str.length-1; i>=0; i--){
    strRev += str[i];
}
if (str === strRev){
    return true;
}else false;
}

console.log(Anagram(str))
