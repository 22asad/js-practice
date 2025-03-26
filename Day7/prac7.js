//  Task: Create an object representing a car and print its details.
let car ={
    brand: "Toyota",
    modle: "Camry",
    year:2022,
    start: function(){
        console.log("Car is Starting...");
    }
}
console.log(car.brand,car.modle,car.year);
car.start();