let person1 = {
    firstName : 'Tim',
    lastName : 'David',
    age : 36,
}
let person2 = {
    firstName : 'Virat',
    lastName : 'Kohli',
    age : 36,

}

   let  printDetails = function(){
        console.log(`Hi I am ${this.firstName+" "+this.lastName} my age is ${this.age}`)
    }

printDetails.call(person2)





















