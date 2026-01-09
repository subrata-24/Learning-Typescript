/*
    Access Modifiers in TypeScript:
    public    : (default) Access from anywhere
    protected : Access only inside class and child class
    private   : Access only inside the same class
    readonly  : Can read value, but cannot modify it
*/
class User {
    // Accessible inside class and child class
    userName;
    // Accessible only inside this class
    password;
    // Read-only property (can only be assigned once)
    marks;
    // Public by default
    age;
    constructor(name, age, password, marks) {
        this.userName = name;
        this.age = age;
        this.password = password;
        this.marks = marks;
    }
    display() {
        console.log(`Username is ${this.userName} and age is ${this.age}`);
    }
    // Setter method to update private password
    setPassword(password) {
        this.password = password;
    }
    // Getter method to access private password
    getPassword() {
        return this.password;
    }
}
// Student class inherits from User
class Student extends User {
    studentId;
    constructor(name, age, studentId, password, marks) {
        // Call parent constructor
        super(name, age, password, marks);
        this.studentId = studentId;
    }
    // Overriding display method
    display() {
        // Protected member can be accessed here
        this.userName = "Access kora jabe";
        console.log(`Username is ${this.userName}, age is ${this.age} and student id is ${this.studentId}`);
    }
}
let student1 = new Student("Subrata Biswas", 30, 1902024, "12edwas", 35);
student1.display();
// Error: protected member cannot be accessed outside class
// student1.userName = "Access kora jabe na";
// Creating User object
let user1 = new User("Arohi", 24, "sdfdsfa", 38);
user1.display();
// Updating private member using setter
user1.setPassword("newPassword123");
// Accessing private member using getter
console.log(user1.getPassword());
// Accessing readonly property
console.log(user1.marks);
export {};
// Error: Cannot assign to readonly property
// user1.marks = 79;
//# sourceMappingURL=Encapsulation.js.map