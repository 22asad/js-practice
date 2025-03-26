// Write a function counter() that returns a function to increase and return a count.
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    } ;

};
let countUp = counter();
console.log(countUp());
console.log(countUp())