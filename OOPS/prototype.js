let obj = {
    name : "Ravi",
    city : "Nizamabad"
}

console.log(obj);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
}

const person1 = new Person('Virat', 36);
console.log(person1);
