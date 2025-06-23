let arr = [12, 17, 70, 15, 22, 65, 21, 90];

// Output: [12, 70, 22, 90, 17, 15, 65, 21] (evens first, odds later)

let j=0;

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2===0){
        if(i!==j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
    }
}

console.log(arr)