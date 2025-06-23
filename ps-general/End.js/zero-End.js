//  Move Zeros to End
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// let arr = [ 0, 1, 0, 3, 12 ];
// let res1 = [];
// let res2 = [];
// let result = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== 0){
//         res1.push(arr[i])
//     }else res2.push(arr[i])
// }

// result = res1.concat(res2)
// console.log(result);

let arr = [8, 1, 0, 3, 12];
let j = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    if (i !== j) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    j++;
  }
}

console.log(arr);



