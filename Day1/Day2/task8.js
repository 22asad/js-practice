// for in loop for objects
let person = {name:"Asad", age:26, city: "Doha"};// initialized an object with some keys and values
// we will use a new variable to store the key from the person object 
for(let key in person){
    console.log(key+":"+person[key]);// here we used console to print the key value from the object
}
