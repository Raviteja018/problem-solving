// function Person(name, age){
//     var name = name;
//     this.age = age;
    
//     this.getName = function(){
//         return name;
//     }
// }

// const person1 = new Person('steve', 25);

// person1.name = 'smith';

// console.log(person1.getName());

class Person{
    #name;
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }

    getName(){
        return this.#name;
    }
}

const person1 = new Person('steve', 25);
person1.name = 'smith';
console.log(person1)
person1.getName();













