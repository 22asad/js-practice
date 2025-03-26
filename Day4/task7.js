// Methods inside object
let car = {
    brand:"Toyota",
    model: "Corolla",
    year: 2022,

    //Object Method
    getCarInfo: function(){
        return `${this.brand} ${this.model} ${this.year}`
    }
}
console.log(car.getCarInfo());
