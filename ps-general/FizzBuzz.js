// . FizzBuzz from 1 to n
// Input: 15
// Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

let input = 15;

for (let i = 1; i <= input; i++) {
  if ( i % 5 === 0 && i % 3 ===0 ) {
    console.log("FizzBuzz");
  }else if(i % 5 ===0 ){
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
