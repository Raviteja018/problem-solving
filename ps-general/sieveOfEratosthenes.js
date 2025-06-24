let n = 100;

let arr = Array(n).fill(true);

arr[0] = false;
arr[1] = false;

for(let i=2; i*i<=n; i++){
    // console.log(i);
    if(arr[i]){
    for(let j=i*i; j<=n; j=j+i){
        arr[j]= false;
        //console.log(j);
    }
    }
}

for(let k=0; k<n; k++){
    if(arr[k]){
        console.log(k)
    }
}