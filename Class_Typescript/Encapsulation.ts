/*
    Access Modifiers in TypeScript:
    public    : (default) Access from anywhere
    protected : Access only inside class and child class
    private   : Access only inside the same class
    readonly  : Can read value, but cannot modify it
*/

class User {
    // Accessible inside class and child class
    protected userName: string;

    // Accessible only inside this class
    private password: string;

    // Read-only property (can only be assigned once)
    readonly marks: number;

    // Public by default
    age: number;

    constructor(
        name: string,
        age: number,
        password: string,
        marks: number
    ) {
        this.userName = name;
        this.age = age;
        this.password = password;
        this.marks = marks;
    }
    display(): void {
        console.log(`Username is ${this.userName} and age is ${this.age}`);
    }

    // Setter method to update private password
    setPassword(password: string): void {
        this.password = password;
    }

    // Getter method to access private password
    getPassword(): string {
        return this.password;
    }
}

// Student class inherits from User
class Student extends User {
    studentId: number;

    constructor(
        name: string,
        age: number,
        studentId: number,
        password: string,
        marks: number
    ) {
        // Call parent constructor
        super(name, age, password, marks);
        this.studentId = studentId;
    }

    // Overriding display method
    display(): void {
        // Protected member can be accessed here
        this.userName = "Access kora jabe";

        console.log(
            `Username is ${this.userName}, age is ${this.age} and student id is ${this.studentId}`
        );
    }
}

let student1 = new Student(
    "Subrata Biswas",
    30,
    1902024,
    "12edwas",
    35
);
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

// Error: Cannot assign to readonly property
// user1.marks = 79;
