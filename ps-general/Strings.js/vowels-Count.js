// Count vowels in a string
// Input: "javascript"
// Output: 3

let str = "I love javascript";

function vowelCount(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(vowelCount(str));
































