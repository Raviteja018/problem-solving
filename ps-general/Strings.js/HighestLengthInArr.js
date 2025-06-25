let arr = ["Hi", "Hello", "Wow", "Henry", "Jarvi"];
let maxLength = 0;
let result = [];

for(let i=0; i<arr.length; i++){
    if(arr[i].length > maxLength) maxLength = arr[i].length;
}

for(let i=0; i<arr.length; i++){
    if(arr[i].length === maxLength) result.push(arr[i])
}

console.log(result)
