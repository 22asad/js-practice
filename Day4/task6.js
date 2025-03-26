// Understanding the concept of object
//Objects in JavaScript store data as key-value pairs, and object methods allow us to manipulate and interact with object properties. 
// objects can be created using object literals or new object() syntax
let person = {
    name: "Asad Ullah", 
    age: 26,
    profession: "Software Engineering",
    country: "Pakistan"
}
person.email = "asad@gmail.com";
person.age = 27;
delete person.country;
console.log(person)