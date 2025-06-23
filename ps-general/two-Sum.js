// Two Sum
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// let arr = [ 2, 11, 5, 15, 5 ];
// let output = []

// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         if(arr[i]+arr[j] === 10 && i !== j){
//             output.push(i,j)
//         }
//     }
// }

// console.log(output);


let arr = [ 2, 11, 5, 15, 5 ];
let target = 7;

let map = new Map();
let out = [];

for(let i=0; i<arr.length; i++){
    let sum =  target-arr[i];  //5
    if(map.has(arr[i])){
        out.push([map.get(arr[i]),i]);
    }
    map.set(sum,i);
}

console.log(out);










