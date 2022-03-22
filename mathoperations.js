// Basic example of math operations in JavaScript

let x = 18;
let y = 32;

//addition
console.log(x+y);

//subtraction
console.log(x-y);

//multiplication
console.log(x*y);

//division
console.log(x/y);

//modulo (remainder)
console.log(x%y);


//add all numbers in an array
let nums = [12, 66, 43, 22];
let res = 0;

for(let b=0; b<4; b++) {
    res += nums[b];
}
console.log(res); 

//multiply all numbers in an array
let nums = [12, 66, 43, 22];
let res = 1;

for(let a=0; a<4; a++) {
    res *= nums[a];

}
console.log(res); 
