function Person(name, age){
    this.name = name;
    this.age = age;

}

    Person.prototype.getNameAndAge = function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }

const person1 = new Person('Virat', 36);
console.log(person1)

const person2 = new Person('Rajat', 30);
console.log(person2);