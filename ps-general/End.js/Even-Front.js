// Move all even numbers to the front of the array
let arr = [ 1, 3, 2, 4, 5, 6 ];
// Output: [2, 4, 6, 3, 5, 1]

let j=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        if(i!==j){
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        j++
    }
}

console.log(arr);