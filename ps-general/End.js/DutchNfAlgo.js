let arr = [0, 2, 1, 2, 0, 1, ];
// Output: [0, 0, 1, 1, 2, 2]
let low = 0, mid = 0, high = arr.length-1;

while(mid <= high){
    if(arr[mid] === 0){
     [arr[mid], arr[low]] = [arr[low], arr[mid]];
     low++;
     mid++;
    }else if(arr[mid] === 1){
        mid++
    }else{
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
    }
}

console.log(arr)




























