// using contructors
function Car(model,year){
    this.model=model;
    this.year=year;
}
Car.prototype.getInfo=function(){
    return`${this.model} was made in ${this.year}`;
}
let myCar = new Car("Corolla",2023);
console.log(myCar.getInfo());