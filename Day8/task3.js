// Object Destructions
//Old Way
let person ={name:"ASad",age:26,coutry:"Pakistan"};
let name = person.name;
let age = person.age;
console.log(name,age);
//New Way

let user = {myname:"Asad Ullah", myage:26,country: "Pakistan"};
const {myname, myage,country}= user;
console.log(myname,myage,country);
// Challenge 
let car = {brand:"Toyota", model: "Corolla", year:2023};
const {brand,model}=car;
console.log(brand,model)