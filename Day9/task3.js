// Using ES6 Calss Approach modern

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.model} was made in ${this.year}`;
    }
}
let car2 = new Car("Corolla",2024);
console.log(car2.getInfo());