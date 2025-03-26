// Understanding prototype
let obj= {name:"Asad",age:26};
console.log(Object.getPrototypeOf(obj));
//Modifying a prototype
function Person(myname){
    this.myname = myname;
}
Person.prototype.sayHello = function(){
    console.log(`Hello my name is ${this.myname}`);
}
let person1 = new Person("Asad");
person1.sayHello();