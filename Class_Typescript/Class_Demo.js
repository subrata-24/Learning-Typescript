/**
 TypeScript Classes & Access Modifiers:
 - Classes are blueprints for creating objects. TypeScript adds Access Modifiers to control the visibility of properties. 'public' - (default) allows access to the class member from anywhere, 'private' - ensures data can only be accessed  within the class, protecting it from external interference.'protected' - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // 'public' is the default; it allows access from anywhere
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.
// Parameter Properties 
var Person1 = /** @class */ (function () {
    /*
      By adding 'private' directly in the constructor arguments, TypeScript automatically creates the property and assigns the value for us.
      This replaces the need for separate declaration and 'this.name = name'.
     */
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Mike");
console.log(person1.getName());
// Readonly Properties in Classes
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name; // Initialization is allowed here
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Dustin");
console.log(person2.getName());
/*
  - 'private': Restricts property access to the class itself.
  - 'readonly': Ensures a property value is set once and never changed.
  - Parameter Properties: Use access modifiers in the constructor to write cleaner, shorter code.
*/ 
