let arr = [12, 3, 45, 499, 36, 45, 34];
let max = -Infinity;
let secMax = -Infinity;
    for(let j=0; j<arr.length; j++){
        if(arr[j] > max)
        secMax = max;
        max = arr[j]
        if(arr[j]>secMax){
            secMax=arr[j]
        }
        // console.log(arr[j])
    }
    console.log(secMax)