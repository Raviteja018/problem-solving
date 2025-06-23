let arr = [];
let n = 100;

for(let i=3; i<=n; i++){
    let prime = true;
    for(let j=2; j<i; j++){
        if(i%j===0){
            prime = false;
            break;
        }
    }
    if(prime){
        arr.push(i);
    }
}

console.log(arr)