let arr = ['hi', 'iam', 'ravi', 'teja'];
let out = []
for(let i=0; i<arr.length; i++){
    let firstLetter = arr[i][0].toUpperCase();
    for(let j=1; j<arr[i].length; j++){
        firstLetter += arr[i][j];
    }
        out.push(firstLetter)
}

console.log(out)


//using in-built methods

// let output = arr.map(ele => ele[0].toUpperCase()+ele.slice(1))
// console.log(output)














