function printMids(str){
    let mid = Math.floor(str.length/2);
    if(str.length%2===0){
return str.slice(mid-1, mid+1)
    }else{
        return str.charAt(mid);
    }
}

console.log(printMids("javascrip "))















