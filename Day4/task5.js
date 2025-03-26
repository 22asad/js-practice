let number =[10,20,30,40,50,60,70];
let result = number.map(num=>num*2);
let result1 = result.filter(num=> num> 50);
let result2 = result1.reduce((ac,price)=>ac+price,0);
console.log(result)
console.log(result1)
console.log(result2)