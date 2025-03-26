// Task: Declare variables of different data types and print their types.
let name = "Asad";
let age = 26;
let isStudent = false;
let hobbies = ["Coding","Rading"];
let person = {name:"Dani", age:27};
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof person);
// Challenge: Conver the age into String and the name to upper case
// The toString method and toUpperCase Method cannot change the original values so we have to declare new varaibales and store the updated value into it
let uppr = name.toUpperCase();
let str=age.toString();
console.log(uppr)
console.log(str)