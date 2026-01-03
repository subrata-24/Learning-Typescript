/**
 TypeScript Classes & Access Modifiers:
 - Classes are blueprints for creating objects. TypeScript adds Access Modifiers to control the visibility of properties. 'public' - (default) allows access to the class member from anywhere, 'private' - ensures data can only be accessed  within the class, protecting it from external interference.'protected' - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  // 'public' is the default; it allows access from anywhere
  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); 
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.



// Parameter Properties 
class Person1 {
  /*
    By adding 'private' directly in the constructor arguments, TypeScript automatically creates the property and assigns the value for us.
    This replaces the need for separate declaration and 'this.name = name'.
   */
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Mike");
console.log(person1.getName());

// Readonly Properties in Classes
class Person2 {
    // 'readonly' prevents the value from being changed after the constructor runs
    private readonly name: string;

    public constructor(name: string) {
        this.name = name; // Initialization is allowed here
    }

    public getName(): string {
        return this.name;
    }

    /*
    public setName(newName: string) {
        this.name = newName; // Error: Cannot assign to 'name' because it is a read-only property.
    }
    */
}

const person2 = new Person2("Dustin");
console.log(person2.getName());



/*
  - 'private': Restricts property access to the class itself.
  - 'readonly': Ensures a property value is set once and never changed.
  - Parameter Properties: Use access modifiers in the constructor to write cleaner, shorter code.
*/