//Abstract class: Use as a base class for child class
abstract class User{
    userName: string;
    age: number;
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    // Normal (concrete) method
    // Child classes are NOT forced to override this
    checkAbstractProperty(): void{
        console.log("Normal method is not required to use in child class")
    }

     // Abstract method
    // Child classes MUST implement this method
    abstract display(): void;
}

class Student extends User{
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log("Abstract must be use in child class");
        console.log(`Student name is ${this.userName},age is ${this.age} and ID is ${this.studentId}`)
    }
}

let student1 = new Student("subrata", 26, 1902024);
student1.display();

// let User1 = new User("Subrata", 25); 
// Error: Can not make object by abstract class