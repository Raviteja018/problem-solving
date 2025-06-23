//selection Sort

let arr =[2,4,1,6,0,9,7,3,2,4,5,0,1];

for(let i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

console.log(arr);