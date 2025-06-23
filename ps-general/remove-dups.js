let arr =  [1, 2, 2, 3, 4, 4, 5];
// output = [1, 2, 3, 4, 5];

let output = [];

for(let ele of arr){
    if(!output.includes(ele)){
        output.push(ele);
    }
}

console.log(output);





// const arr = [1, 2, 2, 3, 4, 4, 5];

// const unique = arr.filter((value, index) => arr.indexOf(value)=== index)
// console.log(unique)