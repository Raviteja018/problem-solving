// let str = "toot";

// function Palindrome(str){
//   //converting string to lowercase
//   let lowerStr = "";
//   for(let i=0; i<str.length; i++){
//     let code = str.charCodeAt(i);
//     if(code >=65 && code<=90){
//       lowerStr += String.fromCharCode(code+32);
//     }else{
//       lowerStr += str[i];
//     }
//   }

//   let cleanStr = "";

//   //remove non-alpha numeric values
//   for(let i=0; i<lowerStr.length; i++){
//     let code = lowerStr.charCodeAt(i);
//     const isAlpha = (code >= 97 && code <= 122);
//     const isNumbers = (code >=48 && code <= 52);

//     if(isAlpha || isNumbers){
//       cleanStr += lowerStr[i]
//     }
//   }
//   let reversed = "";
//   for(let i=cleanStr.length-1; i>=0; i--){
//     reversed += cleanStr[i];
//   }
//   if(reversed === cleanStr){
//     return "Palindrome"
//   }else{
//     return "not a palindrome"
//   }
// }

// console.log(Palindrome(str))


let str = "eigg";
// let lowerStr = str.toLowerCase();
let revStr = "";

function Palindrome(str) {
  let lowerStr = "";
  for(let i=str.length-1; i>=0; i--){
    let code = str.charCodeAt(i);
    if(code>=65 && code <=90 ){
      lowerStr += code;
    }else{
      lowerStr += str[i]
    }
  }
  if(str === lowerStr){
    return "palindrome";
  }else{
    return "not a palindrome"
  }
}
console.log(Palindrome(str))











  // for(let i=lowerStr.length-1; i>=0; i--){
  //   revStr += lowerStr[i];
  // }

  // if(lowerStr===revStr) return "palindrome"
  // else return "not a palindrome"