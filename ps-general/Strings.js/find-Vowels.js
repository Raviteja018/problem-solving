
//without using buit-in methods

let str = "javascript";
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vowelsFound = [];

function findVowels(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsFound.push(str[i]);
        break;
      }
    }
  }
}

console.log(findVowels(str));


//with using built-in methods

function findVowels1(stri){
let result = [];
let vowels1 = "aeiouAEIOU";
    for(let char of stri){
        if(vowels1.includes(char)){
            result.push(char);
        }
    }
    return result
}

console.log(findVowels1("I love javascript"));












