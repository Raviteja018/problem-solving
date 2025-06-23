let arr = [3,2,7,1,4,6,9];
let j =0;
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        let temp = arr[i];
        while(i>j){
            arr[i]=arr[i-1]
            i--
        }
        arr[j]=temp
        j++;
    }
}

console.log(arr)