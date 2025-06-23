class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log(`welcome ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, rollno){
        super(name, age);
        this.rollno = rollno;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    test(){
        super.welcome()
    }
}

// const student1 = new Student('Ravi', 23, 21);
// console.log(student1)

const teacher1 = new Teacher('Padma', 36, "Mathematics");
// console.log(teacher1)
teacher1.test();











