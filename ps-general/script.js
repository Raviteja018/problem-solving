// "use strict"
// console.log(this); 

// function myFun(){
//     console.log(this);
// }

// myFun()

// const obj = {
//     name : 'Ravi',
//     getObj : function (){
//         console.log(this);
//     }
// }

// obj.getObj()

// const obj1 = {
//     name: 'Ravi',
//     getObj: function(){
//         function myFun() {
//             console.log(this);
//         }
//         myFun()
//     }
// }

// obj1.getObj();


class createCar {
    constructor(name, company, color) {
        this.name = name;
        this.company = company;
        this.color = color;
        this.drive = function(){
            console.log(`I'm Driving ${this.company} car`);
        }
    }
      
}

const car1 = new createCar('X4', 'BMW', 'Red');
car1.drive()