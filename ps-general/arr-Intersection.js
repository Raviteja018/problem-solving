// Find Intersection of Two Arrays
// Input: [1, 2, 2, 1], [2, 2]
// Output: [2, 2]

let arr1 = [1,2,2,1];
let arr2 = [2,2,1];
let output = []

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i]);
            arr2[j] = 'anirudh';
            break;
        }
    }
}

console.log(output)