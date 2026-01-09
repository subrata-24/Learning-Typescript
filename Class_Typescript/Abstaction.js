//Abstract class: Use as a base class for child class
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // Normal (concrete) method
    // Child classes are NOT forced to override this
    checkAbstractProperty() {
        console.log("Normal method is not required to use in child class");
    }
}
class Student extends User {
    studentId;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    display() {
        console.log("Abstract must be use in child class");
        console.log(`Student name is ${this.userName},age is ${this.age} and ID is ${this.studentId}`);
    }
}
let student1 = new Student("subrata", 26, 1902024);
student1.display();
export {};
// let User1 = new User("Subrata", 25); 
// Error: Can not make object by abstract class
//# sourceMappingURL=Abstaction.js.map