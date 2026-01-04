/*
    Access Modifiers in TypeScript:
    public    : (default) Access from anywhere
    protected : Access only inside class and child class
    private   : Access only inside the same class
    readonly  : Can read value, but cannot modify it
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, password, marks) {
        this.userName = name;
        this.age = age;
        this.password = password;
        this.marks = marks;
    }
    User.prototype.display = function () {
        console.log("Username is ".concat(this.userName, " and age is ").concat(this.age));
    };
    // Setter method to update private password
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    // Getter method to access private password
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
// Student class inherits from User
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, password, marks) {
        // Call parent constructor
        var _this = _super.call(this, name, age, password, marks) || this;
        _this.studentId = studentId;
        return _this;
    }
    // Overriding display method
    Student.prototype.display = function () {
        // Protected member can be accessed here
        this.userName = "Access kora jabe";
        console.log("Username is ".concat(this.userName, ", age is ").concat(this.age, " and student id is ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("Subrata Biswas", 30, 1902024, "12edwas", 35);
student1.display();
// Error: protected member cannot be accessed outside class
// student1.userName = "Access kora jabe na";
// Creating User object
var user1 = new User("Arohi", 24, "sdfdsfa", 38);
user1.display();
// Updating private member using setter
user1.setPassword("newPassword123");
// Accessing private member using getter
console.log(user1.getPassword());
// Accessing readonly property
console.log(user1.marks);
// Error: Cannot assign to readonly property
// user1.marks = 79;
