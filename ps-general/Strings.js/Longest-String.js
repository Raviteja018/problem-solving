// // Remove Duplicates from Array
// // Input: [1, 2, 2, 3, 4, 4, 5]
// // longestWordput: [1, 2, 3, 4, 5]

// // let str =  "I love JavaScript programming hdgdggrd";

// // let currentWord = "";
// // let longestWord = "";

// // for(let i=0; i<=str.length; i++){
// //     if(str[i] !== " " && i<str.length){
// //         currentWord += str[i];
// //         // console.log(i)
// //     }else if(str[i]===" " || i ===str.length){
// //         if(currentWord.length>longestWord.length){
// //             longestWord=currentWord;
// //         }
// //         currentWord = "";
// //     }
// // }

// // console.log(longestWord)

// // let str =  "I love JavaScript programming";

// // let res = str.split(' ');
// // let longest = res[0];

// // for(let i=1; i<res.length; i++){
// //     if(longest.length < res[i].length){
// //         longest = res[i];
// //     }
// // }
// // console.log(longest);


// let str = "I love javascript programming alskdjf;alskdjf;laskdj";
// let currentWord = "";
// let longestWord = "";

// for(let i=0; i<str.length; i++){
//     if( str[i] !== " " ){
//         currentWord += str[i];
//         if( i === str.length-1 ){
//             longestWord = currentWord;
//         }
//     }else if(str[i] === " " ){
//         if(currentWord.length > longestWord.length){
//             longestWord = currentWord;
//         }
//         currentWord = "";
//     }
// }
// console.log(longestWord)

// Find Intersection of Two Arrays
// Input: [1, 2, 2, 1], [2, 2]
// Output: [2, 2]

let arr1 = [1,2,2,2];
let arr2 = [2,2,1];
let out=[];
let i=0;
let j=0;

while(i<arr1.length||j<arr2.length){
    if(arr1[i]===arr2[j]){
        out.push(arr1[i])
        i++;
        j++;
    }
    else{
        i++
    }
    
}

console.log(out);






















