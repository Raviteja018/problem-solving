//classes
//classes work similar to constructors but these are introduced in ES6 features 
//which provide more cleaner and structured syntax



class CreateCar{
    constructor(model, company, color){
        this.model = model,
        this.company = company,
        this.color = color
    }
    drive(){
        console.log("Iam driving this car");
    }
}

const car1 = new CreateCar('Nexon', 'TATA', 'White');

console.log(car1)
car1.drive();