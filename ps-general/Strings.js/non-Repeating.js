// First Non-Repeating Character
// Input: "leetcode"
// Output: "l"


// let input = "leetcode";
// let output = "";

// for(let i=0; i<input.length; i++){
//     for(let j=i; j<input.length; j++){
//         if(input[i] !== input[j]){
//             output = input[i];
//             break;
//         }
//     }
//     if(output) break;
// }

// console.log(output)


let input = "leetcode";
let output;

for(let char of input){
    if(input.indexOf(char) === input.lastIndexOf(char)){
        output = char;
        break;
    }
}
console.log(output)







