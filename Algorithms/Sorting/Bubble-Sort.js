let arr = [1,3,2,5,0,2,0];

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}

console.log(arr)