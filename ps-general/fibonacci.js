// //0 1 1 2 3 5 8 13 21 34

// function fibonacci(n){
//     if(n<0) return;
    
//     let prev = 0, curr=1, next;
//     console.log(prev);
//     if(n===1) return;
//     console.log(curr)
//     for(let i=2; i<=n; i++){
//         next = prev + curr;
//         console.log(next);
//         prev = curr;
//         curr = next;
//     }
// }

// console.log(fibonacci(10));

function fibonacci(n) {
  let dp = [];

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <=n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
}

console.log(fibonacci(10))





















