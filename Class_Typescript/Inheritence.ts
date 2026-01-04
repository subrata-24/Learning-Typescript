class User{
    userName: string;
    age: number;
    
    constructor(name: string, age: number){
        this.userName = name;
        this.age = age;
    }

    display(): void{
        console.log(`Username is ${this.userName} and age is ${this.age}`);
    }
};

class Student extends User {
    studentId: number;
    constructor(name: string, age: number, studentId: number){
        super(name, age);
        this.studentId = studentId;
    }

    display(): void{
        console.log(`Username is ${this.userName}, age is ${this.age} and student id is ${this.studentId}`);
    }
};

let student1 = new Student("Subrata Biswas", 30, 1902024);
student1.display();

let student2 = new User("Arohi", 24);
student2.display();

