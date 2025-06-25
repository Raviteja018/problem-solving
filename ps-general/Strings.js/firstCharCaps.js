let str = "hello world";
let out = "";
for(let i=0;i<str.length;i++){
    let firstLetter;
    if(i === 0 || str[i-1] === " "){
        firstLetter = str[i].toUpperCase();
        out += firstLetter;
    }else{
        out += str[i]
    }
}
console.log(out);











