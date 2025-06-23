//Constructor Functions : 
//Constructor Functions are special type of functions,
//which act as a blueprint for creating multiple objects with same structure and properties



function createCar(name, company, color){
    this.name = name;
    this.company = company;
    this.color = color;
    this.drive = function(){
        console.log("I'm Driving a car");
    }
}

const car1 = new createCar('Nexon', 'Tata', 'white');
const car2 = new createCar('Hector', 'MG', 'white');

console.log(car1)
console.log(car2)

car1.drive();


















