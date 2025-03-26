// Understanding the reduce()
//reduce() processes elements and returns a single value (eg, sum,max,min)
// Calculate the total of bill from an array of prices
let prices = [100,200,300];
let totalBill = prices.reduce((ac,pric)=>ac+pric,0);
console.log(totalBill)