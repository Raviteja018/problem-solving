// Input: [1, 2, 3, 2, 4, 1]
// Output: [1, 2]

let arr = [1,2,3,2,4,1];
let obj ={}
let out = []

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
        obj[arr[i]] += 1;
    }else{
        obj[arr[i]] = 1
    }
}
console.log(obj)
for(let key in obj){
    if(obj[key] > 1){
        out.push(+(key));
    }
}
console.log(out)